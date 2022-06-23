import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { AppContext } from '../context/AppContext';
export const TransactionList = () => {
  const { transactions } = useContext(AppContext);
  return (
    <>
      <h3>Geçmiş</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}