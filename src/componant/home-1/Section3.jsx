import React from 'react'
import {section3data } from '../Data/Data'
import img1 from '../images/thumb1.png'
import big from '../images/big-coin.png'
import light from '../images/light.png'
import sm from '../images/sm-coin.png'
import Investmentcards from './Investmentcards'
function Section3() {
  return (
   <>
   
  {section3data.map((section3data1 ,mnlott2) =>(
 
   <section className="section3" key={mnlott2}>
    <div className="section3un1">
   <div className="container">
    <div className="row">
        <div className="col-xl-12 text-center">
            <div className="section3unun1">
                 <h2>{section3data1.text1}</h2>
                 <p>{section3data1.p1}</p>
            </div>
        </div>
    </div>
    <div className="section3unun2">
        <div className="row">
            <Investmentcards />
        </div>
    </div>
   </div>
    </div> 
    </section>


    ))}
   </>
  )
}

export default Section3
