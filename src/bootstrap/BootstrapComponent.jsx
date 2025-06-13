import React from 'react'
import Bootstrapfrom from './Bootstrapfrom'
import Bootsrapbanner from './Bootsrapbanner'

const BootstrapComponent = () => {
  return (
    <>
    <div>
        <h3>BootstrapComponent</h3>
        <Bootsrapbanner />
        <p>
            This component demonstrates the use of Bootstrap for styling and layout in a React application. 
            It showcases how to integrate Bootstrap classes to create responsive and visually appealing components.     
        </p>
        <p>
            Bootstrap provides a wide range of pre-defined classes that can be used to style elements, 
            making it easier to create consistent and responsive designs without writing custom CSS.
        </p>
        <p>
            In this example, we can use Bootstrap's grid system, buttons, and other components to enhance the user interface.
            It allows developers to quickly build responsive layouts and components that adapt to different screen sizes.   
        </p>
        <button type="button" class="btn btn-outline-danger">Primary</button>

        <div>
            <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Welcome to List Group</div>
        This is a simple example of a list group using Bootstrap. List groups are used to display a series of content in a list format.
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Topic two here</div>
        List groups can contain various types of content, including text, images, and links. They are highly customizable and can be styled to fit the design of your application.
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
</ol>
        </div>

<h2>Adding card Item here</h2>

<div style={{display: "flex", flexWrap: "wrap", gap: "20px", margin: "50px"}}>
        <div class="card" style={{width: "18rem"}}>
          <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" class="card-img-top" alt="Placeholder Image"/>
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a simple card component that can be used to display content in a visually appealing way.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>


            <div class="card" style={{width: "18rem"}}>
          <img src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" class="card-img-top" alt="Placeholder Image"/>
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a simple card component that can be used to display content in a visually appealing way.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>

</div>
        </div>

        <Bootstrapfrom />
    </>
  )
}

export default BootstrapComponent