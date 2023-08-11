import React, { useEffect, useState } from "react";
import userIcon from "assets/icon/user.png";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { UserAuth } from "auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faGear } from "@fortawesome/free-solid-svg-icons";


// conver characert to FirstUpper case
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const Login = () => {
  const {user} = UserAuth()
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  const navigate = useNavigate();
  const handleNavLogin = () => {
    navigate("/signin");
    setIsButtonVisible(false)
  };
  const handleSignOut = () =>{

  }
 
  return (
    <div className="relative ">
      <Button
        className="w-8 h-6 self-center p-0 bg-transparent flex justify-center"
        onClick={toggleButtonVisibility}
      >
        <img src={userIcon} alt="icon-user" className="h-4 object-fit" />
      </Button>
      <div className="px-4 absolute right-5 text-right bg-main rounded drop-shadow-lg">
        {isButtonVisible && (
          <>
            {user !== null ? (
              <div>
                <button className="flex gap-2 my-2 items-center w-[100px]">
                  <FontAwesomeIcon icon={faGear} /> <p>{capitalizeFirstLetter(user.name)}</p>
                </button>
                <button className="flex gap-2 my-2 items-center w-[100px]" onClick={handleSignOut}>
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
