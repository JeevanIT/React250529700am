import React from 'react'

const UpdateCustomState = () => {

    const [user, setUser] = React.useState({
        name: 'Jeevan',
        age: 30,
        city: 'Hyderabad'
    }); 

    const userdetails={
        name: 'John Doe',
        age: 25,
        city: 'New York'
    }
    const updateCity = () => {
        setUser((updatestate) => ({
            ...updatestate,
            city: 'Delhi'
        }));
    }
     const mybuttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px'
    };

  return (
    <div>
        <h3>UpdateCustomState</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
        <button onClick={updateCity} style={mybuttonStyle}>Change City to Delhi</button>
    </div>
  )
}

export default UpdateCustomState