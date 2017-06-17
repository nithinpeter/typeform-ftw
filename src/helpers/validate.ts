const _validators = {
  required: val => {
    return typeof val !== 'undefined';
  },
};

const validate = (validations: string[], value) => {
  let isValid = true;
  for (let i = 0; i < validations.length; i++) {
    const validation = validations[i];

    if (!_validators[validation](value)) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

export default validate;
