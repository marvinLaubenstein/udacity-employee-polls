import { connect } from 'react-redux';
import './question-card.css';
import { Link } from 'react-router-dom';

const QuestionCard = (props) => {
  return (
    <div className="list-item-question-card">
      <li key={props.question.id}>
        <div>{'Author: ' + props.question.author}</div>
        <div>{'timestamp: ' + props.question.timestamp}</div>
        <Link to={'questions/' + props.question.id}>
          <div>Show me the question</div>
        </Link>
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
