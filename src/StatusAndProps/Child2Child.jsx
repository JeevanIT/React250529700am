import React from 'react'

const Child2Child = (props) => {
  return (
    <div>
        <h3>Child2Child </h3>
        <p>Email : {props.email}</p>
        <p>My Name: {props.myname}</p>
    </div>
  )
}

export default Child2Child