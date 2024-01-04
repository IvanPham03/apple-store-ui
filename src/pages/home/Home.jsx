import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
//component
import videoIntro from "assets/video/hello-video-intro.mp4";
import img from "assets/img/ip-14-series.png";
import News from "components/news/News";
import Type from "components/type/Type";
import MultipleRows from "../../components/card/Multi";
import AxiosInstance from "../../api/axiosInstance";
const Home = () => {
  const typeIphone = [
    { title: "iPhone 11 series", img: { img }, url: "iphone-11" },
    { title: "iPhone 12 series", img: { img }, url: "iphone-12" },
    { title: "iPhone 13 series", img: { img }, url: "iphone-13" },
    { title: "iPhone 14 series", img: { img }, url: "iphone-14" }
  ];
  const [iphone, setIphopne] = useState(null);

  const fetchIphone = async () => {
    try {
      console.log("start");
      const res = await AxiosInstance.get(
        process.env.REACT_APP_Server + `/product/category/iphone`
      );
      // console.log(res.data);
      setIphopne(res.data);
    } catch (error) {
      console.log("Error fetch iphone:", error);
    }
  };
  useEffect(() => {
    fetchIphone();
  }, []);
  return (
    <Fragment>
      {/* intro */}
      <video
        autoPlay
        loop
        muted
        className="2xl:w-[600px] xl:w-[500px] my-[40px]"
      >
        <source src={videoIntro} />
      </video>
      {/*body */}
      <div className="w-screen shadow-[0_-1px_4px_0px_rgba(0,0,0,0.15)]">
        {/* series to nav */}
        <div className="grid justify-items-center content-start bg-gradient-to-b from-[#F4F9F9] to-white">
          <Type type={typeIphone} />
          {iphone && <MultipleRows products={iphone} />}
        </div>
        <div className="grid justify-items-center content-start bg-gradient-to-b from-[#F4F9F9] to-white">
          <Type type={typeIphone} />
          {iphone && <MultipleRows products={iphone} />}
        </div>
        <div className="grid justify-items-center content-start bg-gradient-to-b from-[#F4F9F9] to-white">
          <Type type={typeIphone} />
          {iphone && <MultipleRows products={iphone} />}
        </div>
        <div className="grid justify-items-center content-start bg-gradient-to-b from-[#F4F9F9] to-white">
          <Type type={typeIphone} />
          {iphone && <MultipleRows products={iphone} />}
        </div>
      </div>
      {/* list news */}
      <News />
      <Suspense />
    </Fragment>
  );
};

export default Home;
