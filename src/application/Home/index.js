import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Top, Tab, TabItem } from "./style";
import { NavLink } from "react-router-dom"; // 利用 NavLink 组件进行路由跳转
import Player from "../Player";

function Home(props) {
  const navigate = useNavigate();
  const onSearch = () => {
    navigate("/search");
  };
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Web App</span>
        <span className="iconfont search" onClick={onSearch}>
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink to="/recommend" className="selected">
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" className="selected">
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" className="selected">
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>
      <main>
        {<Outlet />}
        <Player></Player>
      </main>
    </div>
  );
}

export default React.memo(Home);
