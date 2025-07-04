import React from 'react'

const ShowText = () => {
    const [show,setShow]=React.useState(false);
    const showcontent=()=>{
        setShow(true)
    }
  return (
    <div>
        <button className='btn btn-primary' onClick={showcontent} data-testid='Show'>Show</button>
        {show && <p>This is Conditionally Visible</p>}
    </div>
  )
}

export default ShowText