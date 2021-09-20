import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onSetValues,
} from '../../common/helpers';
import { history, routes } from '../../core/router';
import { mapAccountListFromApiToViewModel } from '../../common/mapper/account-list.mapper';
import { getAccountList } from '../../common/api/account-list.api';
import { setAccountOptions } from './transfer.helpers';
import { formValidation } from './transfer.validation';
import { insertTransfer } from './transfer.api';
const params = history.getParams();

getAccountList().then((accountList) => {
  const accountListTransfer = mapAccountListFromApiToViewModel(accountList);
  setAccountOptions(accountListTransfer, params.id);
});

var today = new Date();

let day = today.getUTCDate();
let month = today.getUTCMonth() + 1;
let year = today.getUTCFullYear();

let transfer = {
  id: '',
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  date: `${year}-${month}-${day}`, // Si la fecha está vacía, coge la fecha actual
  email: '',
};

onUpdateField('select-account', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, id: value };
});
onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, iban: value };
  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});
onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, name: value };
  formValidation.validateField('name', transfer.name).then((result) => {
    onSetError('name', result);
  });
});

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, amount: value };
  formValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});
onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, concept: value };
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, notes: value };
});
onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, date: `${year}-${month}-${value}` };
});
onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, date: `${year}-${value}-${day}` };
});

onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, date: `${value}-${month}-${day}` };
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, email: value };
  formValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      insertTransfer(transfer).then((apiTransfer) => {
        history.back();
      });
    }
  });
});
