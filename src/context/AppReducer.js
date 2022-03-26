import { DELETE_TRANSACTION, ADD_TRANSACTION, FETCH_TRANSACTION } from "./Action";
const initialState = {
  transactions: [],
};

export function ExpenseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
}
