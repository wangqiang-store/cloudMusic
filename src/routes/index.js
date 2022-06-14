import { useRoutes } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import RecommendMain from "../application/Recommend/main";
import Singers from "../application/Singers";
import Rank from "../application/Rank";
import Album from "../application/Album";

export default function Route() {
  let routes = [
    {
      path: "/",
      element: <Home />,
      children: [
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
        },
        {
          path: "rank",
          element: <Rank />,
        },
      ],
    },
  ];
  let element = useRoutes(routes);
  return element;
}
