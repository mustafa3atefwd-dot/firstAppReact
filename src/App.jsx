import "./App.css";
import About from "./componatns/About/About";
import Home from "./componatns/Home/Home";
import Contact from "./componatns/Contact/Contact";
import Portfolio from "./componatns/Portfolio/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componatns/Layout/Layout";
import '@fortawesome/fontawesome-free/css/all.min.css';



const routers = createBrowserRouter([
  {
   path:'/', element:<Layout/> , children: [
  {index:true, element:<Home/> },
  {path: '/about' , element:<About/>},
  {path: '/portfolio' , element:<Portfolio/>},
  {path: '/contact' , element:<Contact/>},
  
  ]  
 }
])

export default function App() {
  return  <>
    <RouterProvider router={routers} ></RouterProvider>
      
    </>
  
}


