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
} from "../actions/type";

const initialState = {
  isAuthenticated: null,
  isLoading: null,
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  user: null,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        user: payload.user,
        refresh: payload.refresh,
        isLoading: true,
      };

    case AUTHENICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };

    case LOGIN_FAIL:
    case AUTHENTICATION_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: null,
      };
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        user: null,
        refresh: null,
        isLoading: null,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
        isLoading: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isLoading: false,
      };
    default:
      return state;
  }
}
