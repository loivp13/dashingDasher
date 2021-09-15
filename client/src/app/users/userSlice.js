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
  return state.user.errorMessages;
};
export const selectSuccessMessage = (state) => {
  return state.user.successMessages;
};
export const selectUser = (state) => {
  return state.user.user;
};

//###### ASYNC OPERATIONS ##########
export const activationAsync = (token) => async (dispatch, getState) => {
  let isSuccessful = true;
  try {
    const response = await axios_api.post("/api/auth/activate", {
      token,
    });
    console.log(response);

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

export const loginAsync = (email, password) => async (dispatch, getState) => {
  let isSuccessful = true;
  try {
    const response = await axios_api.post("/api/auth/login", {
      email,
      password,
    });

    let { user, token } = response.data;
    //save to localStorage
    if (!user || !token) {
      throw new Error("User or token is undefined");
    }
    localStorage.setItem("user", JSON.stringify(user || null));
    localStorage.setItem("token", JSON.stringify(token || null));

    dispatch(login({ user: response.data.user, token: response.data.token }));
  } catch (error) {
    console.dir(error);
    isSuccessful = false;
    dispatch(
      newErrorMessage({
        message: error.response.data.message,
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
  return isSuccessful;
};

export const setNewPwAsync =
  (password, token) => async (dispatch, getState) => {
    let isSuccessful = true;
    try {
      const response = await axios_api.put("/api/auth/reset-password", {
        password,
        token,
      });
      dispatch(addSuccessMessage({ message: response.data.message }));
    } catch (error) {
      console.dir(error);
      isSuccessful = false;
      if (error.response.data.err.message === "jwt expired") {
        dispatch(
          newErrorMessage({
            message: "Link has expired. Please try again.",
          })
        );
      }
    }
    return isSuccessful;
  };

export default userSlice.reducer;
