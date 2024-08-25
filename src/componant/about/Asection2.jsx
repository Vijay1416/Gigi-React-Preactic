import React from 'react'
import { asec2data } from '../Data/Data'

function Asection2() {
  return (
     <>
    {asec2data.map((asec2data1 ,asec2key1) =>(
        <section className="asection2" key={asec2key1}>
            <div className="asection2un1">
              <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                  <div className="asection2unun1">
                      <h2>{asec2data1.text1}</h2>
                      <p>{asec2data1.text2}</p>
                      <a href="" className='asec2button'>{asec2data1.button}</a>
                  </div>
                   
                </div>
                <div className="col-xl-8">
                  <div className="asection2unun2">
                    <div className="row">
                      <div className="col-xl-6 pb-3 my-xl-6 my-3">
                         <div className="asection2unun3">
                             <div className="asection2unun4">
                               <div className="icon">
                                  <img src={asec2data1.box1.img1} alt="" />
                               </div>
                             </div>
                             <div className="asection2unun5">
                                <h2>{asec2data1.box1.text1}</h2>
                                <p>{asec2data1.box1.text2}</p>
                              </div>
                         </div>
                      </div>
                      <div className="col-xl-6 pb-3 my-xl-6 my-3">
                         <div className="asection2unun3">
                             <div className="asection2unun4">
                               <div className="icon">
                                  <img src={asec2data1.box2.img1} alt="" />
                               </div>
                             </div>
                             <div className="asection2unun5">
                                <h2>{asec2data1.box2.text1}</h2>
                                <p>{asec2data1.box2.text2}</p>
                              </div>
                         </div>
                      </div>
                      <div className="col-xl-6 pb-3 my-xl-6 my-3">
                         <div className="asection2unun3">
                             <div className="asection2unun4">
                               <div className="icon">
                                  <img src={asec2data1.box3.img1} alt="" />
                               </div>
                             </div>
                             <div className="asection2unun5">
                                <h2>{asec2data1.box3.text1}</h2>
                                <p>{asec2data1.box3.text2}</p>
                              </div>
                         </div>
                      </div>
                      <div className="col-xl-6 pb-3 my-xl-6 my-3">
                         <div className="asection2unun3">
                             <div className="asection2unun4">
                               <div className="icon">
                                  <img src={asec2data1.box4.img1} alt="" />
                               </div>
                             </div>
                             <div className="asection2unun5">
                                <h2>{asec2data1.box4.text1}</h2>
                                <p>{asec2data1.box4.text2}</p>
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

export default Asection2
