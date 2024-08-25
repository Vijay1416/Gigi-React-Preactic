import React from 'react'
import { footerdata } from '../Data/Data'
function Footer_1() {
  return (
    <> 
    {footerdata.map((footerdata1,fkey) => (
      <footer className="footer-section section-bg" key={fkey}>
        <div className="footer-top padding-top pb-5 border-bottom-1 border--white">
            <div className="container">
                <div className="row gy-5 justify-content-md-between">
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="footer__widget">
                            <h3 className="widget-title">About Company</h3>
                            <p>Aliquam orci a nullam tempor sapien  graonec enim ipsum porta justo velna an auctor undo congue magna laoreet augue sapien</p>
                            <ul className="social-links">
                                <li><a className="facebook-bg" href="#0"><i className="lab la-facebook-f"></i></a></li>
                                <li><a className="twitter-bg" href="#0"><i className="lab la-twitter"></i></a></li>
                                <li><a className="instagram-bg" href="#0"><i className="lab la-instagram"></i></a></li>
                                <li><a className="pinterest-bg" href="#0"><i className="lab la-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-sm-6">
                        <div className="footer__widget">
                            <h3 className="widget-title">Useful Links</h3>
                            <ul className="footer-links">
                                <li><a href="plan.html">Hyip Plan</a></li>
                                <li><a href="privacy-policy.html">Privacy &amp; Policy</a></li>
                                <li><a href="dashboard.html">Dashboard</a></li>
                                <li><a href="sign-in.html">Login Account</a></li>
                                <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-sm-6">
                        <div className="footer__widget">
                            <h3 className="widget-title">Company</h3>
                            <ul className="footer-links">
                                <li><a href="about.html">About</a></li>
                                <li><a href="blog.html">Blog Post</a></li>
                                <li><a href="dashboard.html">User Dashboard</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-sm-6">
                        <div className="footer__widget">
                            <h3 className="widget-title">Gateway</h3>
                            <ul className="footer-links">
                                <li><a href="dashboard.html">Paypal</a></li>
                                <li><a href="dashboard.html">Bitcoinway</a></li>
                                <li><a href="dashboard.html">Webanking</a></li>
                                <li><a href="dashboard.html">Trusted Way</a></li>
                                <li><a href="dashboard.html">Gambing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <p className="copyright text-center py-3">
                    Copyright © 2021 All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
 ))} </>
  )  
}
 
export default Footer_1
