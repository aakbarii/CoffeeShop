import { useRoutes } from "react-router-dom";
import Home from "./src/Pages/Home/Home";
import Shop from "./src/Pages/Shop/Shop";
import Costom from "./src/Pages/Costom";

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/costom", element: <Costom /> },
    // { path: "/dic", element: <Dic /> },
    // { path: "/blog", element: <Blog /> },
    // { path: "/aboutus", element: <AboutUS /> },
    // { path: "/calltous", element: <CallToUs /> },
  ]);
  
  return routes;
};

export default Routes;