import { useNavigate } from "react-router-dom";
import img from "assets/img/ip-14-series.png";
import star from "assets/icon/star.png";
import heart from "assets/icon/heart.png";


const Card = (props) => {
  const iphone = props.iphone;
  const isSwiping =props.isSwiping;
  const price = iphone.price && iphone.price.toLocaleString();
  const priceFinal = (iphone.price - iphone.price*iphone.discount/100).toLocaleString();
  let navigate = useNavigate(); 
  const handleClick = () => {
    if (!isSwiping) {
    navigate(`/iphone/${iphone.model}`);
    }
  }
  return (
    <div className="max-w-[250px] xl:h-[380px] rounded-[8px] bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.25)] border-[.1px] border-slate-200 group hover:cursor-pointer" onClick={handleClick}>
    {/* label discount */}
    <p className="bg-red-500 text-white inline-block py-1 px-4 rounded-tl-[7px] rounded-br-[7px]">
      {iphone.discount}%
    </p>
    <div className="grid justify-items-center items-center h-[200px] my-2">
      <img src={img} className="object-cover h-[200px] group-hover:scale-125 transition" />
    </div>
    <div className="mx-4">
      <p className="font-bold group-hover:text-red-500 transition">
        {iphone.name}
      </p>
      <div className="flex justify-between my-4">
        <span className="text-red-500 font-bold"> {priceFinal}đ</span>
        <span className="text-gray-500 line-through font-bold text-xs flex items-center ">
         {price}đ
        </span>
      </div>
      <div className="flex justify-between my-4">
        <span className="flex">
          <img src={star} className="h-5 w-5 object-contain" />
          <img src={star} className="h-5 w-5 object-contain" />
          <img src={star} className="h-5 w-5 object-contain" />
          <img src={star} className="h-5 w-5 object-contain" />
          <img src={star} className="h-5 w-5 object-contain" />
        </span>
        <span className="flex gap-1">
          <span>Yêu thích</span>
          <span>
            <img src={heart} className="h-5 w-5 object-contain" />
          </span>
        </span>
      </div>
    </div>
    </div>
  );
};

export default Card;
