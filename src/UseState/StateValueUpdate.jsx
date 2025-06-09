import React from 'react'
import { useState } from 'react';

const StateValueUpdate = () => {

    // This component is intended to demonstrate state value updates
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Jeevan');
    const mybuttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px'
    };
    const handleIncrement = () => {
        setCount(count + 1);
        setName('Jeevan Konduru');
    };
    const increment=()=>setCount(count + 1);

    const hendleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert('Count cannot be less than zero');
        }
        setName('Jeevan');   
    }

  return (
    <div>
       <h3>Woring with useState Hook</h3>
       <p>Current Count: {count}</p>
        <p>Current Name: {name}</p>

        <button style={mybuttonStyle} onClick={handleIncrement}>Increment</button>
        <button style={mybuttonStyle} onClick={hendleDecrement}>Decreent</button>
    </div>
  )
}

export default StateValueUpdate