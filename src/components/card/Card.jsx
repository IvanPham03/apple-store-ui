import { Link, useNavigate} from "react-router-dom";
import img from "assets/img/ip-14-series.png";
import star from "assets/icon/star.png";
import heart from "assets/icon/heart.png";

const Card = props => {
  const iphone = props.iphone;
  console.log(iphone.price);
  const isSwiping = props.isSwiping;
  const price = iphone.price && iphone.price.toLocaleString();
  const priceDiscounted = (iphone.price - iphone.price * iphone.stock/100).toLocaleString()
  let navigate = useNavigate(); 
  const handleClick = () => {
    if (!isSwiping) {
      // lưu ý phải dùng / trước detail để bắt từ root, còn nếu không có / thì nó sẽ nối tiếp url hiện tại
    navigate(`/details/${iphone.slug}`)
    }
  }
  return (
    <div
      className="block max-w-[250px] xl:h-[380px] rounded-[8px] bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.25)] border-[.1px] border-slate-200 group hover:cursor-pointer" onClick={handleClick}
    >
      {/* label discount */}
      {iphone.stock > 0
        ? <p className="bg-red-500 text-white inline-block py-1 px-4 rounded-tl-[7px] rounded-br-[7px]">
            {iphone.stock}%
          </p>
        : <p className="block h-7" />}
      <div className="grid justify-items-center items-center h-[200px] my-2">
        <img
          src={img}
          className="object-cover h-[200px] group-hover:scale-125 transition" alt="img"
        />
      </div>
      <div className="mx-4">
        <p className="font-bold group-hover:text-red-500 transition">
          {iphone.name} {iphone.storage}
        </p>
        <div className="flex justify-between my-4">
          <span className="text-red-500 font-bold">
            {" "}{priceDiscounted}đ
          </span>
          {iphone.stock > 0
            ? <span className="text-gray-500 line-through font-bold text-xs flex items-center ">
                {price}đ
              </span>
            : ""}
        </div>
        <div className="flex justify-between my-4">
          <span className="flex">
            <img src={star} className="h-5 w-5 object-contain" />
            <img src={star} className="h-5  w-5 object-contain" />
            <img src={star} className="h-5 w-5 object-contain" />
            <img src={star} className="h-5 w-5 object-contain" />
            <img src={star} className="h-5 w-5 object-contain" />
          </span>
          <span className="flex gap-1 text-sm">
            <span className="xl:block md:hidden">Yêu thích</span>
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
