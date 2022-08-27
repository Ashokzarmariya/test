import { LOGIN, LOGOUT, REQ_USER, SIGNUP } from "./ActionType";

export const signup = (userData) => async (dispatch) => {
  const res = await fetch("https://mock-12-api.herokuapp.com/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  console.log("signup-user", data);
  dispatch({ type: SIGNUP, payload: data });
};

export const login = (data) => async (dispatch) => {
  const res = await fetch("https://mock-12-api.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const userData = await res.json();
  console.log("login mongodb", userData);
  if (userData.token) localStorage.setItem("token", userData.token);
  dispatch({ type: LOGIN, payload: userData?.user });
};

export const reqUser = (token) => async (dispatch) => {
  const res = await fetch(
    `https://mock-12-api.herokuapp.com/users/req_user`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }
  );
  const user = await res.json();
  console.log("reqUser", user);
  dispatch({type:REQ_USER, payload:user})
};

export const logout = () => async (dispatch) => {
 localStorage.clear()
 dispatch({type:LOGOUT, payload:""})
}
