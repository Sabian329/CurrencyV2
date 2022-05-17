import { createSlice } from '@reduxjs/toolkit';

export const setText = createSlice({
  name: 'information',
  initialState: {
    message: 'hello'
  },
  reducers: {
    setHello(state, action) {
      state.message = `hello, ${action.payload}`;
    },
    setBye(state, action) {
      state.message = `bye, ${action.payload}`;
    }
  }
});

export const { setHello, setBye } = setText.actions;
export default setText.reducer;
