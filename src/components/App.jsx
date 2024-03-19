// import {  Navigate, Route, Routes, useLocation } from 'react-router-dom';
// import { lazy, useEffect } from 'react';
// import Layout from './Layout/Layout';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from 'react-redux';
// import { refreshUser } from '../redux/auth/operationsAuth';
// import { useAuth } from 'hooks/useAyth';
// import Loader from './Loader/Loader';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';

// const Register = lazy(() => import("../pages/RegisterPage"));
// const Login = lazy(() => import("../pages/LoginPage"));
// const Recommended = lazy(() => import("../pages/RecomendedPage"));
// const Library = lazy(() => import("../pages/LibraryPage"));
// const Reading = lazy(() => import("../pages/ReadingPage"));
// const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();
//   const location = useLocation();

//   useEffect(() => {
//     if(location.pathname !== '/register' && location.pathname !== '/login'){
//     dispatch(refreshUser());
//     }
//   }, [dispatch, location.pathname ]);

//   return isRefreshing ? (
//     <Loader />
//   ) : (
//       <div>
//        <Routes>
//          <Route path="/" element={<Layout />}>
//            <Route index element={<Navigate replace to= '/register' />} />
//            <Route path="/register" element={<RestrictedRoute redirectTo='/recommended' component={<Register/>} />} />
//            <Route path="/login" element={<RestrictedRoute redirectTo='/recommended' component={<Login />} />} />
//            <Route path="/recommended" element={<PrivateRoute redirectTo="/recommended" component={<Recommended />} />} />
//            <Route path="/library" element={<PrivateRoute redirectTo="/library" component={<Library />} />} />
//            <Route path="/reading/:bookId" element={<PrivateRoute redirectTo="/library" component={<Reading />} />} />
//            <Route path="*" element={<NotFoundPage />} />
//          </Route>
//        </Routes>
//        <ToastContainer autoClose={1500} />
//     </div>
//   );  
// };

import {  Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout/Layout';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operationsAuth';
import { useAuth } from 'hooks/useAyth';
import Loader from './Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectToken } from '../redux/auth/selectorAuth';

const Register = lazy(() => import("../pages/RegisterPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Recommended = lazy(() => import("../pages/RecomendedPage"));
const Library = lazy(() => import("../pages/LibraryPage"));
const Reading = lazy(() => import("../pages/ReadingPage"));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const token = useSelector(selectToken);

  useEffect(() => {
      if (token) {
        dispatch(refreshUser());
      }
  }, [dispatch, token ]);

  return isRefreshing ? (
    <Loader />
  ) : (
      <div>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Navigate replace to= '/register' />} />
           <Route path="/register" element={<RestrictedRoute redirectTo='/recommended' component={<Register/>} />} />
           <Route path="/login" element={<RestrictedRoute redirectTo='/recommended' component={<Login />} />} />
           <Route path="/recommended" element={<PrivateRoute redirectTo="/recommended" component={<Recommended />} />} />
           <Route path="/library" element={<PrivateRoute redirectTo="/library" component={<Library />} />} />
           <Route path="/reading/:bookId" element={<PrivateRoute redirectTo="/library" component={<Reading />} />} />
           <Route path="*" element={<NotFoundPage />} />
         </Route>
       </Routes>
       <ToastContainer autoClose={1500} />
    </div>
  );  
};