import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState"; // global state
import { numberWithCommas } from "../utils-funcs/to-commas";

const IncomeExpenses = () => {
  // get state: useContext because we are not passing it as props, we want whole transactions objects
  const { transactions } = useContext(GlobalContext);

  // get amounts
  const amounts = transactions.map(transaction => transaction.amount);

  // get incomes
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
  // get expenses
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          -${numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
