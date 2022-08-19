import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sardar");

  const result = useMemo(() => {
    return (
      <div>
        <h2>NO render on count update {count}</h2>
      </div>
    );
  }, [name]);

  return (
    <div>
      {result}
      <h2>always render on count update {count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setName("Zulfiqar")}>Update Name</button>
    </div>
  );
}

export default UseMemo;
