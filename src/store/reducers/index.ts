const initialState = {
    questions: [
        {
            type: 'TEXT'
        },
        {
            type: 'TEXT'
        }
    ]
};

function app(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  return state;
}

export { app };