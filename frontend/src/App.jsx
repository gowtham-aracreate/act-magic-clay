import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import Dashboard from './layout/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  const showAllItems = true;

  return (
    <div className="flex bg-gray-200">
    <Sidebar showAllItems={showAllItems} />
    <div className="flex-1 flex flex-col bg-gray-200">
    <Header showAllItems={showAllItems} />
    <Dashboard/>
    </div>
  </div>
  )
}

export default App
