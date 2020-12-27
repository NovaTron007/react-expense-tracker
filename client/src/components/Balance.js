import React, { useContext } from "react"; // useContext to pull out state
import { GlobalContext } from "../context/GlobalState"; // global state
import { numberWithCommas } from "../utils-funcs/to-commas";

const Balance = () => {
  // get state: useContext because we are not passing it as props, we want whole transactions objects
  const { transactions } = useContext(GlobalContext); // get the state from GlobalState.js
  // get all amounts keys
  const amounts = transactions.map(transaction => transaction.amount);
  // add up add amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Balance</h4>
      <h1 id="balance">$ {numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
