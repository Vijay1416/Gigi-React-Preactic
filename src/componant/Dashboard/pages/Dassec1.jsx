import React from 'react'
import Sidenav from './Sidenav'
import { dasdat1 } from '../../Data/Data'
import Dassec2 from './Dassec2'
import Dassec3 from './Dassec3'
import Dassec4 from './Dassec4'
import Dassec5 from './Dassec5'
import Invester2 from './Invester2'


export default function Dassec1() {
  return (
 <>
  {dasdat1.map((dasdat1data,dashkey2) => (

 <section className="dassec1" key={dashkey2}>
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-xl-4 col-xxl-3 col-xl-4">
                <Sidenav />
            </div>
            <div className="col-lg-8 col-xl-8 col-xxl-9">
                <div className="dassec1un1">
               <Dassec2 />
               <Dassec3 />
               <Dassec4 />
               <Dassec5 />
               <h3 className="title mt-5 mb-4">Top Investors</h3>
               <div>
 
    <div className="row justify-content-center gy-4">
               <Invester2 />
               </div>
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
