import React from 'react'
import img1 from '../../images/user (6).png'

function Topbar() {
  return (
   <>
   <div className="topbar">
    <div className="container">
          <div className="topbarun1">
         <div className="topbarunun1">
        <ul>
            <li>
            <a href="mailto:demo@gmail.com"><i className="las la-envelope-open"></i> demo@gmail.com</a>
            </li>
            <li><a href="tel:129075"><i className="las la-phone-volume"></i> 123  -  456  -  7890</a></li>
        </ul>
        </div>
        <div className="topbarunun2">
        <ul>
            <li>
            <a><select className="form-select" aria-label="Default select example">
           
                 <option value="English" defaultValue>English</option>
                 <option value="option">Bangle</option>
              
               </select></a>
            </li>
            <li><a href="#"><img src={img1} alt="" /></a></li>
        </ul>
        </div>
    </div>

    </div>
  
   </div>

   </>
  )
}

export default Topbar
