import React, { useContext } from "react";
// context api
import { GlobalContext } from "../context/GlobalState";
// components
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(item => (
          <Transaction transaction={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
