import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../redux/auth/authSlice.js';
import css from '../App.module.css'

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    
    const formData = { name, email, password };
    dispatch(apiRegisterUser(formData));
  };

  return (
    <div className={css.userDiv}>
      <h1 className={css.title}>Register page</h1>

      <form className={css.registForm} onSubmit={onSubmit}>
        <label className={css.labelUser}>
          Name:<br></br>
          <input className={css.inputUser}
            type="text" name="userName"
            placeholder="Your name" minLength={2}
            required
          />
        </label>
        <label className={css.labelUser}>
          Email:<br></br>
          <input className={css.inputUser}
            type="email" name="userEmail"
            placeholder="yourEmail@gmail.com"
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
        <button className={css.userBtn} type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
