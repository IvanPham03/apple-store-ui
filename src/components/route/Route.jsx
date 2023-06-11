import { Routes, Route } from "react-router-dom";
// import {
//   Iphone,
//   Macbook,
//   Ipad,
//   Watch,
//   Airpods,
//   Sound,
//   Accessories,
//   Support,
//   News,
//   Errors,
// } from "../../pages";

const Index = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.component} />
        );
      })}
    </Routes>
  );
};

export default Index;
