const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
  switch (action) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Logiin Failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        authError: "Register Failed"
      };
    default:
      return state;
  }
};
export default authReducer;
