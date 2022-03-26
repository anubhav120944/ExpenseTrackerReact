import React, { useEffect } from "react";
import Transaction from "./Transaction";

// import { GlobalContext } from "../context/GlobalState";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleFetchTransaction } from "../context/Action";

const TransactionList = () => {
  const { transactions } = useSelector((state) => state.Expense);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchTransaction());
  }, [dispatch]);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
