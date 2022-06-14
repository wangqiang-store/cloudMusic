import React from "react";
import { Outlet } from "react-router";

function Singers(props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Singers;
