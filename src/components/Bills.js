import React, {useState} from 'react'

// function Bills() {
//   const [bill, setBill] = useState(0);

//   return (
//     <div>
//       <input type={number} placeholder = "enter your bill here" 
//       onChange = {setBill(val.target.value)}/>
//     </div>
//   )
// }
const Bills = () => {
const example = () => {
  const data =[{id:1 ,name: "Users1", description: "desc1"}, 
              {id:2 ,name: "Users2", description: "desc2"}];
  return (
    <div>
    {data.map(function(cValue, idx){
        console.log("currentValue.id:",cValue.id);
        console.log("currentValue.name:",cValue.name);
        console.log("currentValue.description:",cValue.description);
       return (<li key={idx}>name = {cValue.name} description = {cValue.description}</li>)
    })}
    </div>
    );
  }

return(
  <p style = {{color:'white'}}>
    {example()}
  </p>
);

export default Bills