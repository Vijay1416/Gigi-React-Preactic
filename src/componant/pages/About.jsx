import React from 'react'
import Asection1 from '../about/Asection1'
import Section13 from '../home-1/Section13'
import Asection2 from '../about/Asection2'
import Section3 from '../home-1/Section3'
import Section6 from '../home-1/Section6'
import Section7 from '../home-1/Section7'
import Asection3 from '../about/Asection3'
import Asection4 from '../about/Asection4'
import Section12 from '../home-1/Section12'
import Footer_1 from '../home-1/Footer_1'

function About() {
  return (
<>
<Asection1  brand="About Company " brand1="About"/>
<Section13 />
<Asection2 />
<Section3 />
<Section6 />
<Section7 />
<Asection3 />
<Asection4 />
<div className="asection5">
  <Section12 />
</div>

<Footer_1 />
</>
  )
}

export default About
