import React from 'react';
import {  Routes, Route, Navigate, NavLink} from 'react-router-dom';
import About from './components/about'
import Home from './components/Home'


const App = () => {
 


  return (
    <div>
      App Page
    
<NavLink to='/' style={({ isActive })=>{
  return{color:isActive?'red':''}
}} >Home </NavLink>
<NavLink to='about' style={({ isActive })=>{
  return{color:isActive?'red':''}
}}  > About</NavLink>
      <Routes>
    <Route path='/about' element={<About/>} />
    <Route path='/' element={<Home/>} />
    <Route path='*' element={<Navigate to='/about'/>} />
    
      </Routes>


      
    </div>
  );
}

export default App;
