import {createBrowserRouter} from "react-router-dom";
import Product from "./components/product/react/Product.tsx";
import Home from "./components/home/react/Home.tsx";
import Catalog from "./components/catalog/react/Catalog.tsx";
import About from "./components/about/About.tsx";
import Contact from "./components/contact/Contact.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/catalog/:id",
    element: <Catalog/>
  },
  {
    path: "/products/:id",
    element: <Product/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
]);
