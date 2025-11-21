import { useState } from 'react'
import './App.css'
import TaskList from './TaskList'

function App() {
  
  return (
    <div className='space-y-6 flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl font-bold text-indigo-600'>Daily Tasks Dashboard</h1>
      <TaskList />
    </div>
  )
}

export default App
