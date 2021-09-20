// elementos se cambiar de origen a destino

export const mapMovementsFromApiToViewModel = (movements) => {
  return movements.map((movement) => mapMovemetFromApiToViewModel(movement));
};

const mapMovemetFromApiToViewModel = (movement) => ({
  ...movement,
  amount: `${movement.amount} €`,
  balance: `${movement.balance} €`,
  transaction: new Date(movement.transaction).toLocaleDateString(),
  realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
});
