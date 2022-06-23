import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import './AddTransaction.css';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const { addTransaction } = useContext(AppContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date,
    };
    setDate("");
    setText("");
    setAmount("");
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Yeni İşlem</h3>
      <form onSubmit={onSubmit}>
        <div className="new-transaction" >
          <label className="new">İşlem</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="İşlemi yazın..."
          />
        </div>
        <div className="new-transaction">
          <label className="new">
            Tutar <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Tutarı girin..."
          />
        </div>
        <div className="new-transaction">
          <label className="new">
            Tarih <br />
          </label>
          <div>
            <FontAwesomeIcon icon={faCalendarDays} />
            <input
            type="date"
            value={date}
            onChange= {(e) => setDate(e.target.value) }
            />
          </div>
        </div>
        <button className="new-transaction-btn">İşlemi Ekle</button>
      </form>
    </>
  );
};
