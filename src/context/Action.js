export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const FETCH_TRANSACTION = "FETCH_TRANSACTION";

export function fetchTransaction(transaction) {
  return {
    type: FETCH_TRANSACTION,
    payload: transaction,
  };
}

export function deleteTransaction(id) {
  return {
    type: DELETE_TRANSACTION,
    payload: id,
  };
}

export function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
}

//asynchronous code

export const handleFetchTransaction = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://expense-tracker-b5774-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json"
    );
    const data = await response.json();
    const transactions = [];
    for (const key in data) {
      transactions.push({
        id: key,
        title: data[key].title,
        amount: data[key].amount,
      });
    }
    dispatch(fetchTransaction(transactions));
  };
};

export const handleAddTransaction = (transaction) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://expense-tracker-b5774-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json",
      {
        method: "POST",
        body: JSON.stringify(transaction),
      }
    );
    const data = await response.json();
    const newTransaction = { id: data.name, ...transaction };
    dispatch(addTransaction(newTransaction));
  };
};

export const handleDeleteTransaction = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://expense-tracker-b5774-default-rtdb.asia-southeast1.firebasedatabase.app/transactions/${id}.json`,
      {
        method: "DELETE",
      }
    );
    dispatch(deleteTransaction(id));
  };
};
