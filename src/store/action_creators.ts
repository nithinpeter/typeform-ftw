export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export const updateAnswer = (index, answer) => {
    return {
        type: UPDATE_ANSWER,
        payload: {
            index,
            answer,
        }
    };
};

export const submitAnswer = (index) => {
    return {
        type: SUBMIT_ANSWER,
        payload: {
            index,
        },
    };
};
