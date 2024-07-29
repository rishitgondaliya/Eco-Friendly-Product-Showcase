import "./App.css";
import Layout from "../Components/Layout/Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Product from "../Components/Products/Product";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index={true} path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:category" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );   
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
