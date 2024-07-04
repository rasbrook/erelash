import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About/About';
import Projects from './pages/myproject/projects';
import Service from './pages/Servicess/Service';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';


const main=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/About',
    element:<About />
  },
  {
    path:'/service',
    element:<Service />
  },
  {
    path:'/project',
    element:<Projects />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={main} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
