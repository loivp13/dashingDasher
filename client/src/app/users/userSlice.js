import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios_api from "../../helpers/axios";

//###### INIT STATE ##########

const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  errorMessages: null,
  successMessages: null,
};

//###### CREATING A SLICE ##########

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
    newErrorMessage: (state, action) => {
      state.errorMessages = action.payload.message;
    },
    removeErrorMessage: (state, action) => {
      state.errorMessages = null;
    },
    addSuccessMessage: (state, action) => {
      state.successMessages = action.payload.message;
    },
  },
});

//###### EXPORTING ACTIONS ##########
export const {
  login,
  logout,
  newErrorMessage,
  removeErrorMessage,
  addSuccessMessage,
} = userSlice.actions;

//###### GETTING STATE ##########
export const selectNewErrorMessage = (state) => {
  console.log(state);
  return state.user.errorMessages;
};
export const selectSuccessMessage = (state) => {
  return state.user.successMessages;
};

//###### ASYNC OPERATIONS ##########
export const loginAsync = (email, password) => async (dispatch, getState) => {
  let isSuccessful = true;
  try {
    const response = await axios_api.post("/api/auth/login", {
      email,
      password,
    });

    //save to localStorage
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));

    dispatch(login({ user: response.data.user, token: response.data.token }));
  } catch (error) {
    console.dir(error.response.data.error);
    isSuccessful = false;
    dispatch(
      newErrorMessage({
        message: error.response.data.error,
      })
    );
  }
  return isSuccessful;
};

export const signUpAsync =
  (username, password, email) => async (dispatch, getState) => {
    let isSuccessful = true;
    try {
      const response = await axios_api.post("/api/auth/signup", {
        username,
        password,
        email,
      });
      dispatch(addSuccessMessage({ message: response.data.message }));
    } catch (error) {
      isSuccessful = false;
      dispatch(
        newErrorMessage({
          message: error.response.data.error,
        })
      );
    }
    return isSuccessful;
  };

export const forgotPwAsync = (email) => async (dispatch, getState) => {
  let isSuccessful = true;
  try {
    const response = await axios_api.post("/api/auth/forgot-password", {
      email,
    });
    dispatch(addSuccessMessage({ message: response.data.message }));
  } catch (error) {
    console.log("error");
    isSuccessful = false;
    dispatch(
      newErrorMessage({
        message: error.response.data.error,
      })
    );
  }
};
export default userSlice.reducer;
