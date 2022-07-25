import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet></Outlet> : <Navigate to={`/login`} />;
};

const mapStateToProps = ({ authedUser }) => ({
  isLoggedIn: !!authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
