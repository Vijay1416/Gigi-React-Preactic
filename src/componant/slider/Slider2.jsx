import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import sldim_1 from '../images/sld2im1.png'
import sldim_2 from '../images/sld2im2.png'
const SliderSlick = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  //i dont seem to need this
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const settings1 = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section className="slidetoo">
        <div className="row">
          <div className="col-xl-6">
            <Slider className="mainSlider " asNavFor={nav2} ref={slider1} {...settings}>
              <div>
                <div className="sldunimgs1">
                  <img src={sldim_1} alt="" />
                </div>

              </div>
              <div>
                <div className="sldunimgs1">
                  <img src={sldim_2} alt="" />
                </div>
              </div>
              
            </Slider>
          </div>

          <div className=" col-xl-6 my-xl-0 my-4">   <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={3}
            swipeToSlide={true}
            className="secsldsec11"
            focusOnSelect={true}  {...settings1}
          >
            <div>
              <div className="testimonial__content">
                <div className="icon"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
                <p>Maecenas tempus tellus egcondi entuhoncus seuam semper libero sit amet adipiscing sque sesum.amuam nunc, blandit vel, luctus pvinar hendrerilorem. aecenas nec odio</p>
                <h3 className="name">Munna Ahmed</h3>
                <span className="designation text-white">Front-end Web Developer</span>
              </div>
            </div>
            <div>
              <div className="testimonial__content">
                <div className="icon"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
                <p>Maecenas tempus tellus egcondi entuhoncus seuam semper libero sit amet adipiscing sque sesum.amuam nunc, blandit vel, luctus pvinar hendrerilorem. aecenas nec odio</p>
                <h3 className="name">Munna Ahmed</h3>
                <span className="designation text-white">Front-end Web Developer</span>
              </div>
            </div>
            
          </Slider></div>

        </div>
      </section>


    </>
  );
};

export default SliderSlick;
