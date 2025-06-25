
import React,{createContext, useEffect, useState} from 'react'
import Childone from './Childone';
import Childtwo from './Childtwo';

const MyContext = createContext();
// This creates a context object that can be used to share data between components without passing props manually at every level.
// The createContext function is used to create a context object, which can be used to provide and consume values in a React application.
// The context object can be used to provide values to components that are descendants of the context provider.


const CreateContext = () => {
    // This component can be used to provide context values to its children.
   const [data, setData] = useState([]);
   
   useEffect(() => {
    //fetching data from an API or performing any side effects when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error('Error fetching data:', error));
   }, []);
   
   // This state can be used to store data that can be shared with child components.
    const userDetails = {
        name: 'John Doe',
        email: 'john@gmail.com',
        age: 30,
        address: '123 Main St, City, Country',
        phone: '123-456-7890'
    };
    const contextValue = {
        userDetails,
        isAuthenticated: false,
        theme: 'dark',
        skill:'React',
        level: 'Intermediate',
        duration: '6 months'
    }
  return (
    <div>
    <h1>Create Context Example</h1>
    <MyContext.Provider value={contextValue}>
        { contextValue.isAuthenticated ? <Childone /> : <Childtwo />}       
        {/* The Childone component can consume the context values provided by the MyContext.Provider */}
        {/* This allows Childone to access the userDetails and other context values without passing them as props */}   
        
    </MyContext.Provider>
     {/* The MyContext.Provider component is used to provide the context values to its children.   */}
        
    </div>
  )
}

export default CreateContext;
export { MyContext };
// The MyContext object can be exported so that it can be used in other components to access the context values.
// This allows components to consume the context values provided by the CreateContext component or any other component