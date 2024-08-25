import React, { useState } from 'react'
 
import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import logo from '../../images/logo.png'

function Navbar() {
   const [navbarOpen, setNavbarOpen] = useState(false)
   const onClickHome = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <Topbar />
      <nav className="navbar navbar-expand-lg  ">
        <div className="container">
          <Link className="navbar-brand" to="#"><img src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button"  onClick={onClickHome} >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Home <i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                <ul className="sub-menu">
                  <li><Link to="/">Home One</Link></li>
                  <li><Link to="/">Home Two</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plan">Plan</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Pages <i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                <ul className="sub-menu">
                  <li><Link to="/dashboard">User Dashboard</Link></li>
                  <li><Link to="/investor">Investor</Link></li>
                  <li><Link to="/faq">FAQS</Link></li>
                  <li><Link to="/policy">Privacy POlicy</Link></li>
                  <li><Link to="index2.html">404</Link></li>
                </ul>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#"><i className="fa fa-search" aria-hidden="true"></i></Link>
              </li>
            </ul>
            <div className="navbutton">
              <Link to="" className='btn1'>Register</Link>
              <Link to="" className='btn2'>Login</Link>
            </div>

          </div>
        </div>
      </nav>
    
       <div className={ navbarOpen ? ' mobiilebar flex' : 'mobiilebar hidden'}>
        <div className="flex-shrink-0 mobilebarun1 "  > 
       <ul className="list-unstyled ps-0">
        <li className="mb-1">
        <button className="btn btn-toggle align-items-center  " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
          Home
        </button>
        <div className="collapse  " id="home-collapse"  >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="link-dark rounded">Home1</Link></li>
            <li><Link to="#" className="link-dark rounded">Home2</Link></li>
    
          </ul>
        </div>
      </li>
      <li className="mb-1"> 
       <Link to="">  About</Link>  
      </li>
      <li className="mb-1"> 
       <Link to="">  Plan</Link>  
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center  " data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Pages
        </button>
        <div className="collapse  " id="dashboard-collapse"  >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="link-dark rounded">Overview</Link></li>
            <li><Link to="#" className="link-dark rounded">Weekly</Link></li>
            <li><Link to="#" className="link-dark rounded">Monthly</Link></li>
            <li><Link to="#" className="link-dark rounded">Annually</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Blog
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="link-dark rounded">New</Link></li>
            <li><Link to="#" className="link-dark rounded">Processed</Link></li>
            <li><Link to="#" className="link-dark rounded">Shipped</Link></li>
            <li><Link to="#" className="link-dark rounded">Returned</Link></li>
          </ul>
        </div>
      </li>
    
      <li className="mb-1"> 
       <Link to="">  Contact</Link>  
      </li>
     
    </ul>
  </div>
      </div>
    </>
  )
}

export default Navbar
