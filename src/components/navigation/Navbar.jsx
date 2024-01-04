import { Link, Outlet, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  Navbar,
  // MobileNav,
  Button,
} from "@material-tailwind/react";
import logo from "assets/logo/logo-apple-black.png";
import Login from "./login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";
// import { useCookies } from "react-cookie";
// import axios from "axios";

// const fecthUser = async(token) =>{
//   try {
//     const response = await axios.get(process.env.Server+'/auth/user', {
//       headers:{
//         'Authorization': `Bearer ${token}`
//       }
//     })
//     return response.data
//   } catch (error) {
//     console.log('fetch user: ',error)
//   }
// }

const Nav = () => {
  const [stickyClass, setStickyClass] = useState("relative");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const btnSearch = useRef();
  const containerNav = useRef();
  const containerSearch = useRef();
  // const [cookies] = useCookies(['access-token']);
  const [loggedIn, setLoggedIn] = useState(false);
  const [active, setActive] = useState(false);

  // const handleLogin = () => {
  //   setLoggedIn(true);
  // };
  // useEffect(()=>{
  //   if(cookies['access-token']){
  //    (async () => {
  //     try {
  //       const data = await fecthUser(cookies["access-token"])
  //       setUser(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //    })()
  //   }

  // }, [cookies['access-token']])
  const handleClickBtnSearch = () => {
    setActive(!active);
    // containerSearch.current.classList.toggle("active");
    // containerNav.current.classList.toggle("lg:block");
  };

  return (
    <Fragment>
      <div
        className={`flex justify-center w-screen h-[65px] drop-shadow-sm bg-main shadow-lg self-center transition-transform`}
      >
        <Navbar className="2xl:w-[1280px] xl:w-[1200px] bg-main flex justify-between h-2/3 self-center bg-inherit text-black border-none absolute px-0">
          <div className="flex justify-between text-sm xl:w-[1280px] drop-shadow-sm self-center items-center gap-5 w-full">
            <Link to="/" className="flex items-center gap-3 hover:opacity-60">
              <img src={logo} alt={logo} className="object-fill h-6 w-5" />
              <span className="font-bold text-lg lg:block whitespace-nowrap">
                Apple Store
              </span>
            </Link>
            <div
              ref={containerSearch}
              className={`flex justify-between gap-8 lg:order-2 relative rounded-lg bg-transparent ${
                active ? "active" : "inactive"
              }`}
            >
              <div className="h-9 self-center p-0 flex rounded-lg bg-transparent">
                <input
                  type="text"
                  className="w-0 rounded-lg focus:outline-none -mr-10 pl-2 placeholder"
                  placeholder="Bạn cần tìm gì?"
                />
                <Button
                  ref={btnSearch}
                  onClick={handleClickBtnSearch}
                  className="bg-none"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="h-5 w-5"
                    style={{ color: "black" }}
                  />
                </Button>
              </div>

              <Button className="w-8 h-9 self-center p-0 bg-transparent hover:opacity-60">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="h-5 w-5"
                  style={{ color: "black" }}
                />
              </Button>
              <Login />
              <Button
                className="w-8 h-9 self-center p-0 bg-transparent hover:opacity-60 lg:hidden"
                data-collapse-toggle="navbar-sticky"
                type="button"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="h-5 w-5"
                  style={{ color: "black" }}
                />
              </Button>
            </div>
            <div
              className=" h-6 hidden lg:hidden lg:oder-1 absolute lg:static "
              id="navbar-sticky"
              ref={containerNav}
            >
              <div className="left-0 h-[100px] right-0 flex bg-main justify-start fixed -ml-2 lg:ml-0 flex-col lg:bg-inherit lg:flex-row lg:w-auto lg:h-auto lg:gap-8 lg:static lg:justify-center  gap-10 pl-8">
                <Link
                  to="/iphone"
                  className="font-medium text-[32px] lg:text-base hover:opacity-60 flex justify-between mr-3 group h-4"
                >
                  Iphone{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="lg:hidden lg:hover:opacity-0 h-6 w-6 opacity-0 group-hover:opacity-100 duration-150 ease-linear"
                  />
                </Link>
                <Link
                  to="/macbook"
                  className="font-medium text-[32px]  lg:text-base hover:opacity-60 flex justify-between mr-3 group h-4"
                >
                  Macbook{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="lg:hidden lg:hover:opacity-0 h-6 w-6 opacity-0 group-hover:opacity-100 duration-150 ease-linear"
                  />
                </Link>
                <Link
                  to="/watch"
                  className="font-medium text-[32px]  lg:text-base hover:opacity-60 flex justify-between mr-3 group h-4"
                >
                  Watch{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="lg:hidden lg:hover:opacity-0 h-6 w-6 opacity-0 group-hover:opacity-100 duration-150 ease-linear"
                  />
                </Link>
                <Link
                  to="/airpods"
                  className="font-medium text-[32px]  lg:text-base hover:opacity-60 flex justify-between mr-3 group h-4"
                >
                  Airpods{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="lg:hidden lg:hover:opacity-0 h-6 w-6 opacity-0 group-hover:opacity-100 duration-150 ease-linear"
                  />
                </Link>
                <Link
                  to="/sound"
                  className="font-medium text-[32px]  lg:text-base hover:opacity-60 flex justify-between mr-3 group h-4"
                >
                  Âm thanh{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="lg:hidden lg:hover:opacity-0 h-6 w-6 opacity-0 group-hover:opacity-100 duration-150 ease-linear"
                  />
                </Link>
                <Link
                  to="/accessories"
                  className="font-medium text-[32px]  lg:text-base hover:opacity-60 flex justify-between mr-3 group h-4"
                >
                  Phụ kiện{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="lg:hidden lg:hover:opacity-0 h-6 w-6 opacity-0 group-hover:opacity-100 duration-150 ease-linear"
                  />
                </Link>
                <Link
                  to="/news"
                  className="font-medium text-[32px]  lg:text-base hover:opacity-60 flex justify-between mr-3 group h-4"
                >
                  Tin tức{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="lg:hidden lg:hover:opacity-0 h-6 w-6 opacity-0 group-hover:opacity-100 duration-150 ease-linear"
                  />
                </Link>
                <Link
                  to="/support"
                  className="font-medium text-[32px]  lg:text-base hover:opacity-60 flex justify-between mr-3 group h-4"
                >
                  Hỗ trợ{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="lg:hidden lg:hover:opacity-0 h-6 w-6 opacity-0 group-hover:opacity-100 duration-150 ease-linear"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Navbar>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Nav;
