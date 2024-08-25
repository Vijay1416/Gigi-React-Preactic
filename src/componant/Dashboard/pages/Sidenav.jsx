import React from 'react'
import { sidenavdata } from '../../Data/Data'
import img from '../../images/userim1.png'
export default function Sidenav() {
  return (
    <>
      {sidenavdata.map((sidenavdata1,dashkey3) => (
        <div className="sidebar dashboard__sidebar" key={dashkey3}>
                        <div className="dashboard-user text-center">
                            <div className="thumb"><img src={img} alt="dashboard" /></div>
                            <div className="content mt-3">
                                <h3 className="name">{sidenavdata1.texl1}</h3>
                                <p className="text-white">{sidenavdata1.texl2}</p>
                            </div>
                        </div>
                        <ul className="dashbard__tab tags">
                            <li><a href="#" className="active">{sidenavdata1.l1}</a></li>
                            <li><a href="#">{sidenavdata1.l2}</a></li>
                            <li><a href="#">{sidenavdata1.l3}</a></li>
                            <li><a href="#">{sidenavdata1.l4}</a></li>
                            <li><a href="#">{sidenavdata1.l5}</a></li>
                            <li><a href="#">{sidenavdata1.l6}</a></li>
                            <li><a href="#">{sidenavdata1.l7}</a></li>
                            <li><a href="#">{sidenavdata1.l8}</a></li>
                            <li><a href="#">{sidenavdata1.l9}</a></li>
                            <li><a href="#">{sidenavdata1.l10}</a></li>
                        </ul>
                        <button className="btn-close btn-close-white d-lg-none"></button>
                    </div>
      ))}
    </>
  )
}
