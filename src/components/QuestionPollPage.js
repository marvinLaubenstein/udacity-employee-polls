import { connect } from 'react-redux';
import './question-card.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const QuestionPollPage = (props) => {
  return (
    <div className="question-poll">
      {'This is Question: ' + props.question.id}
      <div>Choose one !</div>
      <Link to={'/'}>
        <div>{props.question.optionOne.text}</div>
      </Link>
      <Link to={'/'}>
        <div>{props.question.optionTwo.text}</div>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ questions }) => {
  const question = Object.values(questions).find(
    (question) => question.id === useParams().id
  );
  return {
    question: question,
  };
};

export default connect(mapStateToProps)(QuestionPollPage);
