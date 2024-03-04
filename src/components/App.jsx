import {  Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = lazy(() => import("../pages/RegisterPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Recommended = lazy(() => import("../pages/RecomendedPage"));
const Library = lazy(() => import("../pages/LibraryPage"));
const Reading = lazy(() => import("../pages/ReadingPage"));
// const Layout = lazy(() => import('./Layout/Layout'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <div >
      {/* <Routes>
        <Route path="/" element={<Navigate replace to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route path="/recommended" element={<Recommended />}/>
          <Route path="/library" element={<Library />}/>
          <Route path="/reading" element={<Reading />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes> */}
      <div>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Navigate replace to="/register" />} />
           <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />
           <Route path="/recommended" element={<Recommended />} />
           <Route path="/library" element={<Library />} />
           <Route path="/reading" element={<Reading />} />
           <Route path="*" element={<NotFoundPage />} />
         </Route>
       </Routes>
       <ToastContainer autoClose={1500} />
    </div>
    </div>
  );
};
