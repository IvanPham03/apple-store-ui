import React from 'react'
import imgNews from "assets/img/news.jpg";

const news = () => {
  return (
    <div className="xl:w-[1250px] my-[20px]">
        {/* row have 3 items */}
        <p className="text-left my-4 text-xl font-medium text-red-500">
          Tin tức
        </p>
        <div className="flex justify-start gap-[50px] flex-wrap my-8">
          <a href='#'>
            <div className="flex gap-10 border-b-[1px] border-black h-[150px] group hover:cursor-pointer drop-shadow-lg">
                <img
                  src={imgNews}
                  className="w-[150px] h-[100px] rounded-[10px] object-cover group-hover:scale-110 transition"
                />
              <span className="font-medium group-hover:text-red-500">Khi nào iOS 16.5 ra mắt?</span>
            </div>
          </a>
        </div>
      </div>
  )
}

export default news