import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';
import GridList from '@material-ui/core/GridList';
import { Button } from '@material-ui/core';
import { Navigate } from 'react-router-dom';
import { handleLogoutAuthedUser } from '../actions/authedUser';

const Dashboard = (props) => {
  const checkForAlreadyAnsweredQuestions = (question) => {
    const questionOptionOneVotes = question.optionOne.votes;
    const questionOptionTwoVotes = question.optionTwo.votes;
    const loggedInUserName = props.authedUser;
    let alreadyAnswered = false;

    console.log('Logged in : ' + props.authedUser.id);

    questionOptionOneVotes.map((votingName) => {
      votingName === loggedInUserName.id
        ? (alreadyAnswered = true)
        : (alreadyAnswered = alreadyAnswered);
    });
    questionOptionTwoVotes.map((votingName) => {
      votingName === loggedInUserName.id
        ? (alreadyAnswered = true)
        : (alreadyAnswered = alreadyAnswered);
    });

    return alreadyAnswered;
  };

  const handleClick = (event) => {
    console.log('Logout');
    props.dispatch(handleLogoutAuthedUser());
    event.preventDefault();
  };

  if (props.isLoggedOut) {
    console.log('logged out');
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Your Question Dashboard</h1>
      <Button
        style={{ padding: '10px' }}
        type="submit"
        color="primary"
        variant="contained"
        fullWidth
        onClick={handleClick}
      >
        logout
      </Button>
      <h2 style={{ paddingTop: '20px', paddingLeft: '20px' }}>New Questions</h2>
      <GridList className="dashboard-list-new">
        {props.questionIDs.map((id) =>
          checkForAlreadyAnsweredQuestions(props.questions[id]) ? null : (
            <QuestionCard questionID={id} key={'card' + id}></QuestionCard>
          )
        )}
      </GridList>
      <h2 style={{ paddingTop: '20px', paddingLeft: '20px' }}>
        Already Answered Questions
      </h2>
      <GridList className="dashboard-list-old">
        {props.questionIDs.map((id) =>
          checkForAlreadyAnsweredQuestions(props.questions[id]) ? (
            <QuestionCard questionID={id} key={'card' + id}></QuestionCard>
          ) : null
        )}
      </GridList>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => ({
  questionIDs: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  questions,
  users,
  authedUser,
  isLoggedOut: !authedUser,
});

export default connect(mapStateToProps)(Dashboard);
