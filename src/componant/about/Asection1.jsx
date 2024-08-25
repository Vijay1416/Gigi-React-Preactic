import React from 'react'
import { asecdata } from '../Data/Data'

function Asection1(props) {
  return (
     <>
    {asecdata.map((asecdata1 ,aseckey1) =>(
        <section className="asection1" key={aseckey1}>
            <div className="asection1un1">
                <div className="container">
                    <div className="row">
                     <div className="col-xl-12 text-center">
                       <div className="asection1unun1">
                        <h2>{props.brand}</h2>
                        <ul>
                        <li><a href="index.html">Home</a><span>//</span></li>
                        <li>{props.brand1}</li>
                        </ul>
                       </div>
                  </div>
                    </div>
                </div>
            </div>
            <div className="shapes">
                <img src={asecdata1.img1} alt="" className='shap1' />
                <img src={asecdata1.img2} alt="" className='shap2' />
            </div>
        </section>
    ))}
     </>
  )
}

export default Asection1
