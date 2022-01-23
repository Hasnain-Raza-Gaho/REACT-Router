import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Home() {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  let navigate = useNavigate()
console.log(name)
  return (
    <>
      <p>Put your Data to Sign In</p>
      <label htmlFor="name">Name:
      <input type="text" onChange={(n)=>setName(n.target.value)} />
      </label>
      <br />
      <label htmlFor="name">Email:
      <input type="email" onChange={(e)=>setEmail(e.target.value)}  />
      </label>

      <br />
      <button onClick={()=>navigate("/user",{
           state : {
               name : name,
               email : email
           }
        }
        )}>onClick</button>
    </>

  )
}

export default Home;