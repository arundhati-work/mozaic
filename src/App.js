import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Blog from './routes/Blog';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </div>
  );
}

export default App;