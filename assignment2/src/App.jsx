import React from 'react'
import './App.css'

import {Link, Route, Routes} from 'react-router-dom'

import Home from './Home/home'
import User from './User/user'
import Nexted from './Next/nexted'
import Next1 from './Next/next1'
import Next2 from './Next/next2'
import Navbar from './Navbar/navbar'

const App = () => {
  return (
    <div className='app'>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/nexted" element={<Nexted />} />
        <Route path="/nexted/next1" element={<Next1 />} />
        <Route path="/nexted/next2" element={<Next2 />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  )
}

export default App