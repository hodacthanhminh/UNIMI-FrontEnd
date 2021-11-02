import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTHENICATION_SUCCESS,
  AUTHENTICATION_FAIL,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
} from "./type";
import axios from "axios";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      timeout: 5000,
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/account/login`,
        body,
        config
      );

      console.log(res.data);

      if (res.data.status == "Error") {
        dispatch({
          type: LOGIN_FAIL,
        });
      } else {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data,
        });
        dispatch(load_user());
      }
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const register =
  ({ email, password, account_role }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 5000,
    };

    const body = JSON.stringify({ email, password, account_role });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/account/create`,
        body,
        config
      );

      if (res.data.status === "Error") {
        dispatch({ type: REGISTER_FAIL });
      } else {
        dispatch({
          type: REGISTER_SUCCESS,
        });
      }
    } catch (err) {
      dispatch({ type: REGISTER_FAIL });
    }
  };

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        //Authentication: `Bearer ${localStorage.getItem("access")}`,
        accept: "application/json",
      },
      timeout: 5000,
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/account/3/get`,
        config
      );

      if (res.data.status === "Error") {
        dispatch({ type: LOAD_USER_FAIL });
      } else {
        dispatch({
          type: LOAD_USER_SUCCESS,
          payload: res.data.data,
        });
      }
    } catch (err) {
      dispatch({ type: LOAD_USER_FAIL });
    }
  } else {
    dispatch({ type: LOAD_USER_FAIL });
  }
};
