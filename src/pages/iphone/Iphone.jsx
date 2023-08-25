import React, { Fragment, useEffect, useState } from "react";
import { Cards, Carousel } from "components/card";
import Questions from "components/question/Question";
import Type from "components/type/Type";
import News from "components/news/News";
import img from "assets/img/ip-14-series.png";
import iphone from "assets/img/progroup-mb-pro-m2-230612102526.webp";
import { useDispatch, useSelector } from "react-redux";
import actions from "redux/actions";
import { productsState$ } from "redux/selectors";
import Filter from "components/card/Filter";
import axios from "axios";

const Iphone = () => {
  const dispatch = useDispatch();
  const iphonesState = useSelector(productsState$); // list iphone default from redux store
  const [selectFilterScreenSize, setSelectFilterScreenSize] = useState([]);
  const [selectFilterPrice, setSelectFilterPrice] = useState([]);
  const [selectFilterStorage, setSelectFilterStorage] = useState([]);
  const [selectFilterSort, setSelectFilterSort] = useState([]);
  const [fetchAllIphones, setFetchAllIphones] = useState([]);
  const [query, setQuery] = useState({
    category: "iphone"
  });
  // data to show carousel - 10 item
  fetchAllIphones &&
    fetchAllIphones.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    ); // sort new first
  const carouselData = fetchAllIphones.slice(0, 10); // slice 10 product

  //
  const typeIphone = [
    { title: "iPhone 11 series", img: { img }, url: "iphone-11" },
    { title: "iPhone 12 series", img: { img }, url: "iphone-12" },
    { title: "iPhone 13 series", img: { img }, url: "iphone-13" },
    { title: "iPhone 14 series", img: { img }, url: "iphone-14" }
  ];

  // handle filter
  const handleFilterScreenSize = selectFilter => {
    setSelectFilterScreenSize(selectFilter);
  };
  const handleFilterPrice = selectFilter => {
    setSelectFilterPrice(selectFilter);
  };
  const handleFilterStorage = selectFilter => {
    setSelectFilterStorage(selectFilter);
  };
  const handleFilterSort = selectFilter => {
    setSelectFilterSort(selectFilter);
  };
  // console.log("select size", selectFilterScreenSize);
  // console.log("select price", selectFilterPrice);
  // console.log("select storage", selectFilterStorage);
  // option select screen size
  const screenSize = [4.7, 5.8, 6.1, 6.5, 6.7];
  const price = ["0-10", "10-20", "20-30"];
  const storage = ["64GB", "128GB", "256GB", "512GB", "1TB"];
  const sort = ["Giá tăng dần", "Giá giảm dần"];

  //
  useEffect(
    () => {
      dispatch(actions.product.fetchProducts.fetchProductsRequest(query));
    },
    [dispatch, query]
  );

  //
  useEffect(
    () => {
      setQuery({
        category: "iphone",
        sort: selectFilterSort,
        screenSize: selectFilterScreenSize,
        storage: selectFilterStorage,
        price: selectFilterPrice
      });
    },
    [
      selectFilterScreenSize,
      selectFilterPrice,
      selectFilterStorage,
      selectFilterSort
    ]
  );

  //
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + "/product", {
        params: { category: "iphone" }
      })
      .then(res => setFetchAllIphones(res.data));
  }, []);
  return (
    <Fragment>
      <div className="flex gap-8 my-6 w-[1280px]">
        <div>
          {" "}<img src={iphone} alt="iphone-intro" />
        </div>
        <div>
          {" "}<img src={iphone} alt="iphone-intro" />
        </div>
      </div>
      <div className="w-screen flex justify-center shadow-[0_-1px_4px_0px_rgba(0,0,0,0.15)] bg-gradient-to-b from-[#F4F9F9] to-white">
        {/* series to nav */}
        <div className="w-[1280px]">
          <div className="grid justify-items-center content-start">
            <Type type={typeIphone} />
            <Carousel iphones={carouselData} root={''} />
            <div className="w-full">
              <p className="text-xl font-medium py-2">
                Chọn sản phẩm theo tiêu chí
              </p>
              {/* filter */}
              <div className="flex gap-4">
                {/* using callback to child data select to parent and filter belong to selection */}
                <Filter
                  options={screenSize}
                  type="Màn hình"
                  handleFilter={handleFilterScreenSize}
                />
                <Filter
                  options={storage}
                  type="Bộ nhớ"
                  handleFilter={handleFilterStorage}
                />
                <Filter
                  options={price}
                  type="Giá"
                  handleFilter={handleFilterPrice}
                />
                <Filter
                  options={sort}
                  type="Xếp theo"
                  handleFilter={handleFilterSort}
                />
              </div>
            </div>
            <Cards data={iphonesState} root={'iphone'}/>
          </div>
        </div>
      </div>
      <News />
      <Questions />
    </Fragment>
  );
};

export default Iphone;
