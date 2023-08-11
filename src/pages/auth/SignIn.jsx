import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "assets/logo/logo-apple-black.png";
import google from "assets/icon/google.png";
import { UserAuth } from "auth/AuthContext";
import axios from "axios";
import { useCookies } from "react-cookie";

// import { Cookie } from "@mui/icons-material";
axios.defaults.withCredentials = true;

// ===============
const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showIsValid, setShowIsValid] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleShowPassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const isValidEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const isValidPhone = phone => {
    return /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
  };
  const handleSubmit = async () => {
    // check email & phone => request
    if (isValidEmail(inputValue)) {
      await axios
        .post(process.env.REACT_APP_API_ENDPOINT + "/auth/signin", {
          email: inputValue,
          password: password
        })
        .then(respone => {
          console.log(respone.data);
        })
        .catch(error => {
          console.error('loi', error);
        });
    } else if (isValidPhone(inputValue)) {
      await axios
        .post(process.env.REACT_APP_API_ENDPOINT + "/auth/signin", {
          phone: inputValue,
          password: password
        })
        .then(respone => {
          console.log(respone.data);
        })
        .catch(error => {
          // Xử lý lỗi ở đây
          console.error('loi', error);
        });
    } else {
      setShowIsValid(true);
      return;
    }
    // const getToken = await Cookie.get('access-token')
    // console.log('token', getToken)
  };
  return (
    <div className="w-[1280px] h-[1200px] grid place-items-center content-start my-10 ">
      <div className="flex flex-col items-center">
        <span className="">
          <img src={logo} alt="logo" className="h-32" />
        </span>
        <span className="text-[32px] font-medium my-5">Đăng nhập</span>
      </div>
      <form>
        <div className="w-[600px] my-2">
          <input
            type="text"
            placeholder="Vui lòng nhập email/số điện thoại"
            className="pl-4 py-2 bg-main w-full rounded-lg border"
            name="data"
            autoComplete="on"
            onChange={e => {
              setInputValue(e.target.value);
            }}
            onFocus={() => {
              setShowIsValid(false);
            }}
          />
        </div>
        <div className="w-[600px] my-2 relative flex items-center">
          <input
            type={showPassword ? "password" : "text"}
            name="password"
            placeholder="Vui lòng nhập mật khẩu"
            className="pl-4 py-2 bg-main w-full rounded-lg border"
            autoComplete="on"
            onChange={e => {
              setPassword(e.target.value);
            }}
            onFocus={() => {
              setShowIsValid(false);
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
      </form>
      {showIsValid &&
        <div className="w-[600px] text-left text-red-500 pl-4 italic">
          Thông tin đăng nhập không chính xác!
        </div>}
      <div className="w-[600px] flex justify-end my-2">
        <button className="text-[#9CA3AF]">Quên mật khẩu?</button>
      </div>
      {/* <div className="my-4">
        <div className="w-[300px] h-[100px] bg-red-500">mã captcha</div>
      </div> */}
      <button
        className="border-red-500 border text-white bg-red-500 w-[600px] px-4 py-2 rounded-3xl my-4 hover:bg-red-200 hover:text-black transition  drop-shadow-md"
        onClick={handleSubmit}
      >
        Đăng nhập
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
        <button
          className="flex items-center gap-3 border rounded-3xl w-full justify-center p-2 hover:bg-gray-100 transition hover:border-red-300 hover:opacity-80 drop-shadow-md"
          onClick={handleGoogleSignIn}
        >
          <img src={google} alt="icon-google" className="h-6 w-6 cover" />
          <span>Đăng nhập bằng Google</span>
        </button>
      </div>
      <div className="w-[600px] flex justify-center gap-1">
        <p>Bạn chưa có tài khoản?</p>
        <button
          className="text-red-500 font-bold hover:opacity-60 transition"
          onClick={() => navigate("/signup")}
        >
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
};

export default Login;
