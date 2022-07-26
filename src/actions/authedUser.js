export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const RESET_AUTHED_USER = 'LOGOUT_AUTHED_USER';

export function setAuthedUser(authedUserId) {
  return {
    type: SET_AUTHED_USER,
    authedUserId,
  };
}

export function resetAuthedUser() {
  return {
    type: RESET_AUTHED_USER,
  };
}

export function handleAuthUserLogin(username, password) {
  return (dispatch, getState) => {
    console.log('login try');
    const { users } = getState();

    const user = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );

    console.log(user == undefined ? 'wrong data' : 'login sucess');

    if (!!user) {
      return dispatch(setAuthedUser(user.id));
    }
  };
}

export function handleAuthUserLogout(username) {
  return (dispatch) => {
    dispatch(resetAuthedUser());
  };
}
