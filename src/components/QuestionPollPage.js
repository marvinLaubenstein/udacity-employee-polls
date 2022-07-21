import { connect } from 'react-redux';
import './question-poll-page.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const QuestionPollPage = (props) => {
  return (
    <div className="question-poll-question-poll">
      {'This is Question: ' + props.question.id}
      <div>Choose one !</div>
      <div className="answer-wrapper">
        <Link to={'/'}>
          <div className="question-poll-option-one">
            {props.question.optionOne.text}
          </div>
        </Link>
        <Link to={'/'}>
          <div className="question-poll-option-two">
            {props.question.optionTwo.text}
          </div>
        </Link>
      </div>
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
