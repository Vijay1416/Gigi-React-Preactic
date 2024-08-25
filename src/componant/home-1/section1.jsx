import React from 'react'
import {section1data } from '../Data/Data'
import img1 from '../images/thumb1.png'
import big from '../images/big-coin.png'
import light from '../images/light.png'
import sm from '../images/sm-coin.png'
function Section1() {
  return (
   <>
   
  {section1data.map((section1data1 ,mnlott1) =>(
    <section className="section1" key={mnlott1}>
        <div className="section1un1">
              <div className="container">
        <div className="row">
         <div className="col-xl-5 my-auto">
             <div className="section1unun1">
              <h1>{section1data1.text1}</h1>
              <p>{section1data1.p1}</p>
              <a href="" className='section1btn'>{section1data1.btn1}</a>
        
             </div>
         </div>
         <div className="col-xl-7">
          <div className="section1unun2">
            <img src={img1} alt="" className='img1' />
            <div className="section1unun3">
              <img src={big} alt="" className='img2' />
              <img src={light} alt="" className='img3' />
              <img src={sm} alt="" className='img4' />
              <img src={sm} alt="" className='img5' />
            </div>
          </div>
         </div>
        </div>
            </div>
        </div> 
    </section>  ))}
   </>
  )
}

export default Section1
