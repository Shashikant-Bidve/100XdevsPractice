import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RevenueCard from './components/RevenueCard'
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar'
import Table from './components/Table'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='grid grid-cols-5 md:grid-cols-6'>
    <div className='col-auto md:col-span-1 md:visible'>
    <Sidebar></Sidebar>
    </div>
    <div className='col-span-5'>
      <TopBar></TopBar>
      <div className='grid grid-cols-2'>
        <RevenueCard title="Online Orders" amount="231"></RevenueCard>
        <RevenueCard title="Amount received" amount="₹ 23,92,65.19"></RevenueCard>
      </div>
      <Table></Table>
      </div>
    </div>
    </>
  )
}

export default App
