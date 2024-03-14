import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

import classes from './Auth.module.css';
import { Fragment } from 'react';

const Auth = () => {

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login())
  }

  return (
    <Fragment>
      {!isAuthenticated &&
        <main className={classes.auth}>
          <section>
            <form onSubmit={loginHandler}>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <button type='submit'>Login</button>
            </form>
          </section>
        </main>}
    </Fragment>
  );
};

export default Auth;
