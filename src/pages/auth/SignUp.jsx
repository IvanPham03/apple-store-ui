import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { isValidEmail, isValidPhone } from "./function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/logo/logo-apple-black.png";
import google from "assets/icon/google.png";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);
  const [rePassword, setRePassword] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const handleOnCheck = () => {
    setIsChecked(!isChecked);
  };
  const handleShowPassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleShowRePassword = e => {
    e.preventDefault();
    setShowRePassword(!showRePassword);
  };
  const checkValid = () => {
    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("password", password);
    console.log("repassword", rePassword);

    if (name === "") {
      return false;
    } else if (email === "" || !isValidEmail(email)) {
      return false;
    } else if (phone === "" || !isValidPhone(phone)) {
      return false;
    } else if (password === "" || password.length < 8) {
      return false;
    } else if (rePassword === "" || password !== rePassword) {
      return false;
    } else return true;
  };
  const handleSubmit = async () => {
    const isValid = checkValid();
    if (isValid) {
      try {
        const request = await axios.post(
          process.env.REACT_APP_API_ENDPOINT + "/auth/signup",
          {
            name: name,
            email: email,
            phone: phone,
            password: password
          }
        );
        console.log(request);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("isvalid");
    }
  };

  return (
    <div className="w-[1280px] h-[1200px] grid place-items-center content-start my-10 ">
      <div className="flex flex-col items-center">
        <span className="">
          <img src={logo} alt="logo" className="h-32" />
        </span>
        <span className="text-[32px] font-medium my-5">Đăng ký tài khoản</span>
      </div>
      <form autoComplete="new-password">
        <div className="w-[600px] my-2">
          <input
            type="text"
            name='username'
            autoComplete="new-password"
            placeholder="Vui lòng nhập họ và tên"
            className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Vui lòng nhập số điện thoại (bắt buộc)"
            className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
            name="phone"
            autoComplete="new-password"
            onChange={e => {
              setPhone(e.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            autoComplete="new-password"
            placeholder="Vui lòng nhập số điện email (bắt buộc)"
            className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <div className="w-[600px] my-2 relative flex items-center">
            <input
              type={showPassword ? "password" : "text"}
              name="newpassword"
              placeholder="VNhập mật khẩu"
              autoComplete="new-password"
              className="pl-4 py-2 bg-main w-full rounded-lg border"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="absolute ml-[93%]"
              onClick={e => handleShowPassword(e)}
            >
              {showPassword
                ? <FontAwesomeIcon icon={faEye} />
                : <FontAwesomeIcon icon={faEyeSlash} />}
            </button>
          </div>
          <div className="w-[600px] my-2 relative flex items-center">
            <input
              type={showRePassword ? "password" : "text"}
              name="renewpassword"
              autoComplete="new-password"
              placeholder="Nhập lại mật khẩu"
              className="pl-4 py-2 bg-main w-full rounded-lg border"
              onChange={e => {
                setRePassword(e.target.value);
              }}
            />
            <button
              className="absolute ml-[93%]"
              onClick={e => handleShowRePassword(e)}
            >
              {showRePassword
                ? <FontAwesomeIcon icon={faEye} />
                : <FontAwesomeIcon icon={faEyeSlash} />}
            </button>
          </div>
          <p className="text-xs pl-4 italic">
            Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường 1 chữ in hoa,
            1 chữ số, 1 ký tự đặc biệt
          </p>
          <div className="py-2">
            <input
              type="checkbox"
              id="acceptPrivacy"
              className="hover:cursor-pointer"
              checked={isChecked}
              onChange={handleOnCheck}
            />
            <label
              htmlFor="acceptPrivacy"
              className="hover:cursor-pointer pl-2 text-[#9CA3AF]"
            >
              Tôi đồng ý với các điều khoản bảo mật cá nhân
            </label>
          </div>
        </div>
      </form>
      {/* <div className="my-4">
        <div className="w-[300px] h-[100px] bg-red-500">mã captcha</div>
      </div> */}
      <button
        className="border-red-500 border text-white bg-red-500 w-[600px] px-4 py-2 rounded-3xl my-4 hover:bg-red-200 hover:text-black transition drop-shadow-md"
        onClick={handleSubmit}
      >
        Đăng ký
      </button>
      <div className="flex items-center w-[600px]">
        {/* flex 1 = grow schrink basis = 1 1 0 */}
        <div className="flex-1 p-2">
          <div className="h-px bg-gray-300" />
        </div>
        <p>hoặc</p>
        <div className="flex-1 p-2">
          <div className="h-px bg-gray-300 " />
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

export default SignUp;
