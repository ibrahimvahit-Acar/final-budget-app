import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { AppProvider } from './context/AppContext';
import './App.css';

function BudgetApp() {
  return (
    <AppProvider>
      < Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransactionList />
        
      </div>
    </AppProvider>
  );
}
export default BudgetApp;
