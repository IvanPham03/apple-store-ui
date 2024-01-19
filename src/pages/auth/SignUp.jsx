import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { isValidEmail } from "./function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/logo/logo-apple-black.png";
import google from "assets/icon/google.png";
import AxiosInstance from "../../api/axiosInstance";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);
  const [rePassword, setRePassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(null);
  const handleOnCheck = () => {
    setIsChecked(!isChecked);
  };
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleShowRePassword = (e) => {
    e.preventDefault();
    setShowRePassword(!showRePassword);
  };
  const checkValid = () => {

    if (name === "") {
      console.log("name = " + name);
      return [undefined, "Họ và tên không được trống"];
    } else if (email === "") {
      return [undefined, "Email không được trống"];
    } else if (!isValidEmail(email)) {
      return [undefined, "Email không hợp lệ"];
    } else if (password === "") {
      return [undefined, "Mật khẩu không được trống"];
    } else if (password.length < 8) {
      return [
        undefined,
        "Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường 1 chữ in hoa, 1 chữ số, 1 ký tự đặc biệt",
      ];
    } else if (rePassword === "") {
      return [undefined, "Mật khẩu xác nhận không được trống"];
    } else if (password !== rePassword) {
      return [undefined, "Mật không trùng khớp, vui lòng kiểm tra lại"];
    } else if (!isChecked) {
      return [undefined, "Vui lòng đồng ý các điều khoản của chúng tôi"];
    } else return [true, undefined];
  };
  const handleSubmit = async () => {
    const [res, err] = checkValid();
    if (res !== undefined) {
      try {
        const request = await AxiosInstance.post("/auth/signup", {
          name: name,
          email: email,
          password: password,
        });
        if(request.status === 200){
          alert(request.data)
          navigate('/signin')
        }
      } catch (error) {
        // lỗi email exist
        if (error.response && error.response.status === 409) {
          alert(error.response.data.message);
        } else {
          console.log("error: " + error);
        }
      }
    } else {
      setError(err);
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
            name="username"
            autoComplete="new-password"
            placeholder="Họ và tên"
            className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
            onFocus={() => setError(null)}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            autoComplete="new-password"
            placeholder="Địa chỉ email"
            className="pl-4 py-2 bg-main w-full rounded-lg my-2 border"
            onFocus={() => setError(null)}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="w-[600px] my-2 relative flex items-center">
            <input
              type={showPassword ? "password" : "text"}
              name="newpassword"
              placeholder="Nhập mật khẩu"
              autoComplete="new-password"
              className="pl-4 py-2 bg-main w-full rounded-lg border"
              onFocus={() => setError(null)}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="absolute ml-[93%]"
              onClick={(e) => handleShowPassword(e)}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>
          <div className="w-[600px] my-2 relative flex items-center">
            <input
              type={showRePassword ? "password" : "text"}
              name="renewpassword"
              autoComplete="new-password"
              placeholder="Nhập lại mật khẩu"
              onFocus={() => setError(null)}
              className="pl-4 py-2 bg-main w-full rounded-lg border"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
            <button
              className="absolute ml-[93%]"
              onClick={(e) => handleShowRePassword(e)}
            >
              {showRePassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>
          {error && <p className="text-xs pl-4 italic">{error}</p>}
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
