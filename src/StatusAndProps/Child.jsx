import React from 'react'

const Child = (props) => {
    const { name, age } = props;
    // Destructuring props to extract name and age
  return (
    <>
      <p style={{color:'Blue',fontSize:'18px'}}>User Name: {name}</p>
        <h3 style={{color: 'red', fontSize: '20px'}}>
        Child Component
      </h3>

      
        <p>User Age:{age}</p>
     
  </>
  )
}

export default Child