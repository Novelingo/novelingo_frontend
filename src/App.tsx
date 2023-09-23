import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Novels from './pages/Novels';
import Generate from './pages/Generate';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
       <Navbar/>
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/novels' element={<Novels />} />
            <Route path='/generate' element={<Generate />} />
          </Routes>
    </>

  );
}


export default App;
