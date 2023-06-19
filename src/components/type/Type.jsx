import React from "react";
import { NavLink } from "react-router-dom";
import img from "assets/img/ip-14-series.png";
const Type = ({ type }) => {
  const typeRender = type;
  const Capitalize = (str) => {
    return str.replace(/\b\w+\b/g, function (word) {
      if (word.charAt(0) === word.charAt(0).toUpperCase()) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    }
  return (
    <div className="flex gap-[60px] mt-12">
      {typeRender.map((item) => {
        return (
          <NavLink
            className="h-32 grid justify-items-center group hover:translate-y-[-4px] transition-transform  duration-500"
            to="/iphone" key={item.url}
          >
            <div className="bg-white w-20 h-20 rounded-full group-hover:bg-red-500 transition-colors">
              <img src={img} className="h-20 w-20 object-cover" />
            </div>
            <p className="group-hover:text-red-500">{Capitalize(item.title)}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Type;
