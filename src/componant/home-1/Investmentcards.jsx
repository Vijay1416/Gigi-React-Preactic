import React from 'react'
import { investdata } from '../Data/Data'

function Investmentcards() {
  return (
  <>
   {investdata.map((investdata1 ,mnlott4) =>(
     <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 my-3" key={mnlott4}>
     <div className="plan__item">
         <div className="plan__item-header">
             <h2 className="plan-parcent">{investdata1.pre}</h2>
             <p className="plan-parcent-info">{investdata1.tim}</p>
         </div>
         <div className="plan__item-body">
             <ul className="plan__info">
                 <li>
                     <span className="title">Min :</span>
                     <span className="value">{investdata1.min}</span>
                 </li>
                 <li>
                     <span className="title">Max :</span>
                     <span className="value">{investdata1.mix}</span>
                 </li>
             </ul>
         </div>
         <div className="plan__item-footer">
             <p className="footer-info"> {investdata1.bootom}</p>
         </div>
     </div>
 </div>
  ))}
  </>
   
  )
}

export default Investmentcards
