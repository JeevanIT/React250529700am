import React,{useRef} from 'react'

const UserRefHook = () => {
    // The useRef hook is used to create a mutable reference that persists for the lifetime of the component.
    // It can be used to access DOM elements directly, store values that do not trigger re-renders, and manage focus, among other things.
    // The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).

    const myRef = useRef(null);
    const addstyle = useRef(null);
    const myInput = useRef(null);

    // The useRef hook is often used to access DOM elements directly, allowing you to manipulate them without causing re-renders.

    const changeHeading = () => {
        // Accessing the current value of the ref and changing its text content
        if (myRef.current) {
            myRef.current.textContent = "UserRef Hook Example Key Features";
        }
        // Changing the style of the paragraph element using the ref
        if (addstyle.current) {
            addstyle.current.classList.toggle('paragraphstyles');
        }
    }

    const getInputvalues = () => {
        // Accessing the current value of the input field using the ref
    
            const inputValue = myInput.current.value;
            console.log("Input Value:", inputValue);
     
       
    }

  return (
    <div>
    <h2>Working with User Ref Hook</h2>
    <p ref={addstyle} style={{color: 'blue', fontSize: '20px'}}>
      The useRef hook is a powerful feature in React that allows you to create a mutable reference that persists for the lifetime of the component. It can be used to access DOM elements directly, store values that do not trigger re-renders, and manage focus, among other things.  
      </p>
      <h3 ref={myRef}>Key Features of useRef Hook:</h3>
        <ul>
            <li>Mutable Reference: The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).</li>
            <li>Accessing DOM Elements: It is often used to access DOM elements directly, allowing you to manipulate them without causing re-renders.</li>
            <li>Storing Values: You can store any value in the ref object, and it will persist for the lifetime of the component.</li>
            <li>Focus Management: It can be used to manage focus on input fields or other interactive elements.</li>
            </ul>
            <button onClick={changeHeading}>Change Heading</button>

          
            <label htmlFor="name">Name:</label> 
            <input type="text" id="name" ref={myInput} />

            <button type="submit" onClick={getInputvalues}>Submit</button>
         
  
    </div>
  )
}

export default UserRefHook