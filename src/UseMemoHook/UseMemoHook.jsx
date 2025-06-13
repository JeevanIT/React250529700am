import React,{useMemo} from 'react'

const UseMemoHook = () => {

    // The useMemo hook is used to memoize a value, preventing it from being recalculated on every render unless its dependencies change.
    // This is particularly useful for optimizing performance in components that perform expensive calculations or operations.
    // It helps avoid unnecessary recalculations of values that do not change frequently, thus improving the performance of the component.
    // The useMemo hook takes two arguments: a function that returns the value to be memoized and an array of dependencies.
    // When the dependencies change, the function is executed again to recalculate the value; otherwise, the memoized value is returned.
    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        return num * 2; // Example of an expensive calculation
    }
    const memoizedValue = useMemo(() => expensiveCalculation(10), []); // Memoizing the result of the calculation
    // The useMemo hook is often used to optimize performance in components that rely on expensive calculations or operations.
  

    const number1 = 10;
    const number2 = 60;
    // Example of using useMemo to memoize a value based on dependencies
    const sum = useMemo(() => {
        console.log("Calculating sum...");
        return number1 + number2; // Example of an expensive calculation
    }, [number1, number2]); // Memoizing the sum of two numbers


    return (
    <div>
    <h3>Working with UseMemoHook</h3>
    <p>
        The <code>useMemo</code> hook is used to memoize a value, preventing it from being recalculated on every render unless its dependencies change. This is particularly useful for optimizing performance in components that perform expensive calculations or operations. 
    </p>
    <p>{memoizedValue}</p>
    <p>
        It helps avoid unnecessary recalculations of values that do not change frequently, thus improving the performance of the component. 
    </p>
    <h2>{sum}</h2>
    </div>
  )
}

export default UseMemoHook