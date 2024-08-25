import React, { useEffect, useState } from 'react';
import { section8data } from '../Data/Data'
import Invester from './Invester'
import playstor from '../images/google-play.png'
import icon_1 from '../images/icon1.png'
import icon_2 from '../images/icon2.png'
import icon_3 from '../images/icon3.png'
import thumbmoney from '../images/thumbmoney.png'
import Odometer from 'react-odometerjs';
 
function Section8() {
    const [value, setValue] = useState(1234);

    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(4321), 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

  return (
   <>
    {section8data.map((section8data1 ,mnlott8) =>(
    
    <section className="section8" key={mnlott8}>
    <div className="section8un1">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                      <div className="section8unun1">
                        <h2>{section8data1.text1}</h2>
                        <p>{section8data1.text2}</p>
                        <div className="buttons">
                            <a href="" className='sec8btn1'>
                                <div className="secbtnun">
                                       <div className="icon">
                                           <img src={playstor} alt="" />
                                         </div>
                                         <div className="content">
                                            <p>{section8data1.p}</p>
                                            <p className='p1'>{section8data1.p1}</p>
                                         </div>
                                </div>
                         
                            </a>
                            <a href="" className='sec8btn1'>
                                <div className="secbtnun">
                                       <div className="icon">
                                           <img src={playstor} alt="" />
                                         </div>
                                         <div className="content">
                                            <p>{section8data1.p}</p>
                                            <p className='p1'>{section8data1.p2}</p>
                                         </div>
                                </div>
                         
                            </a>
                        </div>

                        <div className="section8unun2">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="section8ununun3">
                                        <div className="icon">
                                            <img src={icon_1} alt="" />
                                            <Odometer value={0}  format="(.dd)" style={{ cursor: 'pointer' }} className='counter' />M
                                        </div>
                                    <p>{section8data1.p3}</p>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="section8ununun3">
                                        <div className="icon">
                                            <img src={icon_2} alt="" />
                                            <Odometer value={9}  format="(.ddd)" style={{ cursor: 'pointer' }} className='counter' />M
                                        </div>
                                    <p>{section8data1.p3}</p>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="section8ununun3">
                                        <div className="icon">
                                            <img src={icon_3} alt="" />
                                            <Odometer value={0}   format="d" style={{ cursor: 'pointer' }} className='counter' />M
                                        </div>
                                    <p>{section8data1.p3}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                      </div>
                </div>
                <div className="col-xl-5">
                    <div className="section8unun4">
              <img src={thumbmoney} alt="" />
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

export default Section8
