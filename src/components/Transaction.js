import React, { useContext } from "react"; // useContext to pull out state
import { GlobalContext } from "../context/GlobalState"; // global state

// props desctructure
const Transaction = ({ transaction }) => {
  // delete func from state
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <div>
      <li className={transaction.amount > 0 ? "plus" : "minus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)} {/* display num as positive, regardless of array. Use sign instead */}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
