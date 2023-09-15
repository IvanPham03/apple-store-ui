import React from "react";
import phone from "assets/icon/phone.png";
import facebook from "assets/icon/facebook.png";
import home from "assets/icon/home.png";
import instagram from "assets/icon/instagram.png";
import tiktok from "assets/icon/tiktok.png";
import youtube from "assets/icon/youtube.png";
import truck from "assets/icon/truck.png";
import headset from "assets/icon/headset.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <section className="bg-main w-full grid place-content-center">
      <div className="w-screen h-96 flex 2xl:w-[1280px] xl:w-[1200px] my-8">
        <div className="w-1/4">
          <div className="font-bold my-4">Hỗ trợ khách hàng</div>
          <div className="flex gap-4 my-4">
            <img src={truck} alt="icon-truck" className="h-6 w-6" />
            <NavLink href="#" className="hover:text-red-500 hover:cursor-pointer">Kiểm tra đơn hàng</NavLink>
          </div>
          <div className="flex gap-4 my-4">
            <img src={headset} alt="icon-headset" className="h-6 w-6" />
            <NavLink href="#"  className="hover:text-red-500 hover:cursor-pointer">Dịch vụ sửa chữa</NavLink>
          </div>
          <div className="flex gap-4 my-4">
            <img src={home} alt="icon-home" className="h-6 w-6" />
            <NavLink href="#"  className="hover:text-red-500 hover:cursor-pointer">Hệ thống cửa hàng</NavLink>
          </div>
        </div>
        <div className="w-1/4">
          <div>
            <div className="font-bold my-4">Liên hệ & mua hàng</div>
            <div className="my-2">Chăm sóc khách hàng:</div>
            <NavLink href="mailto:dangtruongphamvn@gmail.com" className="text-blue-500 hover:text-red-500 hover:cursor-pointer">
              dangtruongphamvn@gmail.com
            </NavLink>
            <div className="my-2">Báo giá sản phầm:</div>
            <NavLink href="mailto:dangtruongphamvn@gmail.com" className="text-blue-500 hover:text-red-500 hover:cursor-pointer">
              dangtruongphamvn@gmail.com
            </NavLink>
          </div>
          <div className="my-2">
            <div className="font-bold my-4">Tổng đài hỗ trợ</div>
           
            <div className="flex gap-4 my-2 group">
              <img src={phone} alt="icon-phone" className="h-6 w-6 group-hover:scale-110 transition" />
              <p className="group-hover:text-red-500 group-hover:scale-110 transition" >0999999999</p>
            </div>
            <div className="flex gap-4 my-2 group">
              <img src={phone} alt="icon-phone" className="h-6 w-6 group-hover:scale-110 transition" />
              <p className="group-hover:text-red-500 group-hover:scale-110 transition" >0999999999</p>
            </div>
            <div className="flex gap-4 my-2 group">
              <img src={phone} alt="icon-phone" className="h-6 w-6 group-hover:scale-110 transition" />
              <p className="group-hover:text-red-500 group-hover:scale-110 transition" >0999999999</p>
            </div>
            <div className="flex gap-4 my-2 group">
              <img src={phone} alt="icon-phone" className="h-6 w-6 group-hover:scale-110 transition" />
              <p className="group-hover:text-red-500 group-hover:scale-110 transition" >0999999999</p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="font-bold my-4">Chính sách bán hàng</div>
          <NavLink href="#" className="block pb-2 hover:text-red-500 hover:cursor-pointer">Chính sách vận chuyển, thanh toán</NavLink>
          <NavLink href="#" className="block pb-2 hover:text-red-500 hover:cursor-pointer">Chính sách bảo mật thông tin</NavLink>
          <NavLink href="#" className="block pb-2 hover:text-red-500 hover:cursor-pointer">Chính sách & quy định chung</NavLink>
          <NavLink href="#" className="block pb-2 hover:text-red-500 hover:cursor-pointer">Chính sách bảo hình, đổi, trả hàng</NavLink>
          <NavLink href="#" className="block pb-2 hover:text-red-500 hover:cursor-pointer">Khách hàng thân thiết</NavLink>
        </div>
        <div className="w-1/4">
          <div className="font-bold my-4">Liên hệ với Apple Store</div>
          <div className="flex gap-4">
            <NavLink href="#"><img src={youtube} alt="icon-youtube" className="w-8 hover:cursor-pointer hover:opacity-50 hover:scale-110 transition"/></NavLink>
            <NavLink href="#"><img src={tiktok} alt="icon-tiktok" className="w-8 hover:cursor-pointer hover:opacity-50 hover:scale-110 transition"/></NavLink>
            <NavLink href="#"><img src={instagram} alt="icon-inst" className="w-8 hover:cursor-pointer hover:opacity-50 hover:scale-110 transition"/></NavLink>
            <NavLink href="#"><img src={facebook} alt="icon-facebook" className="w-8 hover:cursor-pointer hover:opacity-50 hover:scale-110 transition"/></NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
