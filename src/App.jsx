import {Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Discover from './Discover/Discover'
import Join from './Join/Join'
import '/src/App.css'
import { useEffect, useState } from 'react'




function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='discover' element={<Discover />}/>
        <Route path='join' element={<Join />}/>
      </Routes>
    </>
  )
}

export default App
