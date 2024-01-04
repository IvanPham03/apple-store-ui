import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import "./custom.css";
const Cards = ({data, root}) => {
  return (
    <>
      <div
        id="content"
        className="max-w-[1280px] grid gap-4 my-6 xl:grid-cols-5"
      >
        {data &&
          data.map((iphone) => {
            return <Card iphone={iphone} key={iphone._id} root={root}/>;
          })}
      </div>
    </>
  );
};

export default Cards;
