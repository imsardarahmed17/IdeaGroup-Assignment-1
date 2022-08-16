// import React, { useState } from "react";
// import Accounts from "./Accounts";
import SignIn from "./SignIn";

function Parent() {
  let myUsername = "iamsamalik";
  let myPassward = "abc";
  return (
    <div>
      {/* <Accounts/> */}
      <SignIn myUsername={myUsername} myPassward={myPassward} />
    </div>
  );
}

export default Parent;
