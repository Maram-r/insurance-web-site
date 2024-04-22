import  React from 'react'
import './Store.css'
import img1  from "./images/img1.png"
import img2  from "./images/img2.png"
import img3  from "./images/img3.png"


function Store() {
    return (
        <div classname='Store'>


<a class="fancy" href="#">
  <span class="top-key"></span>
  <span class="text">Welcome In  Our Store</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>
          <div class='grp'>

          <div class='btn'>
           <img src={img1} alt=''/>
           <button>Computers Shop</button>
           </div>
          
           <div class='btn'>
           <img src={img2} alt=''/>
           <button>Smartphones shop</button>
           </div>
           
          
          <div class='btn'>
           <img src={img3} alt=''/>
           <button>Electromenagers</button>
           </div>

          
           </div>



  </div>
);
}
export default Store;




  