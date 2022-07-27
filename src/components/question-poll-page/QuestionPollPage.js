import React, { useState } from 'react';
import { connect } from 'react-redux';
import './question-poll-page.css';
import { useParams, useNavigate } from 'react-router-dom';
import { handleSelectedAnswer } from '../../actions/questions';
import Navbar from '../navbar/Navbar';

const QuestionPollPage = ({ question, authedUser, users, dispatch }) => {
  const navigate = useNavigate();
  const [voted, setVoted] = useState(
    question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
  );

  const handleAnswer = (e) => {
    e.preventDefault();
    e.target.id === 'answer1'
      ? dispatch(handleSelectedAnswer(question.id, 'optionOne'))
      : dispatch(handleSelectedAnswer(question.id, 'optionTwo'));
    setVoted(true);
    navigate('/');
  };

  const getClassName = (questionNumber, question) => {
    const answerSelected = question.votes.includes(authedUser);
    return `question-poll-option-${questionNumber}${
      answerSelected ? '-selected' : ''
    }`;
  };

  const getAnswerPercentage = (answerNumber) => {
    const voteNumber =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const votePercentage =
      answerNumber === 'one'
        ? calcPercentage(question.optionOne.votes.length, voteNumber)
        : calcPercentage(question.optionTwo.votes.length, voteNumber);
    return votePercentage;
  };

  const calcPercentage = (answerVotes, questionVotes) => {
    return Math.round((answerVotes / questionVotes) * 100) + ' %';
  };

  const generatePercentageString = (answerNumber, userVotes) => {
    return (
      getAnswerPercentage(answerNumber) +
      '  (' +
      userVotes +
      `${userVotes > 1 || userVotes === 0 ? ' Votes' : ' Vote'}` +
      ')'
    );
  };

  return (
    <div className="question-poll-question-poll">
      <Navbar></Navbar>
      <img
        src={users[question.author]?.avatarURL}
        alt="User"
        className="question-poll-avatar"
      ></img>
      <div className="question-title">Would You Rather</div>
      <div className="question-subtitle">
        {'This is Question: ' + question.id}
      </div>
      <div className="answer-wrapper">
        <button
          id="answer1"
          className={getClassName('one', question.optionOne)}
          onClick={voted ? null : handleAnswer}
          style={voted ? { cursor: 'default' } : { cursor: 'pointer' }}
        >
          <div>{question.optionOne.text}</div>
          <div>
            {voted
              ? generatePercentageString('one', question.optionOne.votes.length)
              : null}
          </div>
        </button>
        <button
          id="answer2"
          className={getClassName('two', question.optionTwo)}
          style={voted ? { cursor: 'default' } : { cursor: 'pointer' }}
          onClick={voted ? null : handleAnswer}
        >
          <div>{question.optionTwo.text}</div>
          {voted
            ? generatePercentageString('two', question.optionTwo.votes.length)
            : null}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
  const question = Object.values(questions).find(
    (question) => question.id === useParams().id
  );

  return {
    question: question,
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(QuestionPollPage);
