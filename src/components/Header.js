import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

import classes from './Header.module.css';


const Header = () => {

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth)

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated &&
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>

              <button onClick={logoutHandler}>Logout</button>

            </li>
          </ul>
        }
      </nav>

    </header>
  );
};

export default Header;
