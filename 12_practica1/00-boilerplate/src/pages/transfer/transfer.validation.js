import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { minNumber } from '@lemoncode/fonk-min-number-validator';
import { dateValidator } from './transfer.custom.validation';
const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: iban.validator,
        message: 'El formato IBAN es inválido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: minNumber.validator,
        customArgs: { minValue: 0, inclusive: false },
        message: 'El importe debe ser mayor que 0',
      },
      {
        validator: isNumber.validator,
        message: 'El importe debe ser numérico',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.email,
        message: 'Email no valido',
      },
    ],
    date: [
      {
        validator: dateValidator,
      },
    ],
  },
};
export const formValidation = createFormValidation(validationSchema);
