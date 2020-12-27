import React, { useContext, useEffect } from "react"; // useContext to pull out state
// context api
import { GlobalContext } from "../context/GlobalState";
// components
import Transaction from "./Transaction";

const TransactionList = () => {
  // destructure methods and data from GlobalContext
  const { transactions, getTransactions } = useContext(GlobalContext);

  // run on mount
  useEffect(() => {
    /*  eslint-disable-next-line react-hooks/exhaustive-deps */
    getTransactions(); // useDispatch is redux :(
  }, []);

  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(item => (
          <Transaction transaction={item} key={item._id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
