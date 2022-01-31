import React from 'react';
import {  Routes, Route, Navigate} from 'react-router-dom';
import About from './components/about'
import Home from './components/Home'


const App = () => {
 


  return (
    <div>
      App Page
      <Routes>
    <Route path='/about' element={<About/>} />
    <Route path='/' element={<Home/>} />
    <Route path='*' element={<Navigate to='/about'/>} />
    
      </Routes>


      
    </div>
  );
}

export default App;
