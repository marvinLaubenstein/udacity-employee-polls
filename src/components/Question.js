import { connect } from 'react-redux';

const Question = ({ userId, authedUser, questions, users }) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((question) => (
          <li key={question.id}>
            <div>{question.id}</div>
          </li>
        ))}
      </ul>
      <div>{userId}</div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});
export default connect(mapStateToProps)(Question);
