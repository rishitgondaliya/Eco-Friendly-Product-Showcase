import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Product from "../Components/Products/Product";
import OurStory from '../Components/Journal/OurStory'
import SignIn from '../Components/Auth/SignIn';
import SignUp from '../Components/Auth/SignUp';
// import AuthForm from '../Components/Auth/AuthForm'
import Cutlery from '../Components/Journal/Cutlery';
import Blogs from '../Components/Journal/Blogs';
import Razor from "../Components/Journal/Razor";
import AllActivities from '../Components/Journal/AllActivities';
import Bamboo from '../Components/Journal/Bamboo';
import Coconut from '../Components/Journal/Coconut';
import Candle from '../Components/Journal/Candle';
import ZeroWaste from '../Components/Journal/ZeroWaste';
import Straws from '../Components/Journal/Straws';
import Life from '../Components/Journal/Life';
import Soaps from '../Components/Journal/Soaps';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:category" element={<Product />} />
        <Route path="journal" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/our-story' element={<OurStory />} />
        <Route path='/cutlery' element={<Cutlery />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/razor' element={<Razor />} />
        <Route path='/activity' element={<AllActivities />} />
        <Route path='/bamboo' element={<Bamboo />} />
        <Route path='/coconut' element={<Coconut />} />
        <Route path='/candle' element={<Candle />} />
        <Route path='/zero' element={<ZeroWaste />} />
        <Route path='/straw' element={<Straws />} />
        <Route path='/life' element={<Life />} />
        <Route path='/soap' element={<Soaps />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
