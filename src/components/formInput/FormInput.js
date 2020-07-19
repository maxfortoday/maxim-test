import React from 'react'
import './FormInput.css'

const FormInput = ({handleCart}) => {

 return (
  <form className="formInput" onSubmit={handleCart}>
   <label htmlFor="name">Name:</label>
   <input type="text" id="name" name="name"></input>

   <label htmlFor="job">Job:</label>
   <input type="text" id="job" name="job"></input>

   <label htmlFor="company">Company:</label>
   <input type="text" id="company" name="company"></input>

   <label htmlFor="phone">Phone:</label>
   <input type="text" id="phone" name="phone"></input>
   <button type="submit">submit</button>
  </form> 
)
}

export default FormInput
