import { useRoutes } from "react-router-dom";
import Home from "./src/Pages/Home/Home";
import Shop from "./src/Pages/Shop/Shop";
import Costom from "./src/Pages/Costom";
import BlogPage from "./src/Pages/Blog/Blog";
import CallToUS from "./src/Pages/CallToUS/CallToUs";
import AboutUs from "./src/Pages/AboutUs/AboutUs";
import Auth from "./src/Pages/Auth";
import Cart from "./src/Pages/Cart";

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/costom", element: <Costom /> },
    { path: "/blog", element: <BlogPage /> },
    // { path: "/dic", element: <Dic /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/call-to-us", element: <CallToUS /> },
    { path: "/auth", element: <Auth /> },
    { path: "/cart", element: <Cart /> },
  ]);
  
  return routes;
};

export default Routes;