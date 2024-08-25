import React from 'react'
import { section5data } from '../Data/Data'
import Slide1 from '../slider/Slider'
 

function Section5() {
  return (
    <>
  {section5data.map((section5data1 ,mnlott2) =>(
 
  <section className="section5" key={mnlott2}>
 <div className="section5un1">
    <div className="container">
        <div className="row">
            <div className="col-xl-12 text-center">
                <div className="section5unun1">
                      <h2>{section5data1.text1}</h2>
                      <p>{section5data1.p1}</p>
                      <Slide1 />
                </div>
            </div>
        </div>
    </div>
 </div>
  </section>


  ))}     
    </>
  )
}

export default Section5
