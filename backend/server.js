// // const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');



// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// // Connect to MongoDB
// //mongoose.connect('mongodb://localhost:27017/magic',
// //  {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// mongoose.connect('mongodb://localhost:27017/magic')

//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.error('MongoDB connection error:', err));

// //User schema and model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: {
//     type: String,
//     enum: ["buyer", "seller"]
//   },
//   loginAttempts: { type: Number, default: 0 },
// });

// const otpSchema = new mongoose.Schema({
//   userId: mongoose.Schema.Types.ObjectId,
//   email: { type: String, unique: true },
//   otp: String,
//   expiry: Date,
// });



// const User = mongoose.model('User', userSchema);
// const Otp = mongoose.model('Otp', otpSchema);


// app.post('/register', async (req, res) => {
//   try {
//     const body = req.body;
//     const existEmail = await User.findOne({ email: body.email });
//     if (existEmail) {
//       return res.send({ success: false, message: "User already Exists" });

//     }
//     console.log(existEmail)
//     const hashedPassword = await bcrypt.hash(body.password, 10);
//     body.password = hashedPassword;

//     const newUser = await User.create({ ...body, password: hashedPassword });
//     console.log(newUser)


//     // Define your routes here
//     app.post('/login', async (req, res) => {
//       const { email, password } = req.body;

//       try {
//         const user = await User.findOne({ email });
//         if (!user) {
//           return res.status(400).json({ msg: 'User not found' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//           await User.updateOne({ email }, { $inc: { loginAttempts: 1 } });
//           return res.status(400).json({ msg: 'Invalid email or password' });
//         }

//         if (user.loginAttempts >= 3) {
//           // Send email notification after multiple failed attempts
//           await sendOtpEmail(user.email, 'Please reset your password due to multiple login attempts.');
//         }

//         await User.updateOne({ email }, { loginAttempts: 0 });
//         res.status(200).json({ msg: 'Login successful', user });
//       } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ msg: 'Server error', error: error.message });
//       }
//     });



//     //send otp
//     //   sendOtpEmail(newUser.email, '12345')

//     //     .catch((error) => {
//     //       res.status(500).json({success: false, message: 'Error sending OTP', error });
//     //     });


//     //   return res.status(201).send({success: true, message : "User created", user : newUser});
//     //  }catch(err){
//     //   console.log(err)
//     //   return res.send({success: false, message :err?.message})
//     //  }
//     // })
//     // Generate random OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpiry = new Date();
//     otpExpiry.setMinutes(otpExpiry.getMinutes() + 15); // OTP expires in 15 minutes

//     await Otp.create({
//       userId: newUser._id,
//       email: newUser.email,
//       otp: otp,
//       expiry: otpExpiry,
//     });

//     // Send OTP
//     sendOtpEmail(newUser.email, otp).catch(error => {
//       res.status(500).json({ success: false, message: 'Error sending OTP', error });
//     });

//     return res.status(201).send({ success: true, message: "User created", user: newUser });
//   } catch (err) {
//     console.log(err);
//     return res.send({ success: false, message: err.message });
//   }
// });



// // // In-memory OTP storage (use a database in production)
// //let otpStorage = {};

// // // Create transporter outside the function
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'dharshinis.act@gmail.com',
//     pass: 'adjpfiukeqyelzrm',
//   },
// });

// // Function to send OTP email
// const sendOtpEmail = (email, otp) => {
//   const mailOptions = {
//     from: 'dharshinis.act@gmail.com',
//     to: email,
//     subject: 'Your OTP Code',
//     text: `Your OTP code is ${otp}`,
//   };

//   return transporter.sendMail(mailOptions);
// };

// // Endpoint to send OTP
// //app.get('/send-otp', (req, res) => {
// // Your code to handle the request

// // const { email } = req.body;
// // const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
// // res.send('OTP sent!');



// // otpStorage[email] = otp;

// // sendOtpEmail(email, otp)
// //   .then(() => {
// //     res.json({ message: 'OTP sent to email' });
// //   })
// //   .catch((error) => {
// //     res.status(500).json({ message: 'Error sending OTP', error });
// //   });
// // });

