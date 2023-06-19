import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import "./custom.css";
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

  return (
    <>
      <div
        id="content"
        className="max-w-[1280px] grid gap-4 my-6 xl:grid-cols-5"
      >
        {iphones &&
          iphones.map((iphone) => {
            return <Card iphone={iphone} key={iphone._id} />;
          })}
      </div>
    </>
  );
};

export default Cards;
