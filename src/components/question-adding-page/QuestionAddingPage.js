import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddNewQuestion } from '../../actions/questions';

const QuestionAddingPage = ({ dispatch }) => {
  const [answerOne, setAnswerOne] = useState([]);
  const [answerTwo, setAnswerTwo] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.target.id === 'question1'
      ? setAnswerOne(e.target.value)
      : setAnswerTwo(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(handleAddNewQuestion(answerOne, answerTwo));
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
