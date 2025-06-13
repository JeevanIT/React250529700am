import React,{useCallback} from 'react'

const UseCallBack = () => {
    // The useCallback hook is used to memoize a function, preventing it from being recreated on every render unless its dependencies change.
    // This is particularly useful for optimizing performance in components that rely on functions passed as props to child components.
    // It helps avoid unnecessary re-renders of child components that depend on the function, especially when the function is passed down as a prop.
    // The useCallback hook takes two arguments: the function to be memoized and an array of dependencies.
    // When the dependencies change, the function is recreated; otherwise, the same function instance is returned.
    //regular function
    const value = 10;
    const regularFunction = () => {
        console.log("This is a regular function");
    }
    
    const memoizedFunction = useCallback(() => {
        console.log("This is a memoized function using useCallback");
    }, [value]); // The function will only be recreated if 'value' changes

  return (
    <div>
    <h3>Working with UseCallBack</h3>
    <button onClick={regularFunction}>Regular Function</button>
    <p>
        The <code>useCallback</code> hook is used to memoize a function, preventing it from being recreated on every render unless its dependencies change. This is particularly useful for optimizing performance in components that rely on functions passed as props to child components. It helps avoid unnecessary re-renders of child components that depend on the function, especially when the function is passed down as a prop.
        </p>
    <button onClick={memoizedFunction}>Memoized Function</button>
    <p>
        The <code>useCallback</code> hook takes two arguments: the function to be memoized and an array of dependencies. When the dependencies change, the function is recreated; otherwise, the same function instance is returned.
        </p>
    </div>
  )
}

export default UseCallBack