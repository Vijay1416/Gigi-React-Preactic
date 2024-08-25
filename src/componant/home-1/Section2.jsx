import React from 'react'
import secim1 from '../images/thumbsec2.png'
import { section2data } from '../Data/Data'
function Section2() {
    return (
        <>
            {section2data.map((section2data1, Sec2) => (
                <section className="secction2" key={Sec2}>
                    <div className="section2un1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 rtl ">
                                    <div className="section2unun1">
                                        <img src={secim1} alt="" className='rtl' />
                                    </div>
                                </div>
                                <div className="col-xl-6 my-xl-0 my-4 ">
                                    <div className="section2unun2">
                                        <h2>{section2data1.text1}</h2>
                                        <p>{section2data1.p1}</p>
                                        <p className='p2'>{section2data1.p2}</p>
                                        <ul className="info__list d-sm-flex flex-wrap mt-4">
                                            <li>{section2data1.ul.li1}</li>
                                            <li>{section2data1.ul.li4} </li>
                                            <li> {section2data1.ul.li2}</li>
                                            <li> {section2data1.ul.li5}</li>
                                            <li>{section2data1.ul.li3}</li>
                                            <li>{section2data1.ul.li6}</li>
                                        </ul>
                                        <div className="buttton">
                                            <a href="" className='sec2btn1'>Know More</a>
                                            <a href="" className='sec2btn2'>Contact Us</a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div></section>
            ))

            }

        </>
    )
}

export default Section2
