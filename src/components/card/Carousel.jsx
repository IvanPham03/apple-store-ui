import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "redux/actions";
import { productsState$ } from "redux/selectors";import Card from "./Card";
import {
  // MobileNav,
  Button,
} from "@material-tailwind/react";

import iconLeft from "assets/icon/arrow-left.png";
import iconRight from "assets/icon/arrow-right.png";
import './custom.css'

// all


// 1 row
const Carousel = () => {
  const iphones = useSelector(productsState$);
  const dispatch = useDispatch();
  // ref button
  const [sliderRef, setSliderRef] = useState(null);
  // check có đang swipe không, xử lý trường hợp khi swipe nó lại dính onclick
  const [isSwiping, setIsSwiping] = useState(false);
 // nó được gị 1 lần, nhưng nó sẽ bị re render do slick render lai
 useEffect(() => {
  dispatch(getProducts.getProductsRequest());
}, [dispatch]);


  const settings = {
    speed: 1000,
    autoplay: true,
    slidesToShow:
    iphones && iphones.length > 0 ? (iphones.length > 5 ? 5 : iphones.length) : 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    swipeToSlide: true,
    beforeChange: () => {
      setIsSwiping(true); // Đánh dấu là đang swipe
    },
    afterChange: () => {
      setIsSwiping(false); // Đánh dấu là swipe đã kết thúc
    },
  };
  return (
    <>
      <div className="flex justify-between bg-red-500 xl:w-[1280px] h-[50px] items-center rounded-[7px] mt-10">
        <p className="ml-4 text-white text-xl font-medium ">
          Sản phẩm bán chạy
        </p>
        <p className="flex gap-3 h-[30px] mr-4">
          <Button className="rounded-none px-0 bg-transparent" onClick={sliderRef?.slickPrev}>
            <img
              src={iconLeft}
              alt="icon-left"
              className="object-contain h-full border-2 rounded-sm"
            />
          </Button>
          <Button className="rounded-none px-0 bg-transparent" onClick={sliderRef?.slickNext}>
            <img
              src={iconRight}
              alt="icon-right"
              className="object-contain h-full border-2 rounded-sm"
            />
          </Button>
        </p>
      </div>
      <div className="2xl:w-[1280px] xl:w-[1280px] overflow-hidden">
        <Slider {...settings} ref={setSliderRef} className="my-2">
        {iphones &&
            iphones.map((iphone) => {
              return (
                <Card iphone={iphone} isSwiping={isSwiping} key={iphone._id} />
              );
            })}
        </Slider>
      </div>
    </>
  );
};
export default Carousel
