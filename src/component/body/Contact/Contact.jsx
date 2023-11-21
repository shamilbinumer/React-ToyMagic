import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
     <div className="main">
      <div className="form">
        <div className="form-heading">
          <h2>Contact Us</h2>
        </div>
        <div className="form-details">
          <form action="">
            <div><input type="text" placeholder='Enter Your Name' /></div>
            <div><input type="email" placeholder='Enter Your Email' /></div>
            <div><textarea name="" id="" cols="30" rows="3" placeholder='Enter The Message'></textarea></div>
            <div className='sbmt'><button>SUBMIT</button></div>
          </form>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Contact
