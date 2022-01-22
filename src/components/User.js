import React from 'react';

const User = () => {

let a = [
    {
        name : "Asad",
        Course : 'Ai'
    },
    {
        name : "Ali",
        Course : 'Flutter'
    },
    {
        name : "Amir",
        Course : 'Web App'
    },
    {
        name : "Salu",
        Course : 'Graphic'
    },
]


    return (
        <div>
            <h1>User Data</h1>

            {
                a.map((v,i)=>{
                    return(
                        <div key={i}>
                            <hr />

                        <p>Name: {v.name}</p>
                        <p>Course: {v.Course}</p>
                        <hr />
                        </div>
                        )
                })
            }
        </div>
    );
}

export default User;
