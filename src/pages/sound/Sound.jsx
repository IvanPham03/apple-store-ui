import React from 'react'
// import React from 'react'
import { Cards, Carousel } from "components/card";
import Questions from "components/question/Question";
import Type from "components/type/Type";
import News from "components/news/News";
import img from "assets/img/ip-14-series.png";
import iphone from "assets/img/progroup-mb-pro-m2-230612102526.webp";
const Sound = () => {
  const typeIphone = [
    { title: "iPhone 11 series", img: { img }, url: "iphone-11" },
    { title: "iPhone 12 series", img: { img }, url: "iphone-12" },
    { title: "iPhone 13 series", img: { img }, url: "iphone-13" },
    { title: "iPhone 14 series", img: { img }, url: "iphone-14" },
  ];
  return (
    <>
      <div className="flex gap-8 my-6 w-[1280px]">
        <div>
          {" "}
          <img src={iphone} alt="iphone-intro" />
        </div>
        <div>
          {" "}
          <img src={iphone} alt="iphone-intro" />
        </div>
      </div>
      <div className="w-screen shadow-[0_-1px_4px_0px_rgba(0,0,0,0.15)] bg-gradient-to-b from-[#F4F9F9] to-white">
        {/* series to nav */}
        <div className="grid justify-items-center content-start">
          <Type type={typeIphone} />
          <Carousel />
        </div>
        <div className="grid justify-items-center content-start">
          <Type type={typeIphone} />
          <Cards />
        </div>
      </div>
      <News />
      <Questions />
    </>
  )
}

export default Sound