import  React from 'react'
import './Signin.css'

function Signin() {
    return (
      
      <div classname='Signin'>
       
      <form class="form">
      <p class="title">Sign in </p>
      <p class="message">Log in now and get full access to our Web site. </p>
            
              
      <label>
          <input required="" placeholder="" type="email" class="input"/>
          <span>Email</span>
      </label> 
          
      <label>
          <input required="" placeholder="" type="password" class="input"/>
          <span>Password</span>
      </label>
      
      <button class="submit">Log in</button>
      
  </form>
  
 
      </div>
    );
  }
  
  export default Signin;