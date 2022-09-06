import React from 'react'
// import Dashboard from './components/Dashboard'
import TestChart from './components/Charts/TestChart'
import Layout from './components/Layout'
import SliderTest from './components/SliderTest'
const App = () => {
  return (
    <div className='container-auto'>
      <h1 className='text-3xl text-center font-bold'>Admin Dashboard</h1>
      {/* <h1 className='text-3xl font-bold underline'>Dashboard</h1> */}
      {/* <Dashboard />
      <TestChart /> */}

      <Layout />
      {/* <SliderTest /> */}

    </div>
  )
}

export default App