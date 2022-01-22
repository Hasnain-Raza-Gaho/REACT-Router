import { Link } from "react-router-dom";
import { useState } from "react";


function Home() {

  const [name,setName] = useState()
  const [email,setEmail] = useState()

  return (
    <>
      <p>Put your Data to Sign In</p>
      <label htmlFor="name">Name:
      <input type="text" onChange={setName} />
      </label>
      <br />
      <label htmlFor="name">Email:
      <input type="email" value={setEmail} />
      </label>

      <br />
      <Link to="/user"> <button >Sign In</button></Link>
    </>

  )
}

export default Home;