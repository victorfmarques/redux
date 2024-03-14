// import for class based components
// import {connect} from 'react-redux';

// import for function components
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice'

import classes from './Counter.module.css';

const Counter = () => {

  // provides function to trigger reducer actions 
  const dispatch = useDispatch();
  // consuming store state provided by Provider component set in App.js
  const { counter, showCounter } = useSelector(state => state.counter);


  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseBy5Handler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&
        <div className={classes.value}> {counter}</div>}
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
