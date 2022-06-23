import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const initialState = {
  transactions: [
    { id: Math.floor(Math.random() * 100000000 ), text: "Alışveriş",date:'2022-05-10', amount: -50 },
    { id: Math.floor(Math.random() * 100000000 ), text: "Tatil",date:'2022-05-10', amount: -900 },
    {id: Math.floor(Math.random() * 100000000 ), text: "Maaş",date:'2022-05-10', amount: 7000 },
  ]
}
export const AppContext = createContext(initialState);
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  return (<AppContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </AppContext.Provider>);
}