import React from 'react'
import Asection1 from '../about/Asection1'
import Section9 from '../home-1/Section9'
import Faqsec1 from './pages/Faqsec1'
import { section10data } from '../Data/Data'
import Asection3 from '../about/Asection3'
import Footer_1 from '../home-1/Footer_1'
export default function Faq() {
  return (
    <>
    <Asection1  brand="FAQs " brand1="FAQs"/>
<div className="fasecbox1">
    <div className="container">
    <div className="row">
    {section10data.map((section10data1, mnlott10) => (
                <section className="section10" key={mnlott10}>
                    <div className="section10un1">
                        <div className="container">
                            <div className="row">
                         <div className="col-xl-12 text-center">
                           <div className="section10unun1">
                            <h2>Frequently Asked Questions 01</h2>
                            <p>Aenean vulputate eleifend tellus. Aenean leo ligul porttitoeu consequat vitae eleifend.</p>
                           </div>
                      </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

            ))}
                        
                            </div>
         <Faqsec1 />
    </div>
   
</div>
<Asection3 />
<div className="fasecbox2">
    <Section9 />
</div>
<Footer_1 />
    </>
  )
}
