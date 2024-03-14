// import for class based components
// import {connect} from 'react-redux';

// import for function components
import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // consuming store state provided by Provider component set in App.js
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
