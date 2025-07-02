import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);

    const mystyle={
        heading:{
            color:'red',
        },
        para:{
            color:'green',
            textAlign:'center'
        }
    }
    const IncValue=()=>{
        setCount(count+10)
    }
       const DecValue=()=>{
        setCount(count-5)
    }
  return (
    <div>
        <h1 style={mystyle.heading}>Welcome to Counter Program</h1>
        <h2 style={mystyle.para} data-testid='defaultvalue'>Default Value: {count}</h2>

        <button onClick={IncValue} data-testid='increment-btn'>IncValue</button>
        <button onClick={DecValue} data-testid='decrement-btn'>DecValue</button>
    </div>
  )
}

export default Counter