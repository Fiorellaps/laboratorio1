// elementos se cambiar de origen a destino

export const mapAccountListFromApiToViewModel = (accountList) => {
  return accountList.map((account) => mapAccountFromApiToViewModel(account));
};

const mapAccountFromApiToViewModel = (account) => ({
  id: account.id,
  iban: account.iban,
  name: account.name,
  balance: `${account.balance} €`,
  lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
});
