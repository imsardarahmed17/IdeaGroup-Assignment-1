import React, { useState } from "react";

function SignIn() {
  const [passward, setPassward] = useState(null);
  const [username, setUsername] = useState(null);
  const [status, setStatus] = useState(false)
  let myUsername = "xyz"
  let myPassward = "samalik"
  const verifyPassward = ()=>{
    setStatus (passward === myPassward && username === myUsername)
  }
  return (
    <div>
      <input type="text" placeholder="username here" 
      onChange ={(e)=> setUsername(e.target.value)} /><br/>
      <input type="passward" placeholder="passward here" 
      onChange ={(e)=> setPassward(e.target.value)} />
      <br/><br/>
      <button onClick={verifyPassward} >Click Me</button>
      {
        status ? <h4>you logged in</h4>:
        <h4>enter username and passward</h4>
      }
      {/* <h1>{myPassward}</h1>
      <h1>{myUsername}</h1> */}

    </div>
  );
}

export default SignIn;
