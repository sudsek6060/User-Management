import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentuser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
    },
    logInScccess: (state, action) => {
      state.currentuser = action.payload;
      state.error = null;
      state.loading = false;
    },
    logInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logOutUserStart: (state) => {
      state.loading = true;
    },
    logOutUserSuccess: (state) => {
      state.currentuser = null;
      state.loading = false;
      state.error = null;
    },
    logOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  logInStart,
  logInScccess,
  logInFailure,
  logOutUserStart,
  logOutUserSuccess,
  logOutUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
