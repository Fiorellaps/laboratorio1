// Mostrat cuentas
//pasar a transeferencia y movimientos
import { getAccountList } from '../../common/api/account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from '../../common/mapper/account-list.mapper';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

getAccountList().then((accountList) => {
  const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
  accountList = addAccountRows(viewModelAccountList);
  viewModelAccountList.forEach((account) => {
    onUpdateField(`select-${account.id}`, (event) => {
      const route = event.target.value;
      history.push(route);
    });
  });
});

//JSON SERVER

// 1:15 h
