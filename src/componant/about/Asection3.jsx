import React from 'react'
import { asec3data } from '../Data/Data'

function Asection3() {
  return (
    <>
    {asec3data.map((asec3data1 , datakey1) => (
        <section className="asection3" key={datakey1}>
      <div className="asection3un1">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="asection3unun1">
                        <h2>{asec3data1.text1}</h2>

                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                       {asec3data1.button1.text1}
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    {asec3data1.button1.text2}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    {asec3data1.button2.text1}
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    {asec3data1.button2.text2}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    {asec3data1.button3.text1}
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    {asec3data1.button1.text2}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree1">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                                                    {asec3data1.button3.text1}
                                                    </button>
                                                </h2>
                                                <div id="collapseThree1" className="accordion-collapse collapse"         aria-labelledby="headingThree1" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                    {asec3data1.button3.text2}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                    </div>
                </div>
                <div className="col-xl-6 my-xl-auto my-4">
                    <div className="asection3unun2">
                        <img src={asec3data1.img1} alt="" />
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

export default Asection3
