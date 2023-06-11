import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//component

import Footer from "../../components/footer/Footer";
import videoIntro from "../../assets/video/hello-video-intro.mp4";
import imgNews from "../../assets/img/news.jpg";
import {Carousel} from "../../components/card/Cards";
import Type from "../../components/type/Type";
const Home = () => {
  
  return (
    <div className="grid justify-items-center">
      {/* intro */}
      <video
        autoPlay
        loop
        muted
        className="2xl:w-[600px] xl:w-[500px] bg-red my-[40px]"
      >
        <source src={videoIntro} />
      </video>
      {/*body */}
      <div className="bg-main w-screen grid justify-items-center">
        {/* series to nav */}
       <Type />
        {/* list card */}
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
      {/* list news */}
      <div className="xl:w-[1250px] grid justify-items-center h-[1000px] my-[20px]">
        {/* row have 3 items */}
        <div className="flex justify-between gap-[50px]">
          <div className="flex gap-4 border-b-[1px] border-black h-[167.47px]">
            <span>
              <img
                src={imgNews}
                className="w-[158.3px] h-[120px] rounded-[10px] object-cover"
              />
            </span>
            <span className="font-bold">Khi nào iOS 16.5 ra mắt?</span>
          </div>
          <div className="flex gap-4 border-b-[1px] border-black h-[167.47px]">
            <span>
              <img
                src={imgNews}
                className="w-[158.3px] h-[120px] rounded-[10px] object-cover"
              />
            </span>
            <span className="font-bold">Khi nào iOS 16.5 ra mắt?</span>
          </div>
          <div className="flex gap-4 border-b-[1px] border-black h-[167.47px]">
            <span>
              <img
                src={imgNews}
                className="w-[158.3px] h-[120px] rounded-[10px] object-cover"
              />
            </span>
            <span className="font-bold">Khi nào iOS 16.5 ra mắt?</span>
          </div>
        </div>
        <div className="flex justify-between gap-[50px]">
          <div className="flex gap-4 border-b-[1px] border-black h-[167.47px]">
            <span>
              <img
                src={imgNews}
                className="w-[158.3px] h-[120px] rounded-[10px] object-cover"
              />
            </span>
            <span className="font-bold">Khi nào iOS 16.5 ra mắt?</span>
          </div>
          <div className="flex gap-4 border-b-[1px] border-black h-[167.47px]">
            <span>
              <img
                src={imgNews}
                className="w-[158.3px] h-[120px] rounded-[10px] object-cover"
              />
            </span>
            <span className="font-bold">Khi nào iOS 16.5 ra mắt?</span>
          </div>
          <div className="flex gap-4 border-b-[1px] border-black h-[167.47px]">
            <span>
              <img
                src={imgNews}
                className="w-[158.3px] h-[120px] rounded-[10px] object-cover"
              />
            </span>
            <span className="font-bold">Khi nào iOS 16.5 ra mắt?</span>
          </div>
        </div>
        <div className="flex justify-between gap-[50px]">
          <div className="flex gap-4 border-b-[1px] border-black h-[167.47px]">
            <span>
              <img
                src={imgNews}
                className="w-[158.3px] h-[120px] rounded-[10px] object-cover"
              />
            </span>
            <span className="font-bold">Khi nào iOS 16.5 ra mắt?</span>
          </div>
          <div className="flex gap-4 border-b-[1px] border-black h-[167.47px]">
            <span>
              <img
                src={imgNews}
                className="w-[158.3px] h-[120px] rounded-[10px] object-cover"
              />
            </span>
            <span className="font-bold">Khi nào iOS 16.5 ra mắt?</span>
          </div>
          <div className="flex gap-4 border-b-[1px] border-black h-[167.47px]">
            <span>
              <img
                src={imgNews}
                className="w-[158.3px] h-[120px] rounded-[10px] object-cover"
              />
            </span>
            <span className="font-bold">Khi nào iOS 16.5 ra mắt?</span>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
