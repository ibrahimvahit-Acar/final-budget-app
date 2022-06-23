import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return "₺ " + p[0] + "." + p[1];
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(AppContext);
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {transaction.date}
      </span>
      <span>
        {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
