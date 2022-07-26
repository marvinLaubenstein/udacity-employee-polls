import React from 'react';
import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/dashboard/Dashboard';
import QuestionPollPage from './components/question-poll-page/QuestionPollPage';
import QuestionAddingPage from './components/question-adding-page/QuestionAddingPage';
import LoadingBar from 'react-redux-loading-bar';
import LoginScreen from './components/login/LoginScreen';
import { Routes, Route } from 'react-router-dom';
import LeaderBoard from './components/leader-board/LeaderBoard';
import PrivateRoutes from './components/privateroute/PrivateRoutes';

const App = ({ dispatch, isLoggedIn, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {loading === true ? null : (
          <Routes>
            <Route path="/login" exact element={<LoginScreen />}></Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/" exact element={<Dashboard />} />
              <Route
                path="/questions/:id"
                exact
                element={<QuestionPollPage />}
              />
              <Route path="/add" exact element={<QuestionAddingPage />} />
              <Route
                path="/leaderboard"
                exact
                element={<LeaderBoard />}
              ></Route>
            </Route>
            <Route
              path="*"
              element={<p>There's nothing here: 404 Error (Page Not Found)!</p>}
            />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: !!authedUser ? authedUser === null : false,
  isLoggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
