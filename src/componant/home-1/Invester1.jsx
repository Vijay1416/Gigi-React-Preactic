import React from 'react'
import { investdata1 } from '../Data/Data'
function Invester1() {
  return (
    <>
    {investdata1.map((investdata1d, mnlott17) => (

<div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 my-3" key={mnlott17}>
<div className="plan__item">
    <div className="plan__item-header">
        <h2 className="plan-parcent">{investdata1d.pre}</h2>
        <p className="plan-parcent-info">{investdata1d.tim}</p>
    </div>
    <div className="plan__item-body">
        <ul className="plan__info">
            <li>
                <span className="title">Min :</span>
                <span className="value">{investdata1d.min}</span>
            </li>
            <li>
                <span className="title">Max :</span>
                <span className="value">{investdata1d.mix}</span>
            </li>
        </ul>
    </div>
    <div className="plan__item-footer">
        <p className="footer-info"> {investdata1d.bootom}</p>
    </div>
</div>
</div>

    ))}
</>
  )
}

export default Invester1
