import React, {useState} from 'react'
// import Bills from "./Bills";

function Accounts() {
  const [userName, setUserName] = useState(null)
  const [passward, setPassward] = useState(null)
  const [bill, setBill] = useState(0);

 const usersInfo = [
    {
      userName: "zulfi123",
      passward: 12345,
      totalAmount: 250000
    },
    {
      userName: "sardar123",
      passward: 12345,
      totalAmount: 650000
    },
    {
      userName: "sajid123",
      passward: 12345,
      totalAmount: 750000
    },
    {
      userName: "abrar123",
      passward: 12345,
      totalAmount: 5000
    },
    {
      userName: "sherry123",
      passward: 12345,
      totalAmount: 150000
    }
  ]

  const checkResult = (bill)=>{
    if (userName === usersInfo.userName && passward === usersInfo.passward) {
      ()=>{
        let result = usersInfo.totalAmount - bill
      }
    } else {
      result = "your username or passward is incorrect"
    }
  }
  return (
    <div>
      {/* <Bills Mybill = {setBill}/> */}
      <input type="number" placeholder = "write username here" 
      onChange={setUserName((val)=> val.targrt.value)}/>
      <input placeholder = "Write Passward here" 
      onChange={setPassward((val)=> val.targrt.value)}/>
      <input placeholder = "Write your bill here" 
      onChange={setBill((val)=> val.targrt.value)}/>

      <button onClick={checkResult()}>Get Result</button>
      {
          result > 0 ? <h4>your bill is paid and ur remaining balance is {result}</h4>:
          <h4>you don't have enough amount in your account to pay this bill</h4>
      }

    </div>
  )
}

export default Accounts