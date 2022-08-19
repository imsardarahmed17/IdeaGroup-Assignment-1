import React, { useState, useEffect } from "react";

function UseEffect() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);
  const upateCount = () => setCount(count + 1);
  const upateData = () => setData(data + 1);
  useEffect(() => {
    alert("Hello world");
  }, [data]);

  return (
    <div>
      <h1>useEffect example</h1>
      <h1>The data is: {data}</h1>
      <h1>The count is: {count}</h1>
      <button onClick={upateData}>update data</button>
      <button onClick={upateCount}>update count</button>
    </div>
  );
}

export default UseEffect;
