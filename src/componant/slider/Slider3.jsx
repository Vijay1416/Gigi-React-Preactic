import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

import { slid3data } from "../Data/Data";

function Slider3() {
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500, 
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
    {slid3data.map((slid3data1 ,sld3) =>(
          <Slider className="mainSlider "  {...settings1} key={sld3}>
              <div>
                <div className="sldunimgs4">
                <img src={slid3data1.img1} alt="" />
                </div>

              </div>
              <div>
                <div className="sldunimgs4">
                <img src={slid3data1.img1} alt="" />
                </div>
              </div>
              <div>
                <div className="sldunimgs4">
                <img src={slid3data1.img1} alt="" />
                </div>
              </div>
              <div>
                <div className="sldunimgs4">
                <img src={slid3data1.img1} alt="" />
                </div>
              </div>
              <div>
                <div className="sldunimgs4">
                <img src={slid3data1.img1} alt="" />
                </div>
              </div>
              <div>
                <div className="sldunimgs1">
                <img src={slid3data1.img1} alt="" />
                </div>
              </div>
            </Slider>
    ))}
     
    
    </>
  )
}

export default Slider3
