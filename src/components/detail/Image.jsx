import React from "react";
import Slider from "react-slick";
import img from "assets/img/ip-14-series.png";
import im from "assets/img/iphone-14-pro-den.jpg";
import "./custom.css";
import { NavLink } from "react-router-dom";
const Image = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <NavLink className="block h-full w-[80px]">
          <img src={img} className="object-cover h-full w-full rounded-lg" />
        </NavLink>
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
      <Slider {...settings} className="w-2/5 h-[500px]">
        <div className="w-[350px] border-2 rounded-xl shadow-[4px_6px_12px_#ddd] hover:scale-110 transition">
          <img src={im} className="object-cover object-center h-full rounded-xl" />
        </div>
        
        <div className="w-[350px] border-2 rounded-xl shadow-[4px_6px_12px_#ddd] hover:scale-110 transition">
          <img src={im} className="object-cover object-center h-full rounded-xl" />
        </div>
        
        <div className="w-[350px] border-2 rounded-xl shadow-[4px_6px_12px_#ddd] hover:scale-110 transition">
          <img src={im} className="object-cover object-center h-full rounded-xl" />
        </div>
        
        <div className="w-[350px] border-2 rounded-xl shadow-[4px_6px_12px_#ddd] hover:scale-110 transition">
          <img src={im} className="object-cover object-center h-full rounded-xl" />
        </div>
        
        <div className="w-[350px] border-2 rounded-xl shadow-[4px_6px_12px_#ddd] hover:scale-110 transition">
          <img src={im} className="object-cover object-center h-full rounded-xl" />
        </div>
        
      </Slider>
  );
};

export default Image;
