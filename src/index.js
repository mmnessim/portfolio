import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Landing } from './components/landing/landing';
import { AboutMe } from './components/about-me/AboutMe';
import { APIDemo } from './components/APIdemo/apiDemo';
import { DisplaySQL } from './components/APIdemo/getapi';
import { WritingSamples } from './components/writingSamples/writingSamples';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/about',
        element: <AboutMe />
      },
      {
        path: '/apidemo',
        element: <APIDemo />,
        children: [
          {
            path: '/apidemo/get',
            element: <DisplaySQL />
          }
        ]
      },
      {
        path: '/writing',
        element: <WritingSamples />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


