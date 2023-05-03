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
import { WordleContainer } from './components/wordleClone/wordleContainer';
import { SubNav } from './components/navbar/subNav';
import { Login } from './components/loginArea/login';

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
        path: '/coding',
        element: <SubNav />,
        children: [
          {
           path: '/coding/apidemo',
           element: <APIDemo />,
           children: [
            {
              path: '/coding/apidemo/get',
              element: <DisplaySQL />
            }
           ] 
          },
          {
            path: '/coding/wordle',
            element: <WordleContainer />
          },
          {
            path: '/coding/login',
            element: <Login />
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


