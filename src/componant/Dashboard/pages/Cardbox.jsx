import React from 'react'
import { cardboxdata } from '../../Data/Data'

export default function Cardbox() {
    return (
        <>
            {cardboxdata.map((cardboxdata1, dashkey5) => (
 
                                  <div className="col-xl-4 my-xl-0 my-3" key={dashkey5}>
                                  <div className="dashboard__card">
                                    <div className="dashboard__card-icon">
                                        <i className={cardboxdata1.classit}></i>
                                    </div>
                                    <div className="dashboard__card-content">
                                        <p className="info">{cardboxdata1.tex1}</p>
                                        <h3 className="title">{cardboxdata1.text2}</h3>
                                    </div>
                                </div>
</div>
))}
        </>
    )
}
