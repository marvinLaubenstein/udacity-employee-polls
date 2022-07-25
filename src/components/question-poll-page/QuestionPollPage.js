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

  return (
    <div className="question-poll-question-poll">
      <Navbar></Navbar>
      {'This is Question: ' + props.question.id}
      <div>Choose one !</div>
      <div className="answer-wrapper">
        <button
          id="answer1"
          onClick={handleAnswer}
          className="question-poll-option-one"
        >
          {props.question.optionOne.text}
        </button>
        <button
          id="answer2"
          onClick={handleAnswer}
          className="question-poll-option-two"
        >
          {props.question.optionTwo.text}
        </button>
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
