import React from 'react';
import { useLocation,Link } from "react-router-dom";


const User = () => {
    let loc = useLocation()
    console.log(loc)
let a = [
    {
        name : loc.state.name,
        Course : loc.state.email
    }
    
]


    return (
        <div>
            <h1>User Account Info</h1>
            
            <p><strong>Name: </strong>{loc.state.name}</p>
            <p><strong>Email: </strong>{loc.state.email}</p>
            
            
            
            
            <Link to="/"> <button>SignOut
        </button>
        </Link> 

            
        </div>
    );
}

export default User;
