import { Link, Outlet } from "react-router-dom";
import {
  Navbar,
  // MobileNav,
  Button,
} from "@material-tailwind/react";

import logo from "../../assets/logo/logo-apple-black.png";
import search from "../../assets/icon/search.png";
import cart from "../../assets/icon/shopping-cart.png";

const Nav = () => {
  return (
    <>
      <div className="flex justify-center max-w-screen h-[50px] drop-shadow-sm bg-main shadow-lg self-center">
        <Navbar className="w-[1280px] flex justify-between h-[30px] self-center bg-inherit text-black border-none">
          <div className="flex justify-between text-sm w-full drop-shadow-sm self-center">
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
              <Button className="w-4 h-4 self-center">
                <img src={search} alt="icon-search" />
              </Button>
            </div>
            <div>
              <Button className="w-4 h-4 self-center">
                <img src={cart} alt="icon-cart" />
              </Button>
            </div>
          </div>
        </Navbar>
        <Outlet />
      </div>
    </>
  );
};

export default Nav;
