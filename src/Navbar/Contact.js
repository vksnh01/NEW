import React from 'react';

const Contact = (props) => {
  return (<>
    <div className="contact">
      <div className="contact-2">
        <div className="contact-3">
      <h1 className="contact-heading">Contact Us</h1>
          <div className="row" className="display-flax-col" style={{ width: "200px" }}>
            <div className="col">
              <input type="text" className="form-control" placeholder="First name" style={{ width: "150%" }} aria-label="First name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last name" style={{ width: "150%" }} aria-label="Last name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Contact Number" style={{ width: "150%" }} aria-label="Contact number" />
            </div>
            <div className="col">
              <input type="email" className="form-control" placeholder="Example@gmail.com" style={{ width: "150%" }} aria-label="Contact number" />
            </div>
          </div>
          <div className="row g-3">
            <div className="col-sm-7">
              <input type="text" className="form-control" placeholder="City" aria-label="City" style={{ width: "160%" }} />
            </div>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "90px", width: "90%" }} />
            <label for="floatingTextarea2">Comments</label>
          </div>
          <input class="btn btn-primary" type="submit" value="Submit" />
        </div>
      </div>
    </div>


    {/* <h1>This is the {props.name}</h1> */}
  </>)
}
export default Contact;