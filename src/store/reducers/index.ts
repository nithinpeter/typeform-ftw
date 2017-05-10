const initialState = {
    questions: [
        {
            type: 'TEXT',
            label: 'Lirst name?',
            validators: ['required'],
        },
        {
            type: 'TEXT',
            label: 'Last name?',
            validators: ['required'],
        },
        {
            type: 'TEXT',
            label: 'Age?',
            validators: ['required'],
        }
    ],
    activeQuestion: 1,
};

function app(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  return state;
}

export { app };
