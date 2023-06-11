import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../../assets/img/ip-14-series.png";
const Type = () => {
  return (
    <div className="flex gap-[60px] my-6">
    <NavLink className="h-32 grid justify-items-center group hover:translate-y-[-4px] transition-transform  duration-500" to='/iphone'>
      <div className="bg-white w-20 h-20 rounded-full group-hover:bg-red-500 transition-colors">
        <img src={img} className="h-20 w-20 object-cover" />
      </div>
      <p className="group-hover:text-red-500">Iphone 14 series</p>
    </NavLink>
    <NavLink className="h-32 grid justify-items-center group hover:translate-y-[-4px] transition-transform  duration-500">
      <div className="bg-white w-20 h-20 rounded-full group-hover:bg-red-500 transition-colors">
        <img src={img} className="h-20 w-20 object-cover" />
      </div>
      <p className="group-hover:text-red-500">Iphone 14 series</p>
    </NavLink>
    <NavLink className="h-32 grid justify-items-center group hover:translate-y-[-4px] transition-transform  duration-500">
      <div className="bg-white w-20 h-20 rounded-full group-hover:bg-red-500 transition-colors">
        <img src={img} className="h-20 w-20 object-cover" />
      </div>
      <p className="group-hover:text-red-500">Iphone 14 series</p>
    </NavLink>
  </div>
  )
}

export default Type