import React, {useState} from 'react'
// import Bills from "./Bills";

function Accounts() {
  // const [userName, setUserName] = useState(null)
  // const [passward, setPassward] = useState(null)
  // const [bill, setBill] = useState(0);

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

let result = usersInfo.find((element)=>{
  return element.totalAmount > 150000
})
console.log(result);
  return (
    <div>
      {/* <Bills Mybill = {setBill}/> */}
      {/* <input type="number" placeholder = "write username here" 
      onChange={setUserName((val)=> val.targrt.value)}/>
      <input placeholder = "Write Passward here" 
      onChange={setPassward((val)=> val.targrt.value)}/>
      <input placeholder = "Write your bill here" 
      onChange={setBill((val)=> val.targrt.value)}/> */}
<h1>{result}</h1>
      <button>Get Result</button>
    </div>
  )
}

export default Accounts