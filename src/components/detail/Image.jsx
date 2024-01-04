import React from "react";
import Slider from "react-slick";
import img from "assets/img/ip-14-series.png";
import im from "assets/img/iphone-14-pro-den.jpg";
import "./custom.css";
const Image = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <div className="flex h-full w-[80px] items-center">
          <img src={img} className="object-cover h-[80px] w-[80px]" alt="img"/>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };
  return (
      <Slider {...settings} className="w-4/5 h-[500px] mt-0">
        <div className="w-[350px] rounded-xl hover:scale-110 transition border-none">
          <img src={im} className="object-cover object-center h-full rounded-xl bg-none border-none" alt=""/>
        </div>
        
        <div className="w-[350px] rounded-xl hover:scale-110 transition">
          <img src={im} className="object-cover object-center h-full rounded-xl" alt=""/>
        </div>
        
        <div className="w-[350px] rounded-xl hover:scale-110 transition">
          <img src={im} className="object-cover object-center h-full rounded-xl" alt=""/>
        </div>
        
        <div className="w-[350px] rounded-xl hover:scale-110 transition">
          <img src={im} className="object-cover object-center h-full rounded-xl" alt=""/>
        </div>
        
        <div className="w-[350px] rounded-xl hover:scale-110 transition">
          <img src={im} className="object-cover object-center h-full rounded-xl" alt=""/>
        </div>
        
       
        
      </Slider>
  );
};

export default Image;
