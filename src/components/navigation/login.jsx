import React, { useEffect, useState } from "react";
import userIcon from "assets/icon/user.png";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { UserAuth } from "auth/AuthContext";
import AxiosInstance from "../../api/axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import axios from "axios";

// conver characert to FirstUpper case
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const Login = () => {
  const [cookies, setCookies] = useCookies(["access-token", "refresh-token"]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [user, setUser] = useState(null);
  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  const navigate = useNavigate();
  const handleNavLogin = () => {
    navigate("/signin");
    setIsButtonVisible(false);
  };
  const handleLogOut = async () => {
    if (cookies["refresh-token"] && cookies["access-token"]) {
      try {
        const res = await AxiosInstance.post("/auth/logout", null, {
          withCredentials: true,
        });
        alert(res.data);
        setIsButtonVisible(false);
        setUser(undefined);
        navigate("/");
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
  };
  useEffect(() => {
    if (cookies["access-token"]) {
      (async () => {
        try {
          const res = await AxiosInstance.get("/auth/user", {
            withCredentials: true,
          });
          setUser(res.data);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  return (
    <div
      className="w-8 h-9 relative mx-0 my-auto flex hover:opacity-60 hover:cursor-pointer"
      onClick={toggleButtonVisibility}
    >
      <button className="h-6 w-8 self-center p-0 bg-transparent">
        <FontAwesomeIcon
          icon={faUser}
          className="h-5 w-5"
          style={{ color: "black" }}
        />
      </button>
      <div className="px-4 absolute top-8 right-5 text-right bg-main rounded drop-shadow-lg">
        {isButtonVisible && (
          <>
            {user ? (
              <div>
                <button className="flex gap-2 my-2 items-center w-[100px]">
                  <FontAwesomeIcon icon={faGear} />{" "}
                  <p>{capitalizeFirstLetter(user.name)}</p>
                </button>
                <button
                  className="flex gap-2 my-2 items-center w-[100px]"
                  onClick={handleLogOut}
                >
                  <FontAwesomeIcon icon={faRightToBracket} /> <p>Đăng xuất</p>
                </button>
              </div>
            ) : (
              <button
                className="flex gap-2 my-2 items-center w-[100px]"
                onClick={handleNavLogin}
              >
                <FontAwesomeIcon icon={faRightToBracket} /> <p>Đăng nhập</p>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