// // Endpoint to verify OTP
// app.post('/verify-otp', async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     const record = await Otp.findOne({ email, otp });

//     if (record && record.expiry > new Date()) {
//       await Otp.deleteOne({ _id: record._id }); // Delete OTP record after successful verification
//       res.status(200).json({ message: 'OTP verified successfully', success: true });
//     } else {
//       res.status(400).json({ message: 'Invalid or expired OTP', success: false });
//     }
//   } catch (error) {
//     console.error('OTP verification error:', error);
//     res.status(500).json({ message: 'Server error', success: false, error: error.message });
//   }
// });


// //   const { email, otp } = req.body;

// //   if (otpStorage[email] === parseInt(otp, 10)) {
// //     delete otpStorage[email];
// //     res.json({ message: 'OTP verified' });
// //   } else {
// //     res.status(400).json({ message: 'Invalid OTP' });
// //   }
// // });











// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });






const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



mongoose.connect('mongodb://localhost:27017/magic')

  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["buyer", "seller"]
  },
  verified: { type: Boolean, default: false },
  loginAttempts: { type: Number, default: 0 },
});

const otpSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  email: { type: String, unique: true },
  otp: String,
  expiry: Date,
});



const User = mongoose.model('User', userSchema);
const Otp = mongoose.model('Otp', otpSchema);

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dharshinis.act@gmail.com',
    pass: 'adjpfiukeqyelzrm',
  },
});

const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: 'dharshinis.act@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  return await transporter.sendMail(mailOptions);
};



app.post('/register', async (req, res) => {
  try {
    const body = req.body;
    console.log(body)
    const existEmail = await User.findOne({ email: body.email });
    console.log(existEmail)
    if (existEmail) {
      if (!existEmail.verified) {
        await Otp.deleteOne({ email: existEmail.email });

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = new Date();
        otpExpiry.setMinutes(otpExpiry.getMinutes() + 15);

        await Otp.create({
          userId: existEmail._id,
          email: existEmail.email,
          otp: otp,
          expiry: otpExpiry,
        });

        sendOtpEmail(existEmail.email, otp).catch(error => {
          console.log(error)
          return res.status(500).json({ success: false, message: 'Error sending OTP', error });
        });

        return res.status(201).send({ success: true, message: "User created", user: existEmail });
      }
      return res.send({ success: false, message: "User already Exists" });

    }
    console.log(existEmail)
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;

    const newUser = await User.create({ ...body, password: hashedPassword });
    console.log(newUser)


    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date();
    otpExpiry.setMinutes(otpExpiry.getMinutes() + 0.45);

    await Otp.create({
      userId: newUser._id,
      email: newUser.email,
      otp: otp,
      expiry: otpExpiry,
    });

    await sendOtpEmail(newUser.email, otp).catch(error => {
      return res.status(500).json({ success: false, message: 'Error sending OTP', error });
    });

    return res.status(201).send({ success: true, message: "User created", user: newUser });
  } catch (err) {
    console.log(err);
    return res.send({ success: false, message: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(200).json({ msg: 'User not found' });
    }

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      await User.updateOne({ email }, { $inc: { loginAttempts: 1 } });
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    if (user.loginAttempts >= 3) {
      await sendOtpEmail(user.email, 'Please reset your password due to multiple login attempts.');
    }

    await User.updateOne({ email }, { $set: { loginAttempts: 0 } });
    res.status(200).json({ msg: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});



app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const record = await Otp.findOne({ email });

    if (record) {
      if (otp == record.otp) {
        await Otp.deleteOne({ _id: record._id });
        await User.updateOne({ email }, { verified: Boolean(true) });
        return res.status(200).json({ message: 'OTP verified successfully', success: true });
      }
      //res.status(200).json({ message: 'OTP verified successfully', success: true });
    } else {
      res.status(400).json({ message: 'Invalid or expired OTP', success: false });
    }
  } catch (error) {
    console.error('OTP verification error:', error);
    return res.status(500).json({ message: 'Server error', success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});