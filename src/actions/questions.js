import { saveQuestion } from '../utils/api';
import { addNewQuestionToUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addNewQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question,
  };
}
export function handleAddNewQuestion(answerOne, answerTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion(answerOne, answerTwo, authedUser).then((question) => {
      dispatch(addNewQuestion(question));
      dispatch(addNewQuestionToUser(question));
    });
  };
}
