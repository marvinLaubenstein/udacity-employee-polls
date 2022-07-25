import { connect } from 'react-redux';
import './question-poll-page.css';
import { useParams, useNavigate } from 'react-router-dom';
import { handleSelectedAnswer } from '../../actions/questions';
import Navbar from '../navbar/Navbar';

const QuestionPollPage = (props) => {
  const navigate = useNavigate();

  const handleAnswer = (e) => {
    console.log(e.target.id);
    console.log(props.question.id);
    e.preventDefault();
    e.target.id === 'answer1'
      ? props.dispatch(handleSelectedAnswer(props.question.id, 'optionOne'))
      : props.dispatch(handleSelectedAnswer(props.question.id, 'optionTwo'));
    navigate('/');
  };

  const votedQuestion = () => {
    return (
      props.question.optionOne.votes.includes(props.authedUser) ||
      props.question.optionTwo.votes.includes(props.authedUser)
    );
  };

  const getClassName = (questionNumber, question) => {
    const answerSelected = question.votes.includes(props.authedUser);
    return `question-poll-option-${questionNumber}${
      answerSelected ? '-selected' : ''
    }`;
  };

  return (
    <div className="question-poll-question-poll">
      <Navbar></Navbar>

      <div className="question-title">Choose one !</div>
      <div className="question-subtitle">
        {'This is Question: ' + props.question.id}
      </div>
      {votedQuestion() ? (
        <div className="answer-wrapper">
          <button
            id="answer1"
            className={getClassName('one', props.question.optionOne)}
            style={{ cursor: 'default' }}
          >
            {props.question.optionOne.text}
          </button>
          <button
            id="answer2"
            className={getClassName('two', props.question.optionTwo)}
            style={{ cursor: 'default' }}
          >
            {props.question.optionTwo.text}
          </button>
        </div>
      ) : (
        <div className="answer-wrapper">
          <button
            id="answer1"
            onClick={handleAnswer}
            className={getClassName('one', props.question.optionOne)}
          >
            {props.question.optionOne.text}
          </button>
          <button
            id="answer2"
            onClick={handleAnswer}
            className={getClassName('two', props.question.optionTwo)}
          >
            {props.question.optionTwo.text}
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser }) => {
  const question = Object.values(questions).find(
    (question) => question.id === useParams().id
  );

  return {
    question: question,
    authedUser,
  };
};

export default connect(mapStateToProps)(QuestionPollPage);
