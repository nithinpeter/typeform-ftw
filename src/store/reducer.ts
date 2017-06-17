import { SUBMIT_ANSWER, UPDATE_ANSWER, NAVIGATE_NEXT, NAVIGATE_PREV, NAVIGATE_TO } from './action_creators';
import validate from '../helpers/validate';

const initialState = {
  questions: [
    {
      type: 'TEXT',
      label: 'First name?',
      validations: ['required'],
    },
    {
      type: 'BUTTON_GROUP',
      options: [{ label: 'Male', keyLabel: 'm', value: 'M' }, { label: 'Female', keyLabel: 'f', value: 'F' }],
      label: 'Gender?',
      validations: ['required'],
    },
    {
      type: 'TEXT',
      label: 'Last name?',
      validations: ['required'],
    },
    {
      type: 'TEXT',
      label: 'Email?',
      validations: ['required'],
    },
    {
      type: 'TEXT',
      label: 'Address?',
      validations: ['required'],
    },
    {
      type: 'TEXT',
      label: 'Phone?',
      validations: ['required'],
    },
  ],
  activeQuestion: 0,
  completedPercentage: 0,
};

function app(state, { type, payload }) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (type) {
    case UPDATE_ANSWER:
      return updateAnswer(state, payload);
    case SUBMIT_ANSWER:
      return submitAnswer(state, payload);
    case NAVIGATE_NEXT:
      return navigateNext(state);
    case NAVIGATE_PREV:
      return navigatePrev(state);
    case NAVIGATE_TO:
      return navigateTo(state, payload);
    default:
      return state;
  }
}

function updateAnswer(state, payload) {
  let qn = state.questions[payload.index];
  qn.answer = payload.answer;
  qn.errorText = '';
  const newQns = [...state.questions.slice(0, payload.index), qn, ...state.questions.slice(payload.index + 1)];

  return Object.assign({}, state, { questions: newQns });
}

function submitAnswer(state, payload) {
  let qn = state.questions[state.activeQuestion];
  let activeQnIndex = state.activeQuestion;

  const isValid = validate(qn.validations, qn.answer);

  if (isValid) {
    activeQnIndex = activeQnIndex + 1;
    qn.errorText = '';
    qn.isValid = true;
  } else {
    qn.errorText = 'required';
    qn.isValid = false;
  }
  const newQns = [...state.questions.slice(0, payload.index), qn, ...state.questions.slice(payload.index + 1)];

  const completedPercentage = _calculateCompletedPercentage(newQns);

  return {
    questions: newQns,
    activeQuestion: activeQnIndex,
    completedPercentage,
  };
}

function navigateNext(state) {
  if (state.activeQuestion < state.questions.length - 1) {
    return Object.assign({}, state, { activeQuestion: state.activeQuestion + 1 });
  }
  return state;
}

function navigatePrev(state) {
  if (state.activeQuestion > 0) {
    return Object.assign({}, state, { activeQuestion: state.activeQuestion - 1 });
  }
  return state;
}

function navigateTo(state, payload) {
  return Object.assign({}, state, { activeQuestion: payload.index });
}

function _calculateCompletedPercentage(qns) {
  const completed = qns.filter(qn => qn.isValid) || [];
  return Math.ceil(completed.length / qns.length * 100);
}

export { app };
