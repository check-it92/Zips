import React from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
};

export default Root;
