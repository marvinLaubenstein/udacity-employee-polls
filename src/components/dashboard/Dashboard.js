import { connect } from 'react-redux';
import QuestionCard from '../question-card/QuestionCard';
import GridList from '@material-ui/core/ImageList';
import './dashboard.css';
import Navbar from '../navbar/Navbar';
import { useState } from 'react';

const Dashboard = ({ questions, questionIDs, authedUser }) => {
  const [switchAnsweredQuestions, setSwitchAnsweredQuestions] = useState(false);
  const checkForAlreadyAnsweredQuestions = (question) => {
    const questionOptionOneVotes = question.optionOne.votes;
    const questionOptionTwoVotes = question.optionTwo.votes;
    const loggedInUserName = authedUser;
    let alreadyAnswered = false;

    questionOptionOneVotes.map((votingName) => {
      votingName === loggedInUserName
        ? (alreadyAnswered = true)
        : (alreadyAnswered = alreadyAnswered);
    });
    questionOptionTwoVotes.map((votingName) => {
      votingName === loggedInUserName
        ? (alreadyAnswered = true)
        : (alreadyAnswered = alreadyAnswered);
    });

    return alreadyAnswered;
  };

  const handleChange = (e) => {
    setSwitchAnsweredQuestions(e.target.checked);
  };

  return (
    <div>
      <Navbar></Navbar>
      <label className="switch">
        <label className="switch-unanswered-label">Unanswered</label>
        <input type="checkbox" onChange={handleChange}></input>
        <span className="slider"></span>
        <label className="switch-answered-label">Answered</label>
      </label>
      <h1 style={{ textAlign: 'center' }}>
        {' Your Question Dashboard, ' +
          String(authedUser)[0].toUpperCase() +
          String(authedUser).slice(1)}
      </h1>
      {switchAnsweredQuestions ? (
        <div>
          <h2 style={{ paddingTop: '20px', paddingLeft: '20px' }}>
            Already Answered
          </h2>
          <GridList className="dashboard-list-old">
            {questionIDs.map((id) =>
              checkForAlreadyAnsweredQuestions(questions[id]) ? (
                <QuestionCard
                  questionID={id}
                  key={'card' + id}
                  answered
                ></QuestionCard>
              ) : null
            )}
          </GridList>
        </div>
      ) : (
        <div>
          <h2 style={{ paddingTop: '20px', paddingLeft: '20px' }}>
            Unanswered
          </h2>
          <GridList className="dashboard-list-new">
            {questionIDs.map((id) =>
              checkForAlreadyAnsweredQuestions(questions[id]) ? null : (
                <QuestionCard questionID={id} key={'card' + id}></QuestionCard>
              )
            )}
          </GridList>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => ({
  questionIDs: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  questions,
  authedUser,
});

export default connect(mapStateToProps)(Dashboard);
