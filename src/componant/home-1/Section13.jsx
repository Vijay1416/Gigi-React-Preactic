import React from 'react'
import { clintlogodata } from '../Data/Data'
import Slider3 from '../slider/Slider3'
function Section13() {
  return (
 <>
 {clintlogodata.map((clintlogodata1 ,clintlog) =>(
     <section className="section13" key={clintlog}>
        <div className="section13un1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section13unun1">
                          <Slider3 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
   

 ))

 }
 </>
  )
}

export default Section13
