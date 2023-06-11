import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Card from "../../src/components/card/Card.jsx";
const Test = () => {
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
   const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div>
    <Slider {...settings} className="bg-slate-900 flex flex-row" >
        {iphones &&
          iphones.map((iphone) => {
            return <Card iphone={iphone} key={iphone._id} />;
          })}
        </Slider>

    </div>
  )
}

export default Test