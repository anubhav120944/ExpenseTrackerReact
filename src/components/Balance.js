import React from 'react'
// import { GlobalContext } from "../context/GlobalState";
import { useSelector } from 'react-redux';

const Balance = () => {
  const { transactions } = useSelector((state)=> state.Expense);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <>
      <h4 style={{color: 'white'}}>Your Balance</h4>
      <h1>₹{total}</h1>
    </>
  )
}

export default Balance
