import React, { useContext } from 'react'
import { MyContext } from './CreateContext'

const Childtwo = () => {
    // This component can be used to display information or perform actions related to the second child in the context.
    const context = useContext(MyContext);
    // Using the useContext hook to access the context values provided by the MyContext.Provider
    const { userDetails, isAuthenticated, theme, skill, level, duration } = context
  return (
    <div>
        <h1>Child Two Component</h1>
        <p style={{color:'blue', fontSize:'18px'}}>User Skill:{skill}</p>
        <p style={{color:'blue', fontSize:'18px'}}>User Level:{level}</p>
        <p style={{color:'blue', fontSize:'18px'}}>User Duration:{duration}</p>
    </div>
  )
}

export default Childtwo