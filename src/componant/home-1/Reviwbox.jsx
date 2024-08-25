import React from 'react'
import { ravdata } from '../Data/Data'

function Reviwbox() {
  return (
    <>
      {ravdata.map((ravdata1,ravbox) =>(
        <div className="col-xl-4 my-xl-0 my-3" key={ravbox}>
           <div className="post__item">
                        <div className="post__item-thumb">
                            <img src={ravdata1.box1.img1} alt="blog" />
                            <div className="thumb__content">
                                <h3 className="title"><a href="blog-details.html">       {ravdata1.box1.text1}</a></h3>
                                <ul className="post-meta d-flex flex-wrap m-0 justify-content-between">
                                    <li>
                                        <i className="fa fa-user"></i>
                                    {ravdata1.box1.text2}
                                    </li>
                                    <li>
                                        <i className="fa fa-calendar"></i>
                                        {ravdata1.box1.text3}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        </div>
       
      ))

      }
    </>
  )
}

export default Reviwbox
