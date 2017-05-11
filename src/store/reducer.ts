import {
    SUBMIT_ANSWER,
    UPDATE_ANSWER,
} from './action_creators';
import validate from '../validate';

const initialState = {
    questions: [
        {
            type: 'TEXT',
            label: 'First name?',
            validations: ['required'],
        },
        {
            type: 'TEXT',
            label: 'Last name?',
            validations: ['required'],
        },
        {
            type: 'TEXT',
            label: 'Age?',
            validations: ['required'],
        },
        {
            type: 'TEXT',
            label: 'Lirst name?',
            validations: ['required'],
        },
        {
            type: 'TEXT',
            label: 'Last name?',
            validations: ['required'],
        },
        {
            type: 'TEXT',
            label: 'Age?',
            validations: ['required'],
        }
    ],
    activeQuestion: 0,
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
        default:
            return state;
    }
}

function updateAnswer(state, payload) {
    let qn = state.questions[payload.index];
    qn.answer = payload.answer;
    qn.errorText = '';
    const newQns = [...state.questions.slice(0, payload.index), qn, ...state.questions.slice(payload.index + 1)];

    return {
        questions: newQns,
        activeQuestion: state.activeQuestion,
    };
}

function submitAnswer(state, payload) {
    let qn = state.questions[state.activeQuestion];
    let activeQnIndex = state.activeQuestion;

    const isValid = validate(qn.validations, qn.answer);

    if (isValid) {
        activeQnIndex = activeQnIndex + 1;
        qn.errorText = '';
    } else {
        qn.errorText = 'Wrong!';
    }
    const newQnsSub =
        [...state.questions.slice(0, payload.index), qn, ...state.questions.slice(payload.index + 1)];

    return {
        questions: newQnsSub,
        activeQuestion: activeQnIndex,
    };
}

export { app };
