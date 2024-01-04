import React from "react";

const iphone = ({ iphone }) => {
  return (
    <>
      <div className="flex justify-between py-1 px-4 even:bg-gray-200 odd:bg-white">
        <span>Màn hình </span>
        <span className="w-1/2">
          {iphone &&
            iphone.display.map((item) => {
              return <p className="py-1"> {item}</p>;
            })}
        </span>
      </div>
      <div className="flex justify-between py-1 px-4 even:bg-gray-200 odd:bg-white">
        <span>Kích thước</span>
        <span className="w-1/2">
          Dài {iphone.size.height} - Ngang {iphone.size.width} - Dày{" "}
          {iphone.size.hepth} - Nặng {iphone.size.weight}
        </span>
      </div>
      <div className="flex justify-between py-1 px-4 even:bg-gray-200 odd:bg-white">
        <span>Chipset </span>
        <span className="w-1/2">
          {iphone &&
            iphone.chip.map((item) => {
              return <p className="py-1"> {item}</p>;
            })}
        </span>
      </div>
      <div className="flex justify-between py-1 px-4 even:bg-gray-200 odd:bg-white">
        <span>Dung lượng lưu trữ </span>
        <span className="w-1/2">
          {iphone &&
            iphone.capacity.map((item) => {
              return <p className="py-1"> {item}</p>;
            })}
        </span>
      </div>
      <div className="flex justify-between py-1 px-4 even:bg-gray-200 odd:bg-white">
        <span>Dung lượng pin </span>
        <span className="w-1/2">
          {iphone &&
            iphone.powerAndBattery.map((item) => {
              return <p className="py-1"> {item}</p>;
            })}
        </span>
      </div>
    </>
  );
};

export default iphone;
