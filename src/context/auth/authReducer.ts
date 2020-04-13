import {
  AUTH_ERROR,
  CLEAN_ERROR,
  LOGIN_USER,
  LOGOUT,
  LOAD_USER,
  CLEAN_SUCCESS,
  REGISTER_SUCCESS,
} from "../types";

export default (state: Object, action: any) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: "",
        success: "",
      };
    case LOGIN_USER:
      localStorage.setItem("token", action.payload);

      return {
        ...state,
        token: action.payload,
        error: "",
        success: "",
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        success: `Usuario "${action.payload.username}" registrado con éxito`,
        error: "",
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: Array.isArray(action.payload)
          ? action.payload[0]
          : action.payload,
      };
    case CLEAN_ERROR:
      return {
        ...state,
        error: "",
      };
    case CLEAN_SUCCESS:
      return {
        ...state,
        success: "",
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: "",
        success: "",
      };
    default:
      return state;
  }
};
