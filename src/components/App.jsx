import {  Route, Routes } from 'react-router-dom';
import  Layout  from './Layout/Layout';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import { lazy } from 'react';

const Register = lazy(() => import("../pages/RegisterPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Recommended = lazy(() => import("../pages/RecomendedPage"));
const Library = lazy(() => import("../pages/LibraruPage"));
const Reading = lazy(() => import("../pages/ReadingPage"));

export const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route path="/recommended" element={<Recommended />}/>
          <Route path="/library" element={<Library />}/>
          <Route path="/reading" element={<Reading />}/>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
