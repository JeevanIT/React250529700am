import React from 'react'
import { connect } from 'react-redux'
import { DecAction, IncAction } from './Action'

const PrintStoreValue = (
    {
        welcome,
        mydata,
        duration,
        level,
        skill,
        count,
        IncAction,
        DecAction
    }) => {
  return (
    <div>
    <h3>PrintStoreValue</h3>
    <p>Welcome Note{welcome}</p>
    <p>Course Name: {mydata}</p>
    <p>Duration: {duration}</p>
    <p>Level: {level}</p>
    <p>Skill: {skill}</p>
    <p>Count: {count}</p>
    {/* The PrintStoreValue component is a functional component that receives props from the Redux store.   
    It displays the welcome message, course data, and count from the Redux store. */}
    <button className='btn btn-primary' onClick={IncAction}>Increase Action</button>
    <button className='btn btn-danger'onClick={DecAction}>Decrease Action</button>
    </div>
  )
}
const mapStateToProps = (state) => ({
    welcome: state.welcome,
    mydata: state.mydata.course,
    duration: state.mydata.duration,
    level: state.mydata.level,
    skill: state.mydata.skill,
    // The mapStateToProps function is used to map the state from the Redux store to
    // the props of the component. It allows the component to access the state values.
    // In this case, it maps the welcome message, course data, and count from the 
    // Redux store to the component's props.
    count: state.count
})

export default connect(mapStateToProps,{IncAction,DecAction}) (PrintStoreValue);