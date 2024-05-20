import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Service from './pages/service/Service';
import About from './pages/about/About';
import Login from './pages/login/Login';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App>{<Navigate to={"/Home"}/>}</App>}>
     <Route index element={<Navigate to="/home" />} />
     <Route path="home" element={<Home />} />
     <Route path="service" element={ <Service/>} />
     <Route path="about" element={<About/>} />
     <Route path="login" element={<Login />} />
    </Route>
  )
)






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
