import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../redux/auth/authSlice.js';
import css from '../App.module.css'


const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {email, password};
    dispatch(apiLoginUser(formData));
  };

  return (
    <div className={css.userDiv}>
      <h1 className={css.title}>Login page</h1>
      <form className={css.registForm} onSubmit={onSubmit}>
        <label className={css.labelUser}>
          Email:<br></br>
          <input className={css.inputUser}
            type="email" name="userEmail" placeholder="yourEmail@gmail.com"
            required
          />
        </label>
        <label className={css.labelUser}>
          Password:<br></br>
          <input className={css.inputUser}
            type="password" name="userPassword"
            placeholder="**********" minLength={7}
            required
          />
        </label>
        <button className={css.userBtn} type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
