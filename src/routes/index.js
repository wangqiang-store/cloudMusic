import { useRoutes } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import RecommendMain from "../application/Recommend/main";
import Singers from "../application/Singers";
import SingersMain from "../application/Singers/main";
import Rank from "../application/Rank";
import RankMain from "../application/Rank/main";
import Album from "../application/Album";
import Singer from "../application/Singer";
import Search from "../application/Search";

export default function Route() {
  let routes = [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <RecommendMain />,
        },
        {
          path: "recommend",
          element: <Recommend />,
          children: [
            {
              index: true,
              element: <RecommendMain />,
            },
            {
              path: "/recommend/:id",
              element: <Album />,
            },
          ],
        },
        {
          path: "singers",
          element: <Singers />,
          children: [
            {
              index: true,
              element: <SingersMain />,
            },
            {
              path: "/singers/:id",
              element: <Singer />,
            },
          ],
        },
        {
          path: "rank",
          element: <Rank />,
          children: [
            {
              index: true,
              element: <RankMain />,
            },
            {
              path: "/rank/:id",
              element: <Album />,
            },
          ],
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "album/:id",
          element: <Album />,
        },
      ],
    },
  ];
  let element = useRoutes(routes);
  return element;
}
