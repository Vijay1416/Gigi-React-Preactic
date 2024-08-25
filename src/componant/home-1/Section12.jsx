import React from 'react'
import { section12data } from '../Data/Data'
import Slider2 from '../slider/Slider2'
import Reviwbox from './Reviwbox'
 

function Section12() {
  
  return (
  <>
   {section12data.map((section12data1, sec12) => (
              <section className="section12" key={sec12}>
                <div className="section12un1">
                    <div className="container">
                          <div className="row">
                            <div className="col-xl-12 text-center">
                                <div className="section12unun1">
                                    <h2>{section12data1.text1}</h2>
                                    <p>{section12data1.text2}</p>
                                </div>
                            </div>
                          </div>
                          <div className="section12unun2">
                            <div className="row">
                                <Reviwbox />
                            </div>
                          </div>
                    </div>
                </div>
              </section>

            ))}

  </>
  )
}

export default Section12
