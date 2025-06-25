import React, { useContext } from 'react'
import { MyContext } from './CreateContext';

const Childone = () => {
    // This component can be used to consume the context values provided by the MyContext.Provider
    // It can access the userDetails and other context values without passing them as props
    // You can use the useContext hook to access the context values in this component
    // import { useContext } from 'react';
    // import { MyContext } from './CreateContext';
    // const context = useContext(MyContext);
    // const { userDetails, isAuthenticated, theme, skill, level, duration } = context;
    const context=useContext(MyContext);
    const { userDetails,isAuthenticated, theme, skill, level, duration } = context;
    // Destructuring the context object to extract userDetails, isAuthenticated, theme, skill, level, and duration
  return (
    <div>
        <h1>Child One Component</h1>
        <p style={{color:'blue', fontSize:'18px'}}>User Name: {userDetails.name}</p>
        <p style={{color:'blue', fontSize:'18px'}}>User Email: {userDetails.email}</p>
        <p style={{color:'blue', fontSize:'18px'}}>User Age: {userDetails.age}</p>
        <p style={{color:'blue', fontSize:'18px'}}>User Address: {userDetails.address}</p>
        <p style={{color:'blue', fontSize:'18px'}}>User Phone: {userDetails.phone}</p>
    </div>
  )
}

export default Childone