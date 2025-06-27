import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  // useEffect will run on component mount and whenever `count` changes
  useEffect(() => {
    console.log(`Count is: ${count}`);
  }, [count]); // dependency array

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UseEffectExample;
