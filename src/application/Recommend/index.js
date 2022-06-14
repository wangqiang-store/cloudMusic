import React from "react";
import { Outlet } from "react-router";

function Recommend(props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

// 将ui组件包装成容器组件
export default React.memo(Recommend);
