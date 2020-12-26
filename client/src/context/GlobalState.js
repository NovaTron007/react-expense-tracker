import React, { createContext, useReducer } from "react";
// import reducer
import AppReducer from "./AppReducer";

// initial state: global state
const initialState = {
  transactions: [
    { id: 1, text: "Camera", amount: -550 },
    { id: 2, text: "Laptop", amount: -1200 },
    { id: 3, text: "Books", amount: -200 },
    { id: 4, text: "Wages", amount: 23000 }
  ]
};

// 1. Create context for components to use, and pass in initial state. Import {GlobalContext} in components
export const GlobalContext = createContext(initialState);

// 2. Provider: Wrap all components (children). Provider provides access to state for child components
export const GlobalProvider = ({ children }) => {
  // 3. Pass in reducer so it can access state values and update them
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 5. Actions: send data to reducer to dispatch action
  // Delete transaction
  const deleteTransaction = id => {
    // send to (state, action.payload) in AppReducer
    dispatch({
      type: "DELETE_TRANSACTION", // state
      payload: id // action.payload
    });
  };

  // Add transaction
  const addTransaction = transaction => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  };

  return (
    // 4. Pass down state & actions
    <GlobalContext.Provider
      value={{
        // for useContext to access state
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
