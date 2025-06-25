import React, { useState } from 'react'

const Hoc = () => {
    // Higher-Order Component (HOC) is a function that takes a component and returns a new component.
    // It is used to enhance the functionality of a component by adding additional props or behavior.
    // HOCs are often used for cross-cutting concerns like logging, authentication, or data fetching.

  return (
    <div>
    <h1>Welcome to HOC Component</h1>
    <Hocred comp={Counter}/>
    <Hocblue comp={Counter}/>    
    </div>
  )

}

function Hocred(props){
    // This is a simple example of a Higher-Order Component (HOC) that wraps a Counter component.
   
    return (
        <div>
            <h1 style={{background:'red', width:'100%'}}>
                Higher Order Red Component 
                <props.comp />
            </h1>
          
        </div>
    );
}

function Hocblue(props){
    // This is a simple example of a Higher-Order Component (HOC) that wraps a Counter component.
   
    return (
        <div>
            <h1 style={{background:'blue', width:'100%'}}>
                Higher Order Blue Component
                <props.comp />
            </h1>
          
        </div>
    );
}


function Counter(){
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={
            () => setCount(count + 1)}
             >Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}
export default Hoc