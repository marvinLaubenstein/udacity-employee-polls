import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

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
      <h1 style={{ textAlign: 'center' }}>Your Dashboard</h1>

      <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>New Questions</h2>
      <ul className="dashboard-list-new">
        {props.questionIDs.map((id) =>
          checkForAlreadyAnsweredQuestions(props.questions[id]) ? null : (
            <QuestionCard questionID={id}></QuestionCard>
          )
        )}
      </ul>
      <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>
        Already Answered Questions
      </h2>
      <ul className="dashboard-list-old">
        {props.questionIDs.map((id) =>
          checkForAlreadyAnsweredQuestions(props.questions[id]) ? (
            <QuestionCard questionID={id}></QuestionCard>
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
