import { useRoutes } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";

export default function Route() {
  let routes = [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "recommend",
          element: <Recommend />,
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
