import React from "react";
import Image from "./Image";
import img from "assets/img/iphone-14-pro-den.jpg";
import Question from "components/question/Question";
import News from 'components/news/News'
const Detail = () => {
  return (
    <>
      <div className="flex mt-20 w-[1280px] justify-between">
        <Image />
        <div className="w-1/2">
          <p className="text-[26px] font-bold">Iphone 14 Pro max</p>
          <p className="mt-4">Giá bán</p>
          <div className="flex gap-4 justify-items-center mb-4">
            <p className="text-red-500 text-[20px] font-medium">33,490,000đ</p>
            <p className="text-gray-500 text-[16px] font-medium line-through flex items-center">
              33,490,000đ
            </p>
          </div>
          <div className="flex gap-8 flex-wrap my-10">
            <button className="border-[1px] border-gray-500 shadow-[4px_4px_10px_#ddd] py-2 px-6 rounded-md hover:scale-110 transition">
              <p className="font-med">Iphone 14 pro max</p>
              <p className="text-red-500 text-[16px] font-medium">
                33,490,000đ
              </p>
            </button>
            <button className="border-[1px] border-red-500 shadow-[4px_4px_10px_gray] py-2 px-6 rounded-md scale-110">
              <p className="font-med">Iphone 14 pro max</p>
              <p className="text-red-500 text-[16px] font-medium">
                33,490,000đ
              </p>
            </button>
            <button className="border-[1px] border-gray-500 shadow-[4px_4px_10px_#ddd] py-2 px-6 rounded-md hover:scale-110 transition">
              <p className="font-med">Iphone 14 pro max</p>
              <p className="text-red-500 text-[16px] font-medium">
                33,490,000đ
              </p>
            </button>
            <button className="border-[1px] border-gray-500 shadow-[4px_4px_10px_#ddd] py-2 px-6 rounded-md hover:scale-110 transition">
              <p className="font-med">Iphone 14 pro max</p>
              <p className="text-red-500 text-[16px] font-medium">
                33,490,000đ
              </p>
            </button>
          </div>
          <p className="my-4">Màu sắc</p>
          <div className="flex flex-nowrap gap-6 mb-8">
            <button className="h-[40px] w-[40px] bg-blue-800 rounded-md hover:scale-110 transition">
              {/* <img src={img} alt="" className="object-cover h-full w-full" /> */}
            </button>
            <button className="h-[40px] w-[40px] bg-blue-800 rounded-md hover:scale-110 transition">
              {/* <img src={img} alt="" className="object-cover h-full w-full" /> */}
            </button>
            <button className="h-[40px] w-[40px] bg-blue-800 rounded-md hover:scale-110 transition">
              {/* <img src={img} alt="" className="object-cover h-full w-full" /> */}
            </button>
            <button className="h-[40px] w-[40px] bg-blue-800 rounded-md hover:scale-110 transition">
              {/* <img src={img} alt="" className="object-cover h-full w-full" /> */}
            </button>
            <button className="h-[40px] w-[40px] bg-blue-800 rounded-md hover:scale-110 transition">
              {/* <img src={img} alt="" className="object-cover h-full w-full" /> */}
            </button>
          </div>
          <p className="font-medium bg-main rounded-lg p-4">
            Thông số kỹ thuật
          </p>
          <div className="my-4">
            <p className="flex justify-between py-1">
              <span>Kích thước màn hình </span>
              <span className="w-1/2">10px</span>
            </p>
            <p className="flex justify-between py-1">
              <span>Công nghệ màn hình </span>
              <span className="w-1/2">10px</span>
            </p>
            <p className="flex justify-between py-1">
              <span>Tính năng màn hình, độ sáng </span>
              <span className="w-1/2">10px</span>
            </p>
            <p className="flex justify-between py-1">
              <span>Tốc độ làm mới </span>
              <span className="w-1/2">10px</span>
            </p>
            <p className="flex justify-between py-1">
              <span>Chipset </span>
              <span className="w-1/2">10px</span>
            </p>
            <p className="flex justify-between py-1">
              <span>GPU </span>
              <span className="w-1/2">10px</span>
            </p>
            <p className="flex justify-between py-1">
              <span>Bộ nhớ trong </span>
              <span className="w-1/2">10px</span>
            </p>
            <button className="text-red-500 mx-auto my-8 block px-4 py-2 border-[1.5px] rounded-lg border-red-500 hover:bg-red-500 hover:text-white transition">
              Xem tất cả thông số
            </button>
          </div>
        </div>
      </div>
      <News />
      <Question />
    </>
  );
};

export default Detail;
