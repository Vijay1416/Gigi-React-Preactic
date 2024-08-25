import React from 'react'
import { Calculatedata } from '../Data/Data'
import Calculateimg from '../images/Calculate.png'
function Calculate () {
  return (
    <>
   {Calculatedata.map((Calculatedata1 ,mnlott3) =>(
      <section className="section4" key={mnlott3}>
        <div className="section4un1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                         <div className="section6unun2">
                            <img src={Calculateimg} alt="" />
                         </div>
                    </div>
                    <div className="col-xl-6">
                             <div className="section6unun3">
                            <h2>{Calculatedata1.text1}</h2>
                            <p>{Calculatedata1.p1}</p>
                            <div className="section6unun4">
                                <div className="row">
                                    <div className="col-xl-6 my-3">
                                        <div className="section6formbox">
                                        <label className="form-label">{Calculatedata1.select.select1.text}</label>
                                          <select className="nice-select w-100 h-50" >
                                            <option>{Calculatedata1.select.select1.text1}</option>
                                            <option>{Calculatedata1.select.select1.text2}</option>
                                            <option>{Calculatedata1.select.select1.text3}</option>
                                            <option>{Calculatedata1.select.select1.text4}</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 my-3">
                                    <div className="section6formbox">
                                        <label className="form-label">{Calculatedata1.select.select2.text}</label>
                                          <select className="nice-select w-100 h-50" >
                                            <option>{Calculatedata1.select.select2.text1}</option>
                                            <option>{Calculatedata1.select.select2.text2}</option>
                                            <option>{Calculatedata1.select.select2.text3}</option>
                                            <option>{Calculatedata1.select.select2.text4}</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 my-3">
                                        <div className="section6formbox">
                                        <label className="form-label">{Calculatedata1.select.select3.text}</label>
                                   <input type="text" placeholder='$60,000' />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 my-3">
                                        <div className="section6formbox">
                                        <label className="form-label">{Calculatedata1.select.select4.text}</label>
                                        <input type="text" placeholder='$800000' />
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default Calculate 
