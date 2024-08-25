import React from 'react'
import Asection1 from '../about/Asection1'
import Section7 from '../home-1/Section7'
import Invsec1 from './pages/Invsec1'
import Asection2 from '../about/Asection2'
import Invsec2 from './pages/Insec2'
import Asection3 from '../about/Asection3'
import Footer_1 from '../home-1/Footer_1'

export default function Investor() {
  return (
  <>
     
    <Asection1    brand="Top Investors " brand1="Investor" />
    <div className="invsec1">
          <Invsec1 />
          
    </div>
  <Asection2 />
  <div className="invsec2">
  <Invsec2 />
  
  </div>
  <Asection3 />
  <Footer_1 />
  
  </>
  )
}
