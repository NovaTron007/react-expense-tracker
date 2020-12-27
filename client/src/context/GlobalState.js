import React, { createContext, useReducer } from "react";
import axios from "axios";
// import reducer
import AppReducer from "./AppReducer";

// initial state: global state
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

// 1. Create context for components to use, and pass in initial state. Import {GlobalContext} in components
export const GlobalContext = createContext(initialState);

// 2. Provider: Wrap all components (children). Provider provides access to state for child components
export const GlobalProvider = ({ children }) => {
  // 3. Pass in reducer so it can access state values and update them
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 5. Actions: send data to reducer to dispatch action

  // Get transactions
  const getTransactions = async () => {
    try {
      const res = await axios.get("/api/v1/transactions");
      // send to (state, action.payload) in AppReducer
      dispatch({
        type: "GET_TRANSACTIONS", // state
        payload: res.data.data // backend result send to action.payload
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  };

  // Delete transaction
  const deleteTransaction = async id => {
    // send to (state, action.payload) in AppReducer
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION", // state
        payload: id // action.payload
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  };

  // Add transaction
  const addTransaction = async transaction => {
    // because we are sending data we need to set content type using headers
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/v1/transactions/", transaction, config); // send new transaction, config
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data // pass response
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  };

  return (
    // 4. Pass down state & actions
    <GlobalContext.Provider
      value={{
        // for useContext to access state
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
