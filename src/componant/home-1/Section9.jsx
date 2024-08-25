import React from 'react'
import { section9data } from '../Data/Data'
function Section9() {
    return (
        <>
            {section9data.map((section9data1, mnlott9) => (
                <section className="section9" key={mnlott9}>
                    <div className="section9un1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-md-12 mx-xl-auto  text-center">
                                    <div className="section9unun1">
                                        <h2>{section9data1.text1}</h2>
                                        <p>{section9data1.text2}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="section9unun2">
                                <div className="row">
                                    <div className="col-xl-8 col-md-12 mx-auto">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                       {section9data1.button1.text1}
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    {section9data1.button1.text2}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    {section9data1.button2.text1}
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    {section9data1.button2.text2}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    {section9data1.button3.text1}
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    {section9data1.button1.text2}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree1">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                                                    {section9data1.button3.text1}
                                                    </button>
                                                </h2>
                                                <div id="collapseThree1" className="accordion-collapse collapse"         aria-labelledby="headingThree1" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    {section9data1.button3.text2}
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

export default Section9
