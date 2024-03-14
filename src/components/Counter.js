// import for class based components
// import {connect} from 'react-redux';

// import for function components
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  // provides function to trigger reducer actions 
  const dispatch = useDispatch();
  // consuming store state provided by Provider component set in App.js
  const counter = useSelector(state => state.counter);

  // increment and decrement button functions dispatching its respective functionabilities
  const incrementHandler = () => { dispatch({ type: 'increment' }); }
  const decrementHandler = () => { dispatch({ type: 'decrement' }); }
  const increaseBy5Handler = () => { dispatch({ type: 'increase', amount: 5 }); }

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter}</div>
      <div>
        <button onClick={decrementHandler}> Decrement</button>
        <button onClick={incrementHandler}> Increment</button>
        <button onClick={increaseBy5Handler}> Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
