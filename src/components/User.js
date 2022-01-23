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
            <h1>User Data</h1>
            <Link to="/"> <button >Go To home
        </button>
        </Link> 

            {
                a.map((v,i)=>{
                    return(
                        <div key={i}>
                            <hr />

                        <p>Name: {v.name}</p>
                        <p>Email: {v.Course}</p>
                        <hr />
                        </div>
                        )
                })
            }
        </div>
    );
}

export default User;
