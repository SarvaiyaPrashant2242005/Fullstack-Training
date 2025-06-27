import React, { useState } from 'react'

const UseState = () => {
    const [count , setCount] = useState(0);

    const handleINC = () => {
        setCount(count+1);
    }

    const handleRES = () => {
        setCount(0)
    }
    const handleDEC = () => {
        setCount(count-1);
    }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={handleINC} style={{marginRight:'0.7rem'}}>increament</button>
    <button onClick={handleRES} style={{marginRight:'0.7rem'}}>reset</button>
    <button onClick={handleDEC} style={{marginRight:'0.7rem'}}>decreament</button>


 
    </>
  )
}

export default UseState