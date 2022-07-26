import './navbar.css';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { handleAuthUserLogout } from '../../actions/authedUser';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const handleClick = () => {
    props.dispatch(handleAuthUserLogout(props.authedUser));
  };

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/add-question">New Question</Link>
      </li>
      <li className="navbar-item">
        <Link to="/leaderboard">LeaderBoard</Link>
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
