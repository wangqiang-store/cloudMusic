import React from "react";
import { Outlet } from "react-router";

function Rank(props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default React.memo(Rank);
