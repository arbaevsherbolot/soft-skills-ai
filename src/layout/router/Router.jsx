import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../components/pages/home/Home.page";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  return (
    <>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} element={route.element} path={route.path} />
        ))}
      </Routes>
    </>
  );
};

export default Router;
