/* eslint-disable import/no-anonymous-default-export */
// add line above to remove stupid eslint warning

// reducer to respond to actions & update state pass to component
// receives payload & type
export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload
      };
    case "ADD_TRANSACTION":
      return {
        ...state, // cannot directly change state, need to spread first
        transactions: [...state.transactions, action.payload]
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction._id !== action.payload) //mongodb _id
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
