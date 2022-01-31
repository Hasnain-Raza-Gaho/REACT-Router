import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [name,setName] = useState(null);
    const [course,setCourse] = useState(null);
    const [classs,setClass] = useState(null);
    return (
        <div>
<p>this is from home page</p>

Name: <input type="text" onChange={(e)=> setName(e.target.value)} /> <br />
Class: <input type="text" onChange={(e)=> setClass(e.target.value)} /> <br />
Course: <input type="text" onChange={(e)=> setCourse(e.target.value)} />


<br />
<button onClick={()=>navigate('./about', {state:{
    name,
    classs,
    course
}})}>Sign In</button>
        </div>
    );
}

export default Home;
