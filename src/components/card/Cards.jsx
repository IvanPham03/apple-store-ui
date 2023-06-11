import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from "./Card";
import {
  // MobileNav,
  Button,
} from "@material-tailwind/react";

import iconLeft from "../../assets/icon/arrow-left.png";
import iconRight from "../../assets/icon/arrow-right.png";

// all
const Cards = () => {
  const [iphones, setIphones] = useState();
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;
  useEffect(() => {
    fetchListIphone();
  }, []);

  const fetchListIphone = async () => {
    try {
      var res = await fetch(apiUrl + "/iphone");
      const jsondata = await res.json();
      setIphones(jsondata);
    } catch (error) {
      console.log("message error from fetch iphone:", error);
    }
  };
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 230;
    console.log(document.getElementById("content"));
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 230;
  };
  return (
    <>
      <div className="flex justify-between bg-red-500 w-[1250px] h-[50px] items-center rounded-[7px]">
        <p className="ml-4 text-white text-xl">Sản phẩm bán chạy</p>
        <p className="flex gap-3 h-[30px] mr-4">
          <Button className="rounded-none" onClick={scrollLeft}>
            <img
              src={iconLeft}
              alt="icon-left"
              className="object-contain h-full border-2 rounded-sm"
            />
          </Button>
          <Button className="rounded-none" onClick={scrollRight}>
            <img
              src={iconRight}
              alt="icon-right"
              className="object-contain h-full border-2 rounded-sm"
            />
          </Button>
        </p>
      </div>
      <div
        id="content"
        className="carousel 2xl:w-[1250px] xl:w-[1250px] h-[1000px] flex gap-4 my-6 scroll-smooth overflow-x-auto"
      >
        {iphones &&
          iphones.map((iphone) => {
            return <Card iphone={iphone} key={iphone._id} />;
          })}
      </div>
    </>
  );
};

const Carousel = () => {
  const [iphones, setIphones] = useState();
  const [sliderRef, setSliderRef] = useState(null)
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;
  useEffect(() => {
    fetchListIphone();
  }, []);

  const fetchListIphone = async () => {
    try {
      var res = await fetch(apiUrl + "/iphone");
      const jsondata = await res.json();
      setIphones(jsondata);
    } catch (error) {
      console.log("message error from fetch iphone:", error);
    }
  };

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <>
      <div className="flex justify-between bg-red-500 w-[1280px] h-[50px] items-center rounded-[7px]">
        <p className="ml-4 text-white text-xl">Sản phẩm bán chạy</p>
        <p className="flex gap-3 h-[30px] mr-4">
          <Button className="rounded-none" onClick={sliderRef?.slickPrev}>
            <img
              src={iconLeft}
              alt="icon-left"
              className="object-contain h-full border-2 rounded-sm"
            />
          </Button>
          <Button className="rounded-none" onClick={sliderRef?.slickNext}>
            <img
              src={iconRight}
              alt="icon-right"
              className="object-contain h-full border-2 rounded-sm"
            />
          </Button>
        </p>
      </div>
      <div className="2xl:w-[1280px] xl:w-[1280px] overflow-hidden">
        <Slider {...settings} ref={setSliderRef} className="my-8">
          {iphones &&
            iphones.map((iphone) => {
              return <Card iphone={iphone} key={iphone._id} />;
            })}
        </Slider>
      </div>
    </>
  );
};

// carousel infinite

export default Cards;
export { Carousel };
