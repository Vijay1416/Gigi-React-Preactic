import React from 'react'
import { plsec1data } from '../Data/Data'
import Invester1 from '../home-1/Invester1'
function Plsection1() {
  return (
 <>
  {plsec1data.map((plsec1data1 ,aseckey11) =>(
        <>
         <section className="plsection1" key={aseckey11}>
            <div className="plsection1un1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10 mx-auto text-center">
                            <div className="plsection1unun1">
                                <h2>{plsec1data1.text1}</h2>
                                <p>{plsec1data1.p1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="plsection1unun2">
                        <div className="row">
                            <Invester1 />
                        </div>
                    </div>
                </div>
            </div>
         </section>
        </>
    ))}
 </>
  )
}

export default Plsection1
