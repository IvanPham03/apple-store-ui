import React, { Fragment, useEffect, useState } from "react";
import Image from "./Image";
import img from "assets/img/iphone-14-pro-den.jpg";
import Question from "components/question/Question";
import AxiosInstance from "../../api/axiosInstance";
import News from "components/news/News";
import { useParams } from "react-router-dom";
import Specifications from "./Specifications";
const Detail = () => {
  const { slug } = useParams();
  const [data, setData] = useState();
  const [price, setPrice] = useState(null);
  const [priceDiscounted, setPriceDiscounted] = useState(null);
  const [version, setVersion] = useState(null);
  const fetchData = async () => {
    try {
      const rs = await AxiosInstance.get(
        process.env.REACT_APP_Server + `/product/details?slug=${slug}`
      );
      setData(rs.data);
    } catch (error) {
      console.log("error fetch data detail: ", error);
    }
  };

  // fetch iphone detail
  useEffect(() => {
    fetchData();
  }, []);

  // handle format price
  useEffect(() => {
    if (data && data.price) {
      setPriceDiscounted(
        (data.price - (data.price * data.stock) / 100).toLocaleString()
      );
      setPrice(data.price.toLocaleString());
    }
  }, [data]);
  return (
    <Fragment>
      {data && (
        <div className="flex mt-20 w-[1280px] justify-between">
          <div className="w-1/2">
            <Image />
          </div>

          <div className="w-1/2 ">
            <p className="text-[26px] font-bold my-2">
              {data.name} - {data.version.storage}
            </p>
            <p className="mt-4">Giá bán</p>
            <div className="flex gap-4 justify-items-center mb-4">
              <p className="text-red-500 text-[24px] font-medium">
                {priceDiscounted} đ
              </p>
              <p className="text-gray-500 text-[14px] font-medium line-through flex items-center">
                {price} đ
              </p>
            </div>
            <p className="mt-4">Bộ nhớ</p>
            <div className="flex gap-8 flex-wrap my-4">
              {data &&
                data.capacity.map((item) => (
                  <button
                    key={item}
                    className={`h-[40px] border-[1px] border-gray-500 shadow-[4px_4px_10px_#ddd] py-2 px-6 rounded-md hover:scale-110 transition ${
                      data.version.storage === item
                        ? "scale-110 border-red-500"
                        : ""
                    }`}
                    onClick={() => {
                      // handleSelect(data._id);
                    }}
                  >
                    <p className="font-medium">{item}</p>
                    <p className="text-red-500 text-[16px] font-medium">
                      {/* {priceDiscounted}đ */}
                    </p>
                  </button>
                ))}
            </div>
            <p className="mt-6">Màu sắc</p>
            <div className="flex flex-nowrap mt-4 gap-6 mb-8">
              {data &&
                data.color.map((item) => {
                  return (
                    <div
                      className={`h-[40px] w-[100px] flex items-center rounded-md border-[1px] border-gray-500`}
                    >
                      <img src={img} className="h-[30px] contains" alt="iph" />
                      <p className="">{item.name}</p>
                    </div>
                  );
                })}
            </div>
            <div className="border rounded-lg ">
              <p className="font-medium bg-main rounded-lg p-4 shadow-sm">
                Thông số kỹ thuật
              </p>
              <div className="my-4 border-1 bg-red-500 h-[500px] overflow-hidden">
                <Specifications iphone={data} />
              </div>
              <div className="bg-red-500 h-0 before:contents-none before:h-[100px] before:-top-[115px] before:relative before:w-full before:block before:bg-gradient-to-t before:from-white">
                
              </div>
              <button className="text-red-500 mx-auto my-8 block px-4 py-2 border-[1.5px] rounded-lg border-red-500 hover:bg-red-500 hover:text-white transition">
                  Xem tất cả thông số
                </button>
            </div>
          </div>
        </div>
      )}
      <News />
      <Question />
    </Fragment>
  );
};

export default Detail;
