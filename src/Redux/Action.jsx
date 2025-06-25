export const IncAction =()=> async dispatch=>{
    dispatch({
        type: 'INCREASE',
        
    });
    // The IncAction function is an action creator that returns an asynchronous function.
    // It uses the async/await syntax to handle asynchronous operations, allowing for more readable and maintainable code.
    // The function dispatches an action with the type 'INCREASE' to the Redux store
    // The INCREASE action creator is an asynchronous function that dispatches an action to increase the count by 1.

}
export const DecAction =()=> async dispatch=>{
    dispatch({
        type: 'DECREASE',
        
    }); 
    // The DecAction function is an action creator that returns an asynchronous function.
    // It uses the async/await syntax to handle asynchronous operations, allowing for more readable and maintainable code.
    // The function dispatches an action with the type 'DECREASE' to the Redux store
    // The DECREASE action creator is an asynchronous function that dispatches an action to decrease the count by 1.
}   


