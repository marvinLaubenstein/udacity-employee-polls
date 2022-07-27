import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addNewQuestionToUser, addQuestionAnswerToUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const ADD_AUTH_USER_ANSWER_QUESTION = 'ADD_AUTH_USER_ANSWER_QUESTION';

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

function addAuthUserAnswerQuestion(author, qid, answer) {
  return {
    type: ADD_AUTH_USER_ANSWER_QUESTION,
    author,
    qid,
    answer,
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

export function handleSelectedAnswer(questionId, answer) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer(authedUser, questionId, answer).then(() => {
      dispatch(addAuthUserAnswerQuestion(authedUser, questionId, answer));
      dispatch(addQuestionAnswerToUser(authedUser, questionId, answer));
    });
  };
}
