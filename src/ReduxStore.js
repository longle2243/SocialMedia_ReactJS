import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


// Define the initial state for the store
const initialState = {
  todos: [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Build a Redux app', completed: false }
  ]
};

// Define the reducer function to update the store based on actions
function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          }
        ]
      };
    // Handle other action types here
    default:
      return state;
  }
}

// Create the Redux store using the reducer
const store = createStore(todosReducer);

// // Define initial state and actions
// const initialState = { count: 0 };
// const increment = () => ({ type: 'INCREMENT' });

// // Define reducer to handle actions
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     default:
//       return state;
//   }
// };

// // Create store
// const store = createStore(reducer);

// // Define component
// const Counter = ({ count, dispatch }) => (
//   <div>
//     <p>Count: {count}</p>
//     <button onClick={() => dispatch(increment())}>Increment</button>
//   </div>
// );

// // Connect component to store
// const ConnectedCounter = connect(state => ({ count: state.count }))(Counter);

// // Wrap component with Provider
// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedCounter />
//   </Provider>,
//   document.getElementById('root')
// );
