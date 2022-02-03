import React,{useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'

const App = () => {

  const [user, setUser] = useState(false)

  return (
    <div className='App'>
      App component
      <Routes>
        <Route path='/auth' element={<Auth auth={()=>setUser(true)}/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
