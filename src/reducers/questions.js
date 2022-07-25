import { RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_NEW_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
