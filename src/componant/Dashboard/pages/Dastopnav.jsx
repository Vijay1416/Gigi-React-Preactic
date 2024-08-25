import React from 'react'
import { dasdat1 } from '../../Data/Data'
import img1 from '../../images/userim2.png'
export default function Dastopnav() {
    return (
        <>
            {dasdat1.map((dasdat1data, dashkey4) => (
                <div className="dastopnav" key={dashkey4}>
                    <div className="dashboard__header">
                        <div className="inner pt-3">
                            <h3 className="title">User Panel</h3>
                        </div>
                        <div className="inner">
                            <form className="search__form">
                                <div className="form-group">
                                    <input type="text" className="form-control form--control" placeholder="Search Here..." />
                                    <button type="submit" className="btn"><i className="las la-search"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="inner">
                            <ul className="tabs d-flex flex-wrap align-items-center">
                                <li><a href="#"><i className="las la-envelope"></i></a></li>
                                <li><a href="#"><i className="las la-bell"></i><span className="badge badge--base badge--round">01</span> </a></li>
                                <li><div className="user-thumb"><img src={img1} alt="dashboard" /></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
