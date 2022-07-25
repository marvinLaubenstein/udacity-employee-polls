import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddNewQuestion } from '../../actions/questions';

const QuestionAddingPage = ({ dispatch }) => {
  const [firstAnswer, setFirstAnswer] = useState([]);
  const [secondAnswer, setSecondAnswer] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.target.id === 'question1'
      ? setFirstAnswer(e.target.value)
      : setSecondAnswer(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(handleAddNewQuestion(firstAnswer, secondAnswer));
    navigate('/');
  };

  return (
    <div>
      <label>Answer 1:</label>
      <input type="text" id="question1" onChange={handleChange}></input>
      <label>Answer 2:</label>
      <input type="text" id="question2" onChange={handleChange}></input>

      <button onClick={handleClick}>Add them !</button>
    </div>
  );
};

export default connect()(QuestionAddingPage);
