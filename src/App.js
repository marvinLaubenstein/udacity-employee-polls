import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';
import QuestionPollPage from './components/QuestionPollPage';
import LoadingBar from 'react-redux-loading-bar';
import { Routes, Route } from 'react-router-dom';

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
            <Route path="questions/:id" exact element={<QuestionPollPage />} />
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
