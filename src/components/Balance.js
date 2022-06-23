import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function moneyFormatter(props) {
  let p = props.toFixed(2).split(".");
  return "₺ " + p[0] + "." + p[1];
}
export const Balance = () => {
  const { transactions } = useContext(AppContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((a, item) => (a += item));
  return (
    <>
      <h4>Bütçe</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};
