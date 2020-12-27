import React, { useState, useContext } from "react"; // useState: modify fields, useContext to pull out state/state funcs
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  // form requires state hook
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // add func from state
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: parseInt(amount)
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          {/* connect state to inputs */}
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
