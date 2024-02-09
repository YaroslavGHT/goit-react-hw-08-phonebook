import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import { Layout } from './components/Layout/Layout.jsx';
import Login from './pages/Login.jsx';
import Contacts from './pages/Contacts.jsx';
import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from './redux/auth/authSlice.js';

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
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
          </Routes> 
        </Suspense>
    </Layout>
  );
};
