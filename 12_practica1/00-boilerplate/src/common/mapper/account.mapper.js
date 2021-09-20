// elementos se cambiar de origen a destino

export const mapAccountFromApiToViewModel = (account) => ({
  ...account,
  balance: `${account.balance} €`,
  alias: account.name,
});

export const mapAccountFromViewModelToModel = (account) => ({
  ...account,
  name: account.alias,
});
