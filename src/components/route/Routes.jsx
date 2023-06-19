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
} from "pages";

import { DefaultLayout } from "components/layout";
import Detail from "components/detail/Detail";

const routes = [
  {
    path: "/",
    breadcrumb: "Trang chủ",
    component: Home,
    layout: DefaultLayout
  },
  {
    path: "/iphone",
    breadcrumb: "Iphone",
    component: Iphone,
    layout: DefaultLayout
  },
  {
    path: "/iphone/:id",
    breadcrumb: "Iphone",
    component: Detail,
    layout: DefaultLayout
  },
  {
    path: "/macbook",
    breadcrumb: "Macbook",
    component: Macbook,
    layout: DefaultLayout
  },
  {
    path: "/ipad",
    breadcrumb: "Ipad",
    component: Ipad,
    layout: DefaultLayout
  },
  {
    path: "/watch",
    breadcrumb: "Watch",
    component: Watch,
    layout: DefaultLayout
  },
  {
    path: "/airpods",
    breadcrumb: "Airpods",
    component: Airpods,
    layout: DefaultLayout
  },
  {
    path: "/sound",
    breadcrumb: "Âm thanh",
    component: Sound,
    layout: DefaultLayout
  },
  {
    path: "/accessories",
    breadcrumb: "Phụ kiện",
    component: Accessories,
    layout: DefaultLayout
  },
  {
    path: "/support",
    breadcrumb: "Hỗ trợ",
    component: Support,
    layout: DefaultLayout
  },
  {
    path: "/news",
    breadcrumb: "Tin tức",
    component: News,
    layout: DefaultLayout
  },
  {
    path: "/",
    breadcrumb: "Tin tức",
    component: News,
    layout: DefaultLayout
  },
  {
    path: "*",
    breadcrumb: "",
    component: Errors,
    layout: DefaultLayout
  },
];

export default routes
