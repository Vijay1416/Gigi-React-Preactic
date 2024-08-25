import React from 'react'
import { section11data } from '../Data/Data'
import Slider2 from '../slider/Slider2'
 

function Section11() {
  
  return (
  <>
   {section11data.map((section11data1, mnlott11) => (
              <section className="section11" key={mnlott11}>
                <div className="section11un1">
                    <div className="container">
                        <Slider2 />
                   
                    </div>
                </div>
              </section>

            ))}

  </>
  )
}

export default Section11
