const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
//mongoose.connect('mongodb://localhost:27017/magic',
//  {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
 
mongoose.connect('mongodb://localhost:27017/magic')

.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

//User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {type: String, 
  enum :["buyer", "seller"]},
});

const otpSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  email: { type: String, unique: true },
  otp: String,
  expiry: Date, 
});



const User = mongoose.model('User', userSchema);
const Otp = mongoose.model('Otp', otpSchema);


app.post('/register',async (req, res) => {
 try{
  const body = req.body;
  const existEmail = await User.findOne({email : body.email});
  if(existEmail){
    return res.send({success: false, message : "User already Exists"});

  }
  console.log(existEmail)
  const hashedPassword = await bcrypt.hash(body.password , 10);
  body.password = hashedPassword;

  const  newUser = await User.create({...body , password: hashedPassword});
  console.log(newUser)

  //send otp
//   sendOtpEmail(newUser.email, '12345')
  
//     .catch((error) => {
//       res.status(500).json({success: false, message: 'Error sending OTP', error });
//     });
  

//   return res.status(201).send({success: true, message : "User created", user : newUser});
//  }catch(err){
//   console.log(err)
//   return res.send({success: false, message :err?.message})
//  }
// })
// Generate random OTP
const otp = Math.floor(100000 + Math.random() * 900000).toString();
const otpExpiry = new Date();
otpExpiry.setMinutes(otpExpiry.getMinutes() + 15); // OTP expires in 15 minutes

await Otp.create({
  userId: newUser._id,
  email: newUser.email,
  otp: otp,
  expiry: otpExpiry,
});

// Send OTP
sendOtpEmail(newUser.email, otp).catch(error => {
  res.status(500).json({success: false, message: 'Error sending OTP', error});
});

return res.status(201).send({success: true, message: "User created", user: newUser});
} catch (err) {
console.log(err);
return res.send({success: false, message: err.message});
}
});



// // In-memory OTP storage (use a database in production)
 //let otpStorage = {};

// // Create transporter outside the function
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dharshinis.act@gmail.com',
    pass: 'adjpfiukeqyelzrm',
  },
});

// Function to send OTP email
const sendOtpEmail = (email, otp) => {
  const mailOptions = {
    from: 'dharshinis.act@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  return transporter.sendMail(mailOptions);
};

// Endpoint to send OTP
//app.get('/send-otp', (req, res) => {
  // Your code to handle the request

  // const { email } = req.body;
  // const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  // res.send('OTP sent!');



  // otpStorage[email] = otp;

  // sendOtpEmail(email, otp)
  //   .then(() => {
  //     res.json({ message: 'OTP sent to email' });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ message: 'Error sending OTP', error });
  //   });
  // });

// Endpoint to verify OTP
app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  const record = await Otp.findOne({ email, otp });

  if (record && record.expiry > new Date()) {
    await Otp.deleteOne({ _id: record._id });
  };
});
//   const { email, otp } = req.body;

//   if (otpStorage[email] === parseInt(otp, 10)) {
//     delete otpStorage[email];
//     res.json({ message: 'OTP verified' });
//   } else {
//     res.status(400).json({ message: 'Invalid OTP' });
//   }
// });

  



// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    res.status(200).json({ msg: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});

  

    

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
