import React from 'react'
import Login from './Login';
import Logout from './Logout';

const RenderComponent = () => {
    const isLoggedIn = false; // Change this to false to test the other component   
    const condition2 = false; // This variable is not used in the current implementation, but can be used for additional conditions if needed 
  return (
    <div>
        <h3>RenderComponent</h3>
       {/*  {isLoggedIn ?<Login /> :<Logout />}
        <p>This component conditionally renders either the Login or Logout component based on the isLoggedIn state.</p> */}
        { condition2 && <p>This is an additional condition that can be used to render more content if needed.</p> }
        {condition2 ? <p>Condition 2 is true, you can add more content here.</p> : <p>Condition 2 is false, no additional content.</p>}
    </div>
  )
}

export default RenderComponent