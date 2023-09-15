import React, { useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ----------------------------
import Card from "./Card";
//
const MultipleRows = (props) => {
  const products = props.products
  const [over, setOver] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
 

  const checkEven = products.length % 2 === 0? products.length: products.length-1 
  const iphones = products.slice(0, checkEven)
  console.table(iphones);
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow:
      products && checkEven > 0 ? (checkEven > 5 ? 5 : checkEven) : 1,
    autoplaySpeed: 2000,
    rows: 2,
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
      <div className="2xl:w-[1280px] xl:w-[1200px] lg: hidden overflow-hidden">
        <Slider {...settings} className="my-8">
          {iphones &&
            iphones.map((iphone) => {
              return (
                <Card iphone={iphone} isSwiping={isSwiping} key={iphone._id} root={props.root} />
              );
            })}
        </Slider>
        <div className="flex justify-center my-14 ">
          <button
            className="flex group h-12 border border-1 border-red-500 bg-main place-products-center py-2 px-8 rounded-lg gap-2 hover:bg-red-500 transition duration-200 ease-linear"
            onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
          >
            <NavLink
              to={props.link}
              className="font-medium group-hover:text-white transition"
            >
              Xem toàn bộ sản phẩm{" "}
            </NavLink>
            <FontAwesomeIcon
              icon={faArrowRight}
              color="red"
              size="lg"
              style={over ? { color: "white" } : { color: "black" }}
              className="group-hover:translate-x-2 transition duration-200 ease-linear"
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default MultipleRows;
