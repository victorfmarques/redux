const redux = require('redux');

// Implementation of reducer
// Should:
// - always have a state and action as parameters
// - always return a state object
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
    }
};

// Creates store with the reducer function
const store = redux.createStore(
    counterReducer
);

console.log('Store initialized', store.getState())

// Defines a subscriber function to get the actual store state
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log('Change detected ', latestState);
};

// Subscribes the subscriber function to the store
store.subscribe(counterSubscriber);

// Triggers counterReducer function
store.dispatch({ type: 'increment' });

store.dispatch({ type: 'increment' });