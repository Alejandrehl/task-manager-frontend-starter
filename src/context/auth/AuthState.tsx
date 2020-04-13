import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import api from "../../utils/api";
import AuthInterface from "./AuthInterface";
import {
  AUTH_ERROR,
  CLEAN_ERROR,
  LOGIN_USER,
  LOAD_USER,
  LOGOUT,
  REGISTER_SUCCESS,
  CLEAN_SUCCESS,
} from "../types";
import jwtDecode from "jwt-decode";

const AuthState = (props: any) => {
  const initialState: AuthInterface = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    error: "",
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState) as [
    AuthInterface,
    any
  ];

  const loadUser = () => {
    const user: any = jwtDecode(state.token);

    const expirationTime = new Date(user.exp * 1000);
    const now = Date.now();

    if (now > expirationTime.getTime()) dispatch({ type: LOGOUT });
    dispatch({ type: LOAD_USER, payload: user });
  };

  const login = async (credentials: object) => {
    api
      .post("auth/signin", credentials)
      .then((res) =>
        dispatch({ type: LOGIN_USER, payload: res.data.accessToken })
      )
      .catch((err) =>
        dispatch({ type: AUTH_ERROR, payload: err.response.data.message })
      );
  };

  const register = async (crendentials: object) => {
    api
      .post("auth/signup", crendentials)
      .then((res) =>
        dispatch({ type: REGISTER_SUCCESS, payload: crendentials })
      )
      .catch((err) =>
        dispatch({ type: AUTH_ERROR, payload: err.response.data.message })
      );
  };

  const logout = () => dispatch({ type: LOGOUT });
  const cleanError = () => dispatch({ type: CLEAN_ERROR });
  const cleanSuccess = () => dispatch({ type: CLEAN_SUCCESS });

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        cleanError,
        loadUser,
        logout,
        register,
        cleanSuccess,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
