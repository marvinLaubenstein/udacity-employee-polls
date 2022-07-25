import { connect } from 'react-redux';
import './question-card.css';
import { Link } from 'react-router-dom';

const QuestionCard = ({ answered, question }) => {
  return (
    <div className={`list-item-question-card${answered ? '-answered' : ''}`}>
      <li key={question.id} className="question-card-list">
        <div>{question.author}</div>
        <div>{question.timestamp}</div>
      </li>
      <Link to={'/questions/' + question.id}>Show me the question</Link>
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
