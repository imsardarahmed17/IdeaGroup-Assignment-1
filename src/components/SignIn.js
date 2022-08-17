import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

function SignIn({ myPassward, myUsername }) {
  const [passward, setPassward] = useState(null);
  const [username, setUsername] = useState(null);
  const [status, setStatus] = useState(false);
  
//function to confirm uername and passward
  const verifyPassward = () => {
    setStatus(passward === myPassward && username === myUsername);
  };
  return (
    <div style={{ backgroundColor:"beige", color: "black"}}>
      <h3>Login please;</h3>
      <TextField id="standard-basic" label="enter username here" variant="standard"
      onChange={(e) => setUsername(e.target.value)} /><br/><br/>
      <TextField id="standard-basic" label="enter passward here" variant="standard" 
      onChange={(e) => setPassward(e.target.value)}/>
      <br />
      <br />
      <Button variant="contained" onClick={verifyPassward}>Submit</Button>
      {status ? (
        <h4>you have logged into your account</h4>
      ) : (
        <h4>enter correct username and passward</h4>
      )}
    </div>
  );
}

export default SignIn;
