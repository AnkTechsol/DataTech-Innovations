import React, {useEffect} from 'react';
import './form.css'

const Form = () => {

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');


        if (signUpButton && signInButton && container) {
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
              });
              
              signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
              });
        }
        

        }, []);


  return (
    <div>

        
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form>
              <h1>╾ Reach out to us ╼</h1>
              <input type="email" placeholder="Email" name="email"/>
              <input type="password" placeholder="Message..." name="message" />
              <button>Send</button>
            </form>
          </div>



          <div className="form-container sign-in-container">

            <h2>Ready to embark on your data-driven journey? Get in touch with us today to discuss your data challenges and explore how DataTech Innovations can help you unlock the true potential of your data.</h2>

          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h3>Please consider, sending a review to our team!</h3>
                <h6>...2nd line paragraph...</h6>
                <button className="ghost" id="signIn">╾ Back</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h3>Connect with us -</h3>
                <button className="ghost" id="signUp">Contact</button>
              </div>
            </div>
          </div>
        </div>


      
    </div>
  )
}

export default Form
