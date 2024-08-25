import React from 'react'
import { section10data } from '../Data/Data'
import Navtab from '../Tabs/Navtab'
function Section10() {
    return (
        <>
            {section10data.map((section10data1, mnlott10) => (
                <section className="section10" key={mnlott10}>
                    <div className="section10un1">
                        <div className="container">
                            <div className="row">
                         <div className="col-xl-12 text-center">
                           <div className="section10unun1">
                            <h2>{section10data1.text1}</h2>
                            <p>{section10data1.text2}</p>
                           </div>
                      </div>
                            </div>
                            <div className="section10unun2">
                                <div className="row">
                                    <div className="col-xl-10 mx-auto">
                                        <Navtab />
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

export default Section10
