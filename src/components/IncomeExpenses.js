import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return "₺ " + p[0] + "." + p[1];
}
export const IncomeExpenses = () => {
  const { transactions } = useContext(AppContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts.filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <div className="inc-exp-container">
      <div>
        <h2>Gelir</h2>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      <div>
        <h2>Harcanan</h2>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};
