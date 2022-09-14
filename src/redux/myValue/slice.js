import { createSlice } from '@reduxjs/toolkit';


//createSlice myValueSlice
export const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100, 
  reducers: {
    increment(state, action) {
      return state + action.payload
    },
     decrement(state, action) {
      return state - action.payload
    },
  },
})

export const { increment, decrement } = myValueSlice.actions;

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(700, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// console.log(increment(100));
// console.log(myValueSlice);