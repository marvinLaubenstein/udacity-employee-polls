export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_NEW_QUESTION_TO_USER = 'ADD_NEW_QUESTION_TO_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
export function addNewQuestionToUser({ author, id }) {
  return {
    type: ADD_NEW_QUESTION_TO_USER,
    author,
    qid: id,
  };
}
