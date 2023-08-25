import React, { Fragment, useEffect, useState } from "react";
import Image from "./Image";
import img from "assets/img/iphone-14-pro-den.jpg";
import Question from "components/question/Question";
import News from "components/news/News";
import { useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const { model } = useParams();
  const [data, setData] = useState();
  const [selectProduct, setSelectProduct] = useState();
  const handleSelect = id => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + `/product/iphone/${id}`)
      .then(res => setSelectProduct(res.data));
  };
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + `/product/${model}`)
      .then(res => {
        setData(res.data);
        setSelectProduct(res.data[0]);
      });
  }, []);
  console.log('data', data);
  console.log('selectProduct', selectProduct);
  return (
    <Fragment>
      {selectProduct &&
        <div className="flex mt-20 w-[1280px] justify-between">
          <Image />
          <div className="w-1/2">
            <p className="text-[26px] font-bold my-2">
              {selectProduct.name} {selectProduct.storage}
            </p>
            <p className="my-2">Giá bán</p>
            <div className="flex gap-4 justify-items-center mb-4">
              <p className="text-red-500 text-[20px] font-medium">
                {selectProduct.priceDiscounted.toLocaleString()}đ
              </p>
              <p className="text-gray-500 text-[16px] font-medium line-through flex items-center">
                {selectProduct.price.toLocaleString()}đ
              </p>
            </div>
            <div className="flex gap-8 flex-wrap my-10">
              {data &&
                data.map(item =>
                  <button
                    key={item._id}
                    className={`border-[1px] border-gray-500 shadow-[4px_4px_10px_#ddd] py-2 px-6 rounded-md hover:scale-110 transition ${selectProduct.storage ===
                    item.storage
                      ? "scale-105 border-red-500"
                      : ""}`}
                    onClick={() => {
                      handleSelect(item._id);
                    }}
                  >
                    <p className="font-medium">
                      {item.name} {item.storage}
                    </p>
                    <p className="text-red-500 text-[16px] font-medium">
                      {item.priceDiscounted.toLocaleString()}đ
                    </p>
                  </button>
                )}
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
            <p className="font-medium bg-main rounded-lg p-4 shadow-sm">
              Thông số kỹ thuật
            </p>
            <div className="my-4">
              <p className="flex justify-between py-1">
                <span>Kích thước màn hình </span>
                <span className="w-1/2">
                  {selectProduct.detail.screen?selectProduct.detail.screen: '---' } inches
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Công nghệ màn hình </span>
                <span className="w-1/2">
                  {selectProduct.detail.screentech?selectProduct.detail.screentech: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Chipset </span>
                <span className="w-1/2">
                  {selectProduct.detail.processor?selectProduct.detail.processor: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Bộ nhớ ngoài </span>
                <span className="w-1/2">
                  {selectProduct.ram?selectProduct.ram: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Bộ nhớ trong </span>
                <span className="w-1/2">
                  {selectProduct.storage?selectProduct.storage: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Dung lượng pin </span>
                <span className="w-1/2">
                  {selectProduct.detail.battery?selectProduct.detail.battery: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Kết nối </span>
                <span className="w-1/2">
                  {selectProduct.detail.connectivity?selectProduct.detail.connectivity: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Hệ điều hành </span>
                <span className="w-1/2">
                  {selectProduct.detail.operating?selectProduct.detail.operating: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Âm thanh </span>
                <span className="w-1/2">
                  {selectProduct.detail.audio }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Sim </span>
                <span className="w-1/2">
                  {selectProduct.detail.sim?selectProduct.detail.sim: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Chất liệu </span>
                <span className="w-1/2">
                  {selectProduct.detail.design?selectProduct.detail.design: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Kích thước </span>
                <span className="w-1/2">
                  {selectProduct.detail.dimensions?selectProduct.detail.dimensions: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Khối lượng </span>
                <span className="w-1/2">
                  {selectProduct.detail.weight?selectProduct.detail.weight: '---' }
                </span>
              </p>
              <p className="flex justify-between py-1">
                <span>Công nghệ khác </span>
                <span className="w-1/2">
                  {selectProduct.detail.additional?selectProduct.detail.additional: '---' }
                </span>
              </p>
              <button className="text-red-500 mx-auto my-8 block px-4 py-2 border-[1.5px] rounded-lg border-red-500 hover:bg-red-500 hover:text-white transition">
                Xem tất cả thông số
              </button>
            </div>
          </div>
        </div>}
      <News />
      <Question />
    </Fragment>
  );
};

export default Detail;
