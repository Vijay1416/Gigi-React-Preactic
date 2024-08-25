import React from 'react'
import { section6data } from '../Data/Data'
import coin from '../images/coin.png'
import coin1 from '../images/coinwatch.png'
import coin2 from '../images/coinmen.png'
function Section6() {
  return (
   <>
    {section6data.map((section6data1 ,mnlott5) =>(
    
    <section className="section6" key={mnlott5}>
        <div className="section6un1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section6unun1">
                            <img src={coin} alt="" />
                            <div className="section6unun2">
                            <img src={coin1} alt="" className='img1' />
                            <img src={coin2} alt="" className='img2' />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="section6unun3">
                            <h2>{section6data1.text1}</h2>
                            <p>{section6data1.text2}</p>
                            <a href="" className='section6btn1'>Get Start</a>
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

export default Section6
