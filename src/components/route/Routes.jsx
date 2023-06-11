import {
  Home,
  Iphone,
  Macbook,
  Ipad,
  Watch,
  Airpods,
  Sound,
  Accessories,
  Support,
  News,
  Errors,
} from "../../pages";


const routes = [
  {
    path: "/",
    breadcrumb: "Trang chủ",
    component: <Home />,
  },
  {
    path: "/iphone",
    breadcrumb: "Iphone",
    component: <Iphone />,
  },
  {
    path: "/macbook",
    breadcrumb: "Macbook",
    component: <Macbook />,
  },
  {
    path: "/ipad",
    breadcrumb: "Ipad",
    component: <Ipad />,
  },
  {
    path: "/watch",
    breadcrumb: "Watch",
    component: <Watch />,
  },
  {
    path: "/airpods",
    breadcrumb: "Airpods",
    component: <Airpods />,
  },
  {
    path: "/sound",
    breadcrumb: "Âm thanh",
    component: <Sound />,
  },
  {
    path: "/accessories",
    breadcrumb: "Phụ kiện",
    component: <Accessories />,
  },
  {
    path: "/support",
    breadcrumb: "Hỗ trợ",
    component: <Support />,
  },
  {
    path: "/news",
    breadcrumb: "Tin tức",
    component: <News />,
  },
  {
    path: "*",
    breadcrumb: "",
    component: <Errors />,
  },
];

export default routes
