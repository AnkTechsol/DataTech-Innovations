import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <hr></hr>
      <p>Ready to embark on your data-driven journey? </p>
      <p>Get in touch with us today to discuss your data challenges and explore</p>
      <p>how DataTech Innovations can help you unlock the true potential of your data.</p>


      <form action="https://formspree.io/f/mknaapvv" method="post">
        <div className='inputs'>


        <label>Your Name : </label>
        <input name="Name" id="name" type="text"/>
<br/>
<br/>
        
        <label htmlFor="email">Your Email : </label>
        <input name="Email" id="email" type="email"/>
<br/>
<br/>
        <label>Message : </label>
        <textarea rows={4} name="message" id="message" cols={50} placeholder="Enter your message..."></textarea>

<br/>


        <button type="submit">Submit</button>
        </div>



        <div className='details'>
            <p>Phone:</p>
            <p>Email:</p>
            <p>Address:</p>
        </div>

      </form>




    </div>
  )
}

export default Contact
