import React from 'react'
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Skills from '../src/Pages/Skills'
import Projects from '../src/Pages/Projects'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
     <Router>
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Projects' element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
