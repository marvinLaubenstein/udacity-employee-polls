import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { handleAuthUserLogout } from '../../actions/authedUser';
import { connect } from 'react-redux';

const Navbar = ({ authedUser, dispatch }) => {
  const handleClick = () => {
    dispatch(handleAuthUserLogout(authedUser));
  };

  return (
    <ul className="navbar">
      <li>
        <div className="navbar-auth-user-item">{authedUser}</div>
      </li>
      <li>
        <ul className="navbar-link-list">
          <li className="navbar-link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-link-item">
            <Link to="/add">New Question</Link>
          </li>
          <li className="navbar-link-item">
            <Link to="/leaderboard">LeaderBoard</Link>
          </li>
        </ul>
      </li>
      <li className="navbar-logout-item">
        <button onClick={handleClick}>
          <LogoutIcon />
        </button>
      </li>
    </ul>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Navbar);
