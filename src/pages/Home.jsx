import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData, selectAuthIsLoading } from '../redux/auth/authSlice.selectors.js'
import { apiLogoutUser } from '../redux/auth/authSlice.js'
import css from 'App.module.css'

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const handleLogOut = () => dispatch(apiLogoutUser());

  const userName = userData?.name ?? "Could't get user";
  const userEmail = userData?.email;

  return (
    <div className={css.userDiv}>
      <h1>Home page</h1>
        <p>Welcome on phonebook app</p>
         {userName ?
          <>
            <p>{userName}</p>
            <p>{userEmail}</p>
            <button className={css.userBtn} onClick={handleLogOut} disabled={isLoading} type="button">Logout</button>
          </>:
          <p>Pleace registration on app</p>
          }
    </div>
  );
};

export default Home;
