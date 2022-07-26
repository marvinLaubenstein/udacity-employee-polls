import { connect } from 'react-redux';
import QuestionCard from '../question-card/QuestionCard';
import GridList from '@material-ui/core/ImageList';
import './dashboard.css';
import Navbar from '../navbar/Navbar';

const Dashboard = (props) => {
  const checkForAlreadyAnsweredQuestions = (question) => {
    const questionOptionOneVotes = question.optionOne.votes;
    const questionOptionTwoVotes = question.optionTwo.votes;
    const loggedInUserName = props.authedUser;
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

  return (
    <div>
      <Navbar></Navbar>
      <h1 style={{ textAlign: 'center' }}>
        Your Question Dashboard,{' '}
        {String(props.authedUser)[0].toUpperCase() +
          String(props.authedUser).slice(1)}
      </h1>
      <h2 style={{ paddingTop: '20px', paddingLeft: '20px' }}>Unanswered</h2>
      <GridList className="dashboard-list-new">
        {props.questionIDs.map((id) =>
          checkForAlreadyAnsweredQuestions(props.questions[id]) ? null : (
            <QuestionCard questionID={id} key={'card' + id}></QuestionCard>
          )
        )}
      </GridList>
      <h2 style={{ paddingTop: '20px', paddingLeft: '20px' }}>
        Already Answered
      </h2>
      <GridList className="dashboard-list-old">
        {props.questionIDs.map((id) =>
          checkForAlreadyAnsweredQuestions(props.questions[id]) ? (
            <QuestionCard
              questionID={id}
              key={'card' + id}
              answered
            ></QuestionCard>
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
});

export default connect(mapStateToProps)(Dashboard);
