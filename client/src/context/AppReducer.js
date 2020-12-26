/* eslint-disable import/no-anonymous-default-export */
// add line above to remove stupid eslint warning

// reducer to respond to actions & update state pass to component
// receives payload & type
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state, // cannot directly change state, need to spread first
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};
