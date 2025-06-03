import React from 'react'
import Child2Child from './Child2Child'
const Child2 = (props) => {
  return (
    <div>
    <h3>Child2 component</h3>
    <p style={{color: 'red', fontSize: '20px'}}>My Name: {props.myname}</p>
    <p>Email: {props.email}</p>
    <p style={{color: 'blue', fontSize: '18px'}}>My Subtitle: {props.mySubtitle}</p>

    <Child2Child 
    email={props.email}
    myname={props.myname}
    mySubtitle={props.mySubtitle}
    />

    </div>
  )
}

export default Child2