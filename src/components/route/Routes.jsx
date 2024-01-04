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
  Errors
} from "pages";

import { DefaultLayout, AuthLayout } from "components/layout";
import Detail from "components/detail/Detail";
import { SignIn, SignUp } from "pages/auth";

const routes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout
  },
  {
    path: "/iphone",
    component: Iphone,
    layout: DefaultLayout
  },
  {
    path: "/iphone/detail/",
    component: Detail,
    layout: DefaultLayout
  },

  // {
  //   path: "/macbook",
  //   component: Macbook,
  //   layout: DefaultLayout
  // },
  // {
  //   path: "/ipad",
  //   component: Ipad,
  //   layout: DefaultLayout
  // },
  // {
  //   path: "/watch",
  //   component: Watch,
  //   layout: DefaultLayout
  // },
  // {
  //   path: "/airpods",
  //   component: Airpods,
  //   layout: DefaultLayout
  // },
  // {
  //   path: "/sound",
  //   component: Sound,
  //   layout: DefaultLayout
  // },
  // {
  //   path: "/accessories",
  //   component: Accessories,
  //   layout: DefaultLayout
  // },
  // {
  //   path: "/support",
  //   component: Support,
  //   layout: DefaultLayout
  // },
  // {
  //   path: "/news",
  //   component: News,
  //   layout: DefaultLayout
  // },
  // {
  //   path: "/signin",
  //   component: SignIn,
  //   layout: AuthLayout
  // },
  // {
  //   path: "/signup",
  //   component: SignUp,
  //   layout: AuthLayout
  // },
  {
    path: "details/:slug",
    component: Detail,
    layout: DefaultLayout
  },
  {
    path: "*",
    component: Errors,
    layout: DefaultLayout
  }
];

export default routes;
