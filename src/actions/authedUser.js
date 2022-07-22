export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const RESET_AUTHED_USER = 'RESET_AUTHED_USER';

export function setAuthedUser(authedUserId) {
  return {
    type: SET_AUTHED_USER,
    authedUserId,
  };
}

export function handleLoginAuthedUser(enteredUser, enteredPassword) {
  return (dispatch, getState) => {
    const { users } = getState();

    const user = Object.values(users).find(
      (user) => user.id === enteredUser && user.password === enteredPassword
    );

    if (!!user) {
      return dispatch(setAuthedUser(user));
    }
  };
}

export function resetAuthedUser() {
  return {
    type: RESET_AUTHED_USER,
  };
}

export function handleLogoutAuthedUser() {
  return (dispatch) => {
    return dispatch(resetAuthedUser());
  };
}
