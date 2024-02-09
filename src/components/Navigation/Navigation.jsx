import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors.js'
import css from '../../App.module.css'

const Navigation = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className={css.header}>
      <NavLink
        className={({ isActive }) => `${css.navlink} ${isActive ? css.active : ''}`}to="/">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
            <NavLink
                className={({ isActive }) => `${css.navlink} ${isActive ? css.active : ''}`}
                to="/register" end>Register</NavLink>
            <NavLink
                className={({ isActive }) => `${css.navlink} ${isActive ? css.active : ''}`}
                to="/login" end>Login</NavLink>
            <NavLink
                className={({ isActive }) => `${css.navlink} ${isActive ? css.active : ''}`}
                to="/contacts" end>Contacts</NavLink>
        </>
      ) : (
        <>
            <NavLink
                className={({ isActive }) => `${css.navlink} ${isActive ? css.active : ''}`}
                to="/register" end>Register</NavLink>
            <NavLink
                className={({ isActive }) => `${css.navlink} ${isActive ? css.active : ''}`}
                to="/login" end>Login</NavLink>
        </>
      )}
    </div>
  );
};

export default Navigation;