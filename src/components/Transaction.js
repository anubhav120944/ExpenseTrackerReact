import React from "react";
// import { GlobalContext } from "../context/GlobalState";
import { useDispatch } from "react-redux";
import { handleDeleteTransaction } from "../context/Action";

const Transaction = ({ transaction }) => {
  // const { deleteTransaction } = useContext(GlobalContext);
  const dispatch = useDispatch();

  // Get sign
  const sign = transaction.amount < 0 ? "-" : "";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.title}{" "}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => dispatch(handleDeleteTransaction(transaction.id))}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
