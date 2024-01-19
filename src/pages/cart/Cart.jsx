import React from "react";
import image from "../../assets/img/ip-14-series.png";
import logo from "../../assets/logo/logo-apple-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const index = () => {
  return (
    <>
      <div className="my-6 2xl:w-[1280px] xl:w-[1200px]">
        <p className="text-red-500 text-[40px] my-6 flex items-center gap-2"> <FontAwesomeIcon icon={faCartShopping} className="h-8"/> | Giỏ Hàng</p>
        <table class="table-fixed w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="">
              <th className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="text-left"> Sản Phẩm</th>
              <th className="w-[150px] ">Đơn Giá</th>
              <th className="w-[100px] ">Số Lượng</th>
              <th className="w-[120px] ">Số Tiền</th>
              <th className="w-[100px] ">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={image}
                    alt="img"
                    className="w-20 h-20 object-cover shadow-lg mr-2"
                  />{" "}
                  <p>The Sliding Mr. Bones (Next Stop, Pottersville) </p>
                </div>
                <p>Phân loại: 64Gb</p>
              </td>
              <td className="text-center">
                <span className="font-thin line-through">10000d</span>{" "}
                <span>1000d</span>
              </td>
              <td className="text-center my-0 mt-auto">
                <div className="flex gap-3 items-center justify-center">
                  <button>
                    <FontAwesomeIcon icon={faMinus} className="w-3" />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} className="w-3" />
                  </button>
                </div>
              </td>
              <td className="text-center text-red-500">10000d</td>
              <td className="text-center">Xoá</td>
            </tr>
            <tr>
              <td className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={image}
                    alt="img"
                    className="w-20 h-20 object-cover shadow-lg mr-2"
                  />{" "}
                  <p>The Sliding Mr. Bones (Next Stop, Pottersville) </p>
                </div>
                <p>Phân loại: 64Gb</p>
              </td>
              <td className="text-center">
                <span className="font-thin line-through">10000d</span>{" "}
                <span>1000d</span>
              </td>
              <td className="text-center my-0 mt-auto">
                <div className="flex gap-3 items-center justify-center">
                  <button>
                    <FontAwesomeIcon icon={faMinus} className="w-3" />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} className="w-3" />
                  </button>
                </div>
              </td>
              <td className="text-center text-red-500">10000d</td>
              <td className="text-center">Xoá</td>
            </tr>
            <tr>
              <td className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={image}
                    alt="img"
                    className="w-20 h-20 object-cover shadow-lg mr-2"
                  />{" "}
                  <p>The Sliding Mr. Bones (Next Stop, Pottersville) </p>
                </div>
                <p>Phân loại: 64Gb</p>
              </td>
              <td className="text-center">
                <span className="font-thin line-through">10000d</span>{" "}
                <span>1000d</span>
              </td>
              <td className="text-center my-0 mt-auto">
                <div className="flex gap-3 items-center justify-center">
                  <button>
                    <FontAwesomeIcon icon={faMinus} className="w-3" />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} className="w-3" />
                  </button>
                </div>
              </td>
              <td className="text-center text-red-500">10000d</td>
              <td className="text-center">Xoá</td>
            </tr>
            <tr>
              <td className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={image}
                    alt="img"
                    className="w-20 h-20 object-cover shadow-lg mr-2"
                  />{" "}
                  <p>The Sliding Mr. Bones (Next Stop, Pottersville) </p>
                </div>
                <p>Phân loại: 64Gb</p>
              </td>
              <td className="text-center">
                <span className="font-thin line-through">10000d</span>{" "}
                <span>1000d</span>
              </td>
              <td className="text-center my-0 mt-auto">
                <div className="flex gap-3 items-center justify-center">
                  <button>
                    <FontAwesomeIcon icon={faMinus} className="w-3" />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} className="w-3" />
                  </button>
                </div>
              </td>
              <td className="text-center text-red-500">10000d</td>
              <td className="text-center">Xoá</td>
            </tr>
            <tr>
              <td className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={image}
                    alt="img"
                    className="w-20 h-20 object-cover shadow-lg mr-2"
                  />{" "}
                  <p>The Sliding Mr. Bones (Next Stop, Pottersville) </p>
                </div>
                <p>Phân loại: 64Gb</p>
              </td>
              <td className="text-center">
                <span className="font-thin line-through">10000d</span>{" "}
                <span>1000d</span>
              </td>
              <td className="text-center my-0 mt-auto">
                <div className="flex gap-3 items-center justify-center">
                  <button>
                    <FontAwesomeIcon icon={faMinus} className="w-3" />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} className="w-3" />
                  </button>
                </div>
              </td>
              <td className="text-center text-red-500">10000d</td>
              <td className="text-center">Xoá</td>
            </tr>
            <tr>
              <td className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={image}
                    alt="img"
                    className="w-20 h-20 object-cover shadow-lg mr-2"
                  />{" "}
                  <p>The Sliding Mr. Bones (Next Stop, Pottersville) </p>
                </div>
                <p>Phân loại: 64Gb</p>
              </td>
              <td className="text-center">
                <span className="font-thin line-through">10000d</span>{" "}
                <span>1000d</span>
              </td>
              <td className="text-center my-0 mt-auto">
                <div className="flex gap-3 items-center justify-center">
                  <button>
                    <FontAwesomeIcon icon={faMinus} className="w-3" />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} className="w-3" />
                  </button>
                </div>
              </td>
              <td className="text-center text-red-500">10000d</td>
              <td className="text-center">Xoá</td>
            </tr>
            <tr>
              <td className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={image}
                    alt="img"
                    className="w-20 h-20 object-cover shadow-lg mr-2"
                  />{" "}
                  <p>The Sliding Mr. Bones (Next Stop, Pottersville) </p>
                </div>
                <p>Phân loại: 64Gb</p>
              </td>
              <td className="text-center">
                <span className="font-thin line-through">10000d</span>{" "}
                <span>1000d</span>
              </td>
              <td className="text-center my-0 mt-auto">
                <div className="flex gap-3 items-center justify-center">
                  <button>
                    <FontAwesomeIcon icon={faMinus} className="w-3" />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} className="w-3" />
                  </button>
                </div>
              </td>
              <td className="text-center text-red-500">10000d</td>
              <td className="text-center">Xoá</td>
            </tr>
            <tr>
              <td className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={image}
                    alt="img"
                    className="w-20 h-20 object-cover shadow-lg mr-2"
                  />{" "}
                  <p>The Sliding Mr. Bones (Next Stop, Pottersville) </p>
                </div>
                <p>Phân loại: 64Gb</p>
              </td>
              <td className="text-center">
                <span className="font-thin line-through">10000d</span>{" "}
                <span>1000d</span>
              </td>
              <td className="text-center my-0 mt-auto">
                <div className="flex gap-3 items-center justify-center">
                  <button>
                    <FontAwesomeIcon icon={faMinus} className="w-3" />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} className="w-3" />
                  </button>
                </div>
              </td>
              <td className="text-center text-red-500">10000d</td>
              <td className="text-center">Xoá</td>
            </tr>
            <tr>
              <td className="w-10 text-left pl-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={image}
                    alt="img"
                    className="w-20 h-20 object-cover shadow-lg mr-2"
                  />{" "}
                  <p>The Sliding Mr. Bones (Next Stop, Pottersville) </p>
                </div>
                <p>Phân loại: 64Gb</p>
              </td>
              <td className="text-center">
                <span className="font-thin line-through">10000d</span>{" "}
                <span>1000d</span>
              </td>
              <td className="text-center my-0 mt-auto">
                <div className="flex gap-3 items-center justify-center">
                  <button>
                    <FontAwesomeIcon icon={faMinus} className="w-3" />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} className="w-3" />
                  </button>
                </div>
              </td>
              <td className="text-center text-red-500">10000d</td>
              <td className="text-center">Xoá</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-10 flex justify-end gap-4">
          <p className="py-2 px-4">
            Tổng thanh toán (0 Sản phẩm):{" "}
            <span className="font-bold text-red-500 text-xl">₫110</span>
          </p>
          <button className="bg-red-500 py-2 px-4 text-white rounded hover:opacity-60">
            Thanh toán (0)
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
