import { connect } from 'react-redux';
import questions from '../reducers/questions';

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
      <h3 className="title">Your Dashboard</h3>
      <h2>New Questions</h2>
      <ul className="dashboard-list-new">
        {props.questionIDs.map((id) =>
          checkForAlreadyAnsweredQuestions(props.questions[id]) ? null : (
            <li key={id}>
              <div>{id}</div>
              <div>{props.questions[id].author}</div>
              <div>{props.questions[id].timestamp}</div>
              <div>{props.questions[id].optionOne.text}</div>
              <div>{props.questions[id].optionTwo.text}</div>
            </li>
          )
        )}
      </ul>
      <h2>Already Answered Questions</h2>
      <ul className="dashboard-list-new">
        {props.questionIDs.map((id) =>
          checkForAlreadyAnsweredQuestions(props.questions[id]) ? (
            <li key={id}>
              <div>{id}</div>
              <div>{props.questions[id].author}</div>
              <div>{props.questions[id].timestamp}</div>
              <div>{props.questions[id].optionOne.text}</div>
              <div>{props.questions[id].optionTwo.text}</div>
            </li>
          ) : null
        )}
      </ul>
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
