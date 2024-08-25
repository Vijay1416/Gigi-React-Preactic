 
import React, { Component } from "react";
import Slider from "react-slick";
import { Slddiv,Slddiv1,Slddiv2,Slddiv3,Slddiv4,Slddiv5 } from "../Data/Data";
 

function Slide1() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
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
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
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
      
       <div>
   
        <Slider {...settings}>
        {Slddiv.map((Slddivd ,sld) =>(
          <div key={sld}>
          <div className="feature__item">
                        <div className="feature__item-icon">
                            <img src={Slddivd.img11} alt="feature" />
                        </div>
                        <div className="feature__item-content">
                            <h4 className="title">{Slddivd.text1}</h4>
                            <p className="sliderp">{Slddivd.text2}</p>
                        </div>
                    </div>
                    
          </div>
          
          ))}   
            {Slddiv1.map((Slddivd1 ,sld1) =>(
          <div key={sld1}>
          <div className="feature__item">
                        <div className="feature__item-icon">
                            <img src={Slddivd1.img11} alt="feature" />
                        </div>
                        <div className="feature__item-content">
                            <h4 className="title">{Slddivd1.text1}</h4>
                            <p className="sliderp">{Slddivd1.text2}</p>
                        </div>
                    </div>
                    
          </div>
          
          ))}   
            {Slddiv2.map((Slddivd2 ,sld2) =>(
          <div key={sld2}>
          <div className="feature__item">
                        <div className="feature__item-icon">
                            <img src={Slddivd2.img11} alt="feature" />
                        </div>
                        <div className="feature__item-content">
                            <h4 className="title">{Slddivd2.text1}</h4>
                            <p className="sliderp">{Slddivd2.text2}</p>
                        </div>
                    </div>
                    
          </div>
          
          ))}   
            {Slddiv3.map((Slddivd3 ,sld3) =>(
          <div key={sld3}>
          <div className="feature__item">
                        <div className="feature__item-icon">
                            <img src={Slddivd3.img11} alt="feature" />
                        </div>
                        <div className="feature__item-content">
                            <h4 className="title">{Slddivd3.text1}</h4>
                            <p className="sliderp">{Slddivd3.text2}</p>
                        </div>
                    </div>
                    
          </div>
          
          ))}   
            {Slddiv4.map((Slddivd4 ,sld4) =>(
          <div key={sld4}>
          <div className="feature__item">
                        <div className="feature__item-icon">
                            <img src={Slddivd4.img11} alt="feature" />
                        </div>
                        <div className="feature__item-content">
                            <h4 className="title">{Slddivd4.text1}</h4>
                            <p className="sliderp">{Slddivd4.text2}</p>
                        </div>
                    </div>
                    
          </div>
          
          ))}   
            {Slddiv5.map((Slddivd5 ,sld5) =>(
          <div key={sld5}>
          <div className="feature__item">
                        <div className="feature__item-icon">
                            <img src={Slddivd5.img11} alt="feature" />
                        </div>
                        <div className="feature__item-content">
                            <h4 className="title">{Slddivd5.text1}</h4>
                            <p className="sliderp">{Slddivd5.text2}</p>
                        </div>
                    </div>
                    
          </div>
          
          ))}   
          
          
        </Slider>
      </div>
     
    </>
  )
}

export default Slide1
