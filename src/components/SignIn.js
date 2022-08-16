import React, { useState } from "react";
import Button from "@mui/material/Button";

function SignIn({ myPassward, myUsername }) {
  const [passward, setPassward] = useState(null);
  const [username, setUsername] = useState(null);
  const [status, setStatus] = useState(false);

  const verifyPassward = () => {
    setStatus(passward === myPassward && username === myUsername);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter username here"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter passward here"
        onChange={(e) => setPassward(e.target.value)}
      />
      <br />
      <br />
      <Button onClick={verifyPassward}>Submit</Button>
      {status ? (
        <h4>you have logged into your account</h4>
      ) : (
        <h4>enter correct username and passward</h4>
      )}
    </div>
  );
}

export default SignIn;
