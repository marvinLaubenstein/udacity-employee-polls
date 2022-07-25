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
export function handleAddNewQuestion(firstAnswer, secondAnswer) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();

    const question = await saveQuestion(firstAnswer, secondAnswer, authedUser);
    dispatch(addNewQuestion(question));
    dispatch(addNewQuestionToUser(question));
  };
}
