import React from 'react'
import Asection1 from '../about/Asection1'
import Section3 from '../home-1/Section3'
import Section6 from '../home-1/Section6'
import Plsection1 from '../plan/Plsection1'
import Calculate from '../home-1/Calculate '
import Asection3 from '../about/Asection3'
import Footer_1 from '../home-1/Footer_1'

function Plan() {
  return (
   <>
   <Asection1   brand="Investment Plan
 " brand1="Investment Plan
 " />
 <div className="plsec1">
  <Section3 />
  <Section6 />
  <Plsection1 />
  <div className="plsection3">
     <Calculate />
  </div>
 
  <Asection3 />
  <Footer_1 />
 
 </div>
 
   </>
  )
}

export default Plan
