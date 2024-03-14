import { Fragment } from 'react';

import { useSelector } from 'react-redux';

import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';


const App = () => {

  const { isAuthenticated } = useSelector(state => state.auth)
  return (
    <Fragment>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>

  );
}

export default App;
