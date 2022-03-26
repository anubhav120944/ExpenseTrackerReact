import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { GlobalContext } from "../context/GlobalState";
import { useDispatch } from "react-redux";
import { handleAddTransaction } from "../context/Action";



const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      title: text,
      amount: Number(amount) // or we can use +amount
    }
    dispatch(handleAddTransaction(newTransaction));
    setText('');
    setAmount('');
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
