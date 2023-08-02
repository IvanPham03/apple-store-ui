import React, { lazy, Suspense } from "react";
//component
import videoIntro from "assets/video/hello-video-intro.mp4";
import img from "assets/img/ip-14-series.png";
import News from "components/news/News";
import Type from "components/type/Type";
const MultipleRows= lazy(() => import("components/card/Multi"));

const Home = () => {
  const typeIphone = [
    { title: "iPhone 11 series", img: { img }, url: "iphone-11" },
    { title: "iPhone 12 series", img: { img }, url: "iphone-12" },
    { title: "iPhone 13 series", img: { img }, url: "iphone-13" },
    { title: "iPhone 14 series", img: { img }, url: "iphone-14" },
  ];
  const linkIphone = process.env.REACT_APP_API_DOMAIN + '/iphone'
  const linkMac = process.env.REACT_APP_API_DOMAIN + '/macbook'
  const linkAirpods = process.env.REACT_APP_API_DOMAIN + '/airpods'
  const linkIpad = process.env.REACT_APP_API_DOMAIN + '/ipad'
  return (
    <>
      {/* intro */}
      <Suspense fallback={<>hello</>}></Suspense>
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
          <MultipleRows link={linkIphone} />
        </div>
        <div className="grid justify-items-center content-start bg-gradient-to-b from-[#F4F9F9] to-white">
          <Type type={typeIphone} />
          <MultipleRows link={linkMac}  />
        </div>
        <div className="grid justify-items-center content-start bg-gradient-to-b from-[#F4F9F9] to-white">
          <Type type={typeIphone} />
          <MultipleRows link={linkIpad}  />
        </div>
        <div className="grid justify-items-center content-stawrt bg-gradient-to-b from-[#F4F9F9] to-white">
          <Type type={typeIphone} />
          <MultipleRows link={linkAirpods} />
        </div>
      </div>
      {/* list news */}
      <News />
      <Suspense/>
    </>
  );
};

export default Home;
