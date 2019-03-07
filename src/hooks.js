import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>you clicked{count}times</p>
      <button onClick={() => setCount(count + 1)} />
    </div>
  );
}
export default Example;
