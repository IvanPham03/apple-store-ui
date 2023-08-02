import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "assets/logo/logo-apple-black.png";
import google from "assets/icon/google.png";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[1280px] h-[1200px] grid place-items-center content-start my-10 ">
      <div className="flex flex-col items-center">
        <span className="">
          <img src={logo} alt="logo" className="h-32" />
        </span>
        <span className="text-[32px] font-medium my-5">Đăng ký tài khoản</span>
      </div>
      <div className="w-[600px] my-2">
        <input
          type="text"
          placeholder="Vui lòng nhập họ và tên"
          className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
        />
        <input
          type="text"
          placeholder="Vui lòng nhập số điện thoại (bắt buộc)"
          className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
        />
        <input
          type="text"
          placeholder="Vui lòng nhập số điện email (bắt buộc)"
          className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
        />
        <input
          type="text"
          placeholder="Nhập mật khẩu của bạn"
          className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
        />
        <input
          type="text"
          placeholder="Nhập mật khẩu của bạn"
          className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
        />
        <p className="text-xs pl-4 italic">
          Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường 1 chữ in hoa, 1
          chữ số, 1 ký tự đặc biệt
        </p>
        <div className="py-2">
          <input type="checkbox" id="acceptPrivacy" className="hover:cursor-pointer" />
          <label htmlFor="acceptPrivacy" className="hover:cursor-pointer pl-2 text-[#9CA3AF]">Tôi đồng ý với các điều khoản bảo mật cá nhân</label>
        </div>
      </div>
      {/* <div className="my-4">
        <div className="w-[300px] h-[100px] bg-red-500">mã captcha</div>
      </div> */}
      <button className="border-red-500 border text-white bg-red-500 w-[600px] px-4 py-2 rounded-3xl my-4 hover:bg-red-200 hover:text-black transition drop-shadow-md">
        Đăng ký
      </button>
      <div className="flex items-center w-[600px]">
        {/* flex 1 = grow schrink basis = 1 1 0 */}
        <div className="flex-1 p-2">
          <div className="h-px bg-gray-300"></div>
        </div>
        <p>hoặc</p>
        <div className="flex-1 p-2">
          <div className="h-px bg-gray-300 "></div>
        </div>
      </div>
      <div className="w-[600px] flex justify-center my-6">
        <button className="flex items-center gap-3 border rounded-3xl w-full justify-center p-2 hover:bg-gray-100 transition hover:border-red-300 hover:opacity-80 drop-shadow-md">
          <img src={google} alt="icon-google" className="h-6 w-6 cover" />
          <span>Đăng ký bằng Google</span>
        </button>
      </div>
      <div className="w-[600px] flex justify-center gap-1">
        <p>Bạn đã có tài khoản?</p>
        <button
          className="text-red-500 font-bold hover:opacity-60 transition"
          onClick={() => navigate("/signin")}
        >
          Đăng nhập ngay
        </button>
      </div>
    </div>
  );
};

export default Login;
