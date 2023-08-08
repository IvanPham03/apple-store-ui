import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Navbar,
  // MobileNav,
  Button,
} from "@material-tailwind/react";

import logo from "assets/logo/logo-apple-black.png";
import search from "assets/icon/search.png";
import cart from "assets/icon/cart.png";
import user from "assets/icon/user.png";
import Login from './login'


const Nav = () => {
  const [stickyClass, setStickyClass] = useState('relative');
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };


  return (
    <>
      <div className={`flex justify-center w-screen h-[50px] drop-shadow-sm bg-main shadow-lg self-center ${stickyClass} transition-transform`}>
        <Navbar className="w-[1280px] flex justify-between h-[30px] self-center bg-inherit text-black border-none px-0">
          <div className="flex justify-between text-sm w-[1280px]  drop-shadow-sm self-center">
            <div>
              <Link to="/" className="flex items-center">
                <img src={logo} alt={logo} className="object-fill h-5" />
              </Link>
            </div>
            <div>
              <Link to="/iphone" className="flex items-center">
                Iphone
              </Link>
            </div>
            <div>
              <Link to="/macbook" className="flex items-center">
                Macbook
              </Link>
            </div>
            <div>
              <Link to="/watch" className="flex items-center">
                Watch
              </Link>
            </div>
            <div>
              <Link to="/airpods" className="flex items-center">
                Airpods
              </Link>
            </div>
            <div>
              <Link to="/sound" className="flex items-center">
                Âm thanh
              </Link>
            </div>
            <div>
              <Link to="/accessories" className="flex items-center">
                Phụ kiện
              </Link>
            </div>
            <div>
              <Link to="/news" className="flex items-center">
                Tin tức
              </Link>
            </div>
            <div>
              <Link to="/support" className="flex items-center">
                Hỗ trợ
              </Link>
            </div>
            <div>
              <Button className="w-8 h-6 self-center p-0 bg-transparent flex justify-center" >
                <img src={search} alt="icon-search" className="object-fit h-4" />
              </Button>
            </div>
            <div>
              <Button className="w-8 h-6 self-center p-0 bg-transparent flex justify-center">
                <img src={cart} alt="icon-cart" className="h-4 object-fit center" />
              </Button>
            </div>
            <div>
              <Login />
            </div>
          </div>
        </Navbar>
        <Outlet />
      </div>
    </>
  );
};

export default Nav;
