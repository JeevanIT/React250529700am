import React, { useState } from 'react'
import Child from './Child';
import Child2 from './Child2';

const Parent = () => {
    const myname = 'Jeevan';
    const mySubtitle = 'Welcome to the Parent Component';

    const [user, setUser] = React.useState({
        name: 'John Doe',
        age: 30,
        email: 'john@gmail.com'
    });

    const { name, age, email } = user;
  return (
    <div>
        <h3>Working with Parent Component</h3>
        <Child 
        name={name}
        age={age}
   
        />
        <Child2 
        myname={myname}
        mySubtitle={mySubtitle}
        email={email}
        />

    </div>
  )
}

export default Parent