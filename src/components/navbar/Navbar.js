import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
        <Link to="/login">Logout</Link>
      </li>
    </ul>
  );
};

export default Navbar;
