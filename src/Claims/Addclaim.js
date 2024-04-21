import  React from 'react'
import './Addclaim.css'

function Addclaim() {
    return (
        <form class="form">
        <p class="title">Add A Claim </p>
        <p class="message">Enter your claim Details and get a refund </p>
            

       
            <label>
            <textarea placeholder="Describe your claim in details" class="input" id="description"></textarea>
            </label>
    
           
       
                
        
            
        
        <button class="submit">Validate</button>
        
    </form>






    );
}
export default Addclaim;
      