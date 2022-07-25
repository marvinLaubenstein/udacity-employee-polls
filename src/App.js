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

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/questions/:id" exact element={<QuestionPollPage />} />
            <Route
              path="/add-question"
              exact
              element={<QuestionAddingPage />}
            />
            <Route path="/leaderboard" exact element={<LeaderBoard />}></Route>
            <Route path="/login" exact element={<LoginScreen />}></Route>
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
