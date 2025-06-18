import React from 'react'

const Mediaquery = () => {
  return (
    <div>
    <div class="container">
  <div class="row" style={{marginBottom: "20px"}}>
    <div class="col-sm-12 col-md-6 col-lg-3 bg-success">
        <div class="card" style={{width: "18rem"}}>
          <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" class="card-img-top" alt="Placeholder Image"/>
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a simple card component that can be used to display content in a visually appealing way.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>
    </div>

    <div class="col-sm-12 col-md-6 col-lg-3 bg-info">
        <div class="card" style={{width: "18rem"}}>
          <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" class="card-img-top" alt="Placeholder Image"/>
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a simple card component that can be used to display content in a visually appealing way.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3 bg-warning">
        <div class="card" style={{width: "18rem"}}>
          <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" class="card-img-top" alt="Placeholder Image"/>
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a simple card component that can be used to display content in a visually appealing way.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-3 bg-primary-subtle">
        <div class="card" style={{width: "18rem"}}>
          <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" class="card-img-top" alt="Placeholder Image"/>
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a simple card component that can be used to display content in a visually appealing way.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>
    </div>
  </div>



  <div class="row">
    <div class="col-4 bg-primary">
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col-8 bg-danger">
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/ >
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Mediaquery