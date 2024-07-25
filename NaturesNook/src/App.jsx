import "./App.css";
import Layout from "../Components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
