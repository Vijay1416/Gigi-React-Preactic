import React from 'react'
import { section7data } from '../../Data/Data'
import Invester from '../../home-1/Invester'
import Invester2 from '../../Dashboard/pages/Invester2'
export default function Invsec1() {
  return (
    <>
    {section7data.map((section7data1 ,mnlott6) =>(
    
     <section className="section7" key={mnlott6}>
        <div className="section7un1">
            <div className="container">
                <div className="row">
                <div className="col-xl-12 text-center">
                <div className="section7unun1">
                    <h2>{section7data1.text1}</h2>
                    <p>{section7data1.text2}</p>
                </div>
            </div>
                </div>
                <div className="section7unun2">
                    <div className="row">
                        <Invester2 />
                        <Invester2 />
                    </div>
                </div>
           
            </div>
        </div>
     </section>

 ))}    
   </>
  )
}
