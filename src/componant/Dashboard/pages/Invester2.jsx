import React from 'react'
import { invester2data } from '../../Data/Data'
 

export default function Invester2() {
  return (
   <>
   {invester2data.map((invester2data1,dashkey8) => (
  
                            <div className="col-xl-4 col-xxl-3 col-md-4 col-sm-6 my-3" key={dashkey8}>
                                <div className="investor__item style--two">
                                    <div className="investor__item-thumb">
                                        <img src={invester2data1.img1} alt="investor" />
                                    </div>
                                    <div className="investor__item-content">
                                        <h4 className="name">{invester2data1.tex1}</h4>
                                        <p className="invest-amount">{invester2data1.text2}</p>
                                    </div>
                                </div>
                            </div>
                            
 
 ))
   

 }
   </>
  )
}
