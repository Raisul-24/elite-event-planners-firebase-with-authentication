import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Route/Route';
import Home from './Pages/Home';
import ErrorPage from './Components/ErrorPage';
import Services from './Pages/Services';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Login from './Components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: "/services",
        element : <Services></Services>
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path: "gallery",
        element : <Gallery></Gallery>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
