import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('myValue/increment');
export const decrement = createAction('myValue/decrement');

console.log(increment(100));

const myReducer = createReducer(700, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const add = createAction('myValue/add');
export const remove = createAction('myValue/remove');

//Immer
const itemsReducer = createReducer([], {
  //   [add]: (state, action) => [...state, action.payload],
  [add]: (state, action) => state.push(action.payload),
  [remove]: (state, action) => state.filter(item => item.id !== action.payload),
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
    items: itemsReducer,
  },
});
