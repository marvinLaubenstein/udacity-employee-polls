import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddNewQuestion } from '../../actions/questions';
import Navbar from '../navbar/Navbar';
import './questionaddingpage.css';

const QuestionAddingPage = ({ dispatch }) => {
  const [firstAnswer, setFirstAnswer] = useState([]);
  const [secondAnswer, setSecondAnswer] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.target.id === 'question1'
      ? setFirstAnswer(e.target.value)
      : setSecondAnswer(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (firstAnswer || secondAnswer) {
      setError(true);
    } else {
      dispatch(handleAddNewQuestion(firstAnswer, secondAnswer));
      setError(false);
      navigate('/');
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="question-adding-page-title-wrapper">
        <h1 className="question-adding-page-title">Would you rather</h1>

        {error ? (
          <h3
            className="question-adding-page-errormessage"
            data-testid="error-title"
          >
            Please enter two answers!
          </h3>
        ) : null}
      </div>
      <div className="question-adding-page-answer-one">
        <label>Answer 1:</label>
        <input
          className="question-adding-page-input"
          data-testid="answer-one-input"
          type="text"
          id="question1"
          onChange={handleChange}
          data-testid="answer-one-input"
        ></input>
      </div>
      <div className="question-adding-page-answer-two">
        <label>Answer 2:</label>
        <input
          className="question-adding-page-input"
          data-testid="answer-two-input"
          type="text"
          id="question2"
          onChange={handleChange}
          data-testid="answer-two-input"
        ></input>
      </div>

      <button
        className="question-adding-page-button"
        onClick={handleClick}
        data-testid="submit-button"
      >
        Add them !
      </button>
    </div>
  );
};

export default connect()(QuestionAddingPage);
