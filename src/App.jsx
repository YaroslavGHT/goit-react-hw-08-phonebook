import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.jsx';
import React,  { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from './redux/auth/authSlice.js';


const Home = lazy(() => import('./pages/Home.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Contacts = lazy(() => import('./pages/Contacts.jsx'));
const Register = lazy(() => import('./pages/Register.jsx'));
const RestrictedRoute = lazy(() => import('./components/RestrictedRoute/RestrictedRoute.jsx'))
const PrivateRoute = lazy(() => import('./components/PrivateRoute/PrivateRoute.jsx'))

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <Layout>
          <Suspense>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={
                <RestrictedRoute><Register /></RestrictedRoute>
              }>
            </Route>
            <Route path="/login" element={
              <RestrictedRoute><Login /></RestrictedRoute>
              }>
            </Route>
            <Route path="/contacts" element={
              <PrivateRoute><Contacts /></PrivateRoute>
              }>
            </Route>
          </Routes> 
        </Suspense>
    </Layout>
  );
};
