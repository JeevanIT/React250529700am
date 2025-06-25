const welcome='Hi welcome to Redux';
const count=10;
const mydata = {
course: "React",
duration: "6 months",
level: "Intermediate",
skill: "React",

};

const reducer = (state={welcome,mydata,count},action) => {
  
    const {type} = action || {};

    switch(type){
        case 'INCREASE':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREASE':
            return {
                ...state,
                count: state.count - 1
            };
        default:    
    return state;
        }
        
    // The reducer function takes the current state and an action as arguments and returns the new state.
    // In this case, it simply returns the initial state without modifying it.
    // This is a basic example of a reducer that does not handle any actions or state changes.
  
}

export default reducer