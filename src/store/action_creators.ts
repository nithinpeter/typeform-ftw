export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const NAVIGATE_NEXT = 'NAVIGATE_NEXT';
export const NAVIGATE_PREV = 'NAVIGATE_PREV';
export const NAVIGATE_TO = 'NAVIGATE_TO';
export const SUBMIT_FORM = 'SUBMIT_FORM';

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

export const navigateNext = () => {
    return {
        type: NAVIGATE_NEXT,
    };
};

export const navigatePrev = () => {
    return {
        type: NAVIGATE_PREV,
    };
};

export const navigateTo = (index) => {
    return {
        type: NAVIGATE_TO,
        payload: {
            index
        }
    };
};

export const submitForm = () => {
    return {
        type: SUBMIT_FORM,
    }
}
