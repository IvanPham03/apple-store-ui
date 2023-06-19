import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";
const MultipleRows = (props) => {
  const [iphones, setIphones] = useState();
  const [countCard, setcountcard] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    fetchListIphone();
  }, []);

  const fetchListIphone = async () => {
    try {
      var res = await fetch(process.env.REACT_APP_API_ENDPOINT + "/iphone");
      const jsondata = await res.json();
      setcountcard(jsondata.length);
      setIphones(jsondata.slice(0, 20));
    } catch (error) {
      console.log("message error from fetch iphone:", error);
    }
  };

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow:
      countCard && countCard > 0 ? (countCard > 5 ? 5 : countCard) : 1,
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
  const [over, setOver] = useState(false);
  return (
    <>
      <div className="2xl:w-[1280px] xl:w-[1280px] overflow-hidden">
        <Slider {...settings} className="my-8">
          {iphones &&
            iphones.map((iphone) => {
              return (
                <Card iphone={iphone} isSwiping={isSwiping} key={iphone._id} />
              );
            })}
        </Slider>
        <div className="flex justify-center my-14 ">
          <button
            className="flex group h-12 border border-1 border-red-500 bg-main place-items-center py-2 px-8 rounded-lg gap-2 hover:bg-red-500 transition duration-200 ease-linear"
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
