import React, { useEffect, useState } from "react";
import userIcon from "assets/icon/user.png";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { UserAuth } from "auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faGear } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import axios from "axios";


// conver characert to FirstUpper case
const capitalizeFirstLetter = (str) => {
  
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const Login = () => {
  const [cookies, removeCookie] = useCookies(['access-token','refresh-token'])
  const {user, setUser} = UserAuth()
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [dataUser, setDataUser] = useState(user)
  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  const navigate = useNavigate();
  const handleNavLogin = () => {
    navigate("/signin");
    setIsButtonVisible(false)
  };
  const handleLogOut = async() =>{
    if(cookies["refresh-token"] !== "" && cookies["access-token"] !== "" ){
      try {
        const res = await axios.post(process.env.REACT_APP_API_ENDPOINT + "/auth/logout", null,{
          headers:{
            authorization: `Bearer ${cookies["refresh-token"]}`
          }
        })
        // remove cookie
        removeCookie('refresh-token');
        removeCookie('access-token');
        navigate('/')
        setIsButtonVisible(false)
        setDataUser(undefined)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
 
  return (
    <div className="relative ">
      <Button
        className="w-8 h-6 self-center p-0 bg-transparent flex justify-center items-center"
        onClick={toggleButtonVisibility}
      >
        <img src={userIcon} alt="icon-user" className="h-4 object-fit" />
      </Button>
      <div className="px-4 absolute right-5 text-right bg-main rounded drop-shadow-lg">
        {isButtonVisible && (
          <>
            {dataUser ? (
              <div>
                <button className="flex gap-2 my-2 items-center w-[100px]">
                  <FontAwesomeIcon icon={faGear} /> <p>{capitalizeFirstLetter(dataUser.name)}</p>
                </button>
                <button className="flex gap-2 my-2 items-center w-[100px]" onClick={handleLogOut}>
                  <FontAwesomeIcon icon={faRightToBracket} /> <p>Đăng xuất</p>
                </button>
              </div>
            ) : (
              <button className="flex gap-2 my-2 items-center w-[100px]" onClick={handleNavLogin}>
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
