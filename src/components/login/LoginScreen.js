import React, { useRef, useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  MenuItem,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAuthUserLogin } from '../../actions/authedUser';

const LoginScreen = ({ isLoggedIn, dispatch, users }) => {
  const usernameValueRef = useRef('');
  const passwordValueRef = useRef('');
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleChange = (event) => {
    setLoginUser(event.target.value);
    users.map((user) =>
      user.id === event.target.value ? setLoginPassword(user.password) : null
    );
  };

  const handleClick = (event) => {
    dispatch(
      handleAuthUserLogin(
        usernameValueRef.current.value,
        passwordValueRef.current.value
      )
    );
    event.preventDefault();
  };

  if (isLoggedIn) {
    return <Navigate to={-1} />;
  }

  return (
    <Grid data-testid="login">
      <Paper
        className="login-screen-paper"
        elevation={10}
        style={{
          padding: '20px',
          width: 280,
          margin: '20px auto',
        }}
      >
        <Grid align="center">
          <Avatar style={{ backgroundColor: '#04aa6d' }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Welcome-Login</h2>
        </Grid>
        <TextField
          style={{ paddingBottom: '10px' }}
          label="Username"
          placeholder="Enter username"
          variant="outlined"
          fullWidth
          required
          value={loginUser}
          select
          inputRef={usernameValueRef}
          onChange={handleChange}
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.id}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ paddingBottom: '10px' }}
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={loginPassword}
          inputRef={passwordValueRef}
        />
        <Button
          style={{ padding: '10px', background: '#04aa6d' }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleClick}
        >
          Login
        </Button>
      </Paper>
    </Grid>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  isLoggedIn: !!authedUser,
  users: Object.values(users),
});

export default connect(mapStateToProps)(LoginScreen);
