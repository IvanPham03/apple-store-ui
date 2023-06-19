import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout";
const Index = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => {
        const Page = route.component;
        let Layout = DefaultLayout;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = <></>;
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout page={Page} />
            }
          />
        );
      })}
    </Routes>
  );
};

export default Index;
