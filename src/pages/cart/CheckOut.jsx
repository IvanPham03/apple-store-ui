import React from "react";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  return (
    <>
      <div className="my-6 w-[1280px]">
        <div>
          <p>Địa Chỉ Nhận Hàng</p>
          <p>
            <b>Phạm Đăng Trường (+84) 989767121</b> tường thọ thới hoà trà ôn
            vĩnh long, Xã Thới Hòa, Huyện Trà Ôn, Vĩnh Long
            <span className="text-red-500">Mặc Định</span>
            <span className="text-red-500">Thay đổi</span>
          </p>
        </div>
        <table class="table-fixed w-full">
          <thead>
            <tr>
              <th>Sản Phẩm</th>
              <th>Đơn Giá</th>
              <th>Số Lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="text-center">100000</td>
              <td className="text-center">11</td>
              <td className="text-center">11</td>
            </tr>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="text-center">100000</td>
              <td className="text-center">11</td>
              <td className="text-center">11</td>
            </tr>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="text-center">100000</td>
              <td className="text-center">11</td>
              <td className="text-center">11</td>
            </tr>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="text-center">100000</td>
              <td className="text-center">11</td>
              <td className="text-center">11</td>
            </tr>
          </tbody>
        </table>
        <div className="text-right">Tổng số tiền (2 sản phẩm): ₫599.500</div>
        <div>
        Phương thức thanh toán
        </div>
        <div className="flex justify-between">
            <p>
            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo <NavLink className="text-blue-500" to="/">Điều khoản Apple Store</NavLink>
            </p>
            <button className="bg-red-500 py-2 px-6 rounded-md text-white hover:opacity-60">
                Đặt hàng
            </button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
