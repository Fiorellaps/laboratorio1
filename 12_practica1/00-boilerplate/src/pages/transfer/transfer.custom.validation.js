import { parseMessageWithCustomArgs } from '@lemoncode/fonk';

const validatorType = 'MY_DATE_VALIDATOR';

let defaultMessage = 'La fecha no tiene un formato correcto.';
export const setErrorMessage = (message) => (defaultMessage = message);

const isValidDate = (value) => {
  const splittedDate = value.split('-');
  const year = parseInt(splittedDate[0]);
  const month = parseInt(splittedDate[1]);
  const day = parseInt(splittedDate[2]);

  if (day > 29 && month === 2) {
    //console.log('KO 1');
    return false;
  } else if (
    day > 30 &&
    (month === 4 || month == 6 || month == 9 || month === 11)
  ) {
    //console.log('KO 2');
    return false;
  } else if (
    year > 0 &&
    year === new Date().getFullYear() &&
    month > 0 &&
    month < 13 &&
    day > 0 &&
    day < 32
  ) {
    //console.log('OK');
    return true;
  }
};

export const dateValidator = (fieldValidatorArgs) => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    message: parseMessageWithCustomArgs(message),
  };

  console.log(value);
  if (isValidDate(value)) {
    //console.log('OK');
    validationResult.succeeded = true;
    validationResult.message = '';
  }

  return validationResult;
};
