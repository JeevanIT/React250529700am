import React from 'react'

const Logout = () => {
  return (
    <div>
        <h3>Logout Component</h3>
        <p>You have successfully logged out.</p>
        <ul>
            <li>Thank you for visiting</li>
            <li>We hope to see you again soon</li>
            <li>Your feedback is valuable to us</li>
            <li>Stay connected with us</li>
            <li>Follow us on social media</li>
            </ul>
            <button onClick={() => window.location.reload()}>Signin</button>
        <p>Click the button to return to the login page.</p>
        <p>Have a great day!</p>
        </div>
  )
}

export default Logout