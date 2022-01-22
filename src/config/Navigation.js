import { Route, Routes } from "react-router-dom";
import About from "../components/about";
import Home from "../components/Home";
import User from '../components/User'

function Navigation(){
    return(
        <>
        <h1>router Class</h1>
        <Routes>
            <Route path="/about"   element={<About/>} /> 
            <Route path="/"   element={<Home/>} />
            <Route path="/user"   element={<User/>} />
        </Routes>
        </>
    )
}

export default Navigation