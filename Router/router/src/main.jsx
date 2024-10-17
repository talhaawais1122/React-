import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { apiLoader, GitHub } from './Components/GitHub/GitHub';
import Home from './Components/Home/Home';
import { Users } from './Components/Users/Users';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/home', element: <Home/> }, 
      { path: '/about', element: <About /> } ,
      { path: "/contact", element: <Contact/>},
      { 
        path: "/github", 
        element: <GitHub />, 
        loader: apiLoader 
      },
      { 
        path: '/users/:userId',
        element: <Users />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
