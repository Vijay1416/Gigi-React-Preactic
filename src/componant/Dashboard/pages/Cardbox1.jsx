import React from 'react'
import { dassec5data } from '../../Data/Data'
export default function Cardbox1() {
  return (
    <>
     {dassec5data.map((dassec5data1, dashkey5) => (

        <div className="col-xl-6  my-3" key={dashkey5}>
        <div className="dashboard__card">
          <div className="dashboard__card-icon">
              <i className={dassec5data1.classit}></i>
          </div>
          <div className="dashboard__card-content">
              <p className="info">{dassec5data1.tex1}</p>
              <h3 className="title">{dassec5data1.text2}</h3>
          </div>
      </div>
</div>
))}
    </>
   
  )
}
