// Mostrat cuentas
//pasar a transeferencia y movimientos
import { getMovements } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsFromApiToViewModel } from './movements.mapper';
import { onSetValues } from '../../common/helpers';
import { history } from '../../core/router';
import { mapAccountFromApiToViewModel } from '../../common/mapper/account.mapper';
import { getAccount } from '../../common/api/account.api';
let account = {
  id: '',
  type: '',
  alias: '',
  balance: '',
};

// get actual data
const params = history.getParams();

getAccount(params.id).then((apiAccount) => {
  account = mapAccountFromApiToViewModel(apiAccount);
  console.log(account);
  onSetValues(account);
});

getMovements().then((movements) => {
  //console.log(movements);
  const viewModelMovements = mapMovementsFromApiToViewModel(movements).filter(
    (movement) => movement.accountId == params.id
  );
  addMovementRows(viewModelMovements);
});
