import { createStore } from 'redux';

const intialState = { counter: 0, showCounter: true }

const changeCounterReducer = (state = intialState, action) => {
    if (action.type === 'increment') {
        return { counter: state.counter + 1, showCounter: state.showCounter }
    }

    if (action.type === 'increase') {
        // expects amount to be sent on dispatch method
        return { counter: state.counter + action.amount, showCounter: state.showCounter }
    }

    if (action.type === 'decrement') {
        return { counter: state.counter - 1, showCounter: state.showCounter }
    }

    if (action.type === 'toggle') {
        return { showCounter: !state.showCounter, counter: state.counter }
    }

    return state
}

const store = createStore(changeCounterReducer);

export default store;