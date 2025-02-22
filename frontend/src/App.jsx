import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Cart2 from './components/Cart2'
import Summary from './components/Summary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cart />
     <Cart2 />
     <Summary />
    </>
  )
}

export default App
