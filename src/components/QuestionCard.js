import { connect } from 'react-redux';
import './question-card.css';

const QuestionCard = (props) => {
  return (
    <div className="list-item-question-card">
      <li key={props.id}>
        <div>{props.id}</div>
        <div>{props.question.author}</div>
        <div>{props.question.timestamp}</div>
        <div>{props.question.optionOne.text}</div>
        <div>{props.question.optionTwo.text}</div>
      </li>
    </div>
  );
};

const mapStateToProps = ({ questions }, { questionID }) => {
  const question = questions[questionID];
  return {
    question: question,
  };
};

export default connect(mapStateToProps)(QuestionCard);
