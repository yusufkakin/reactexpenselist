import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseHandler(expenseData);
  };

  function revealForm() {
    setShowForm(true);
  }
  function hideForm() {
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
      {!showForm && <button onClick={revealForm}>Add New Expense</button>}
      {showForm && <button onClick={hideForm}>Cancel</button>}
    </div>
  );
}

export default NewExpense;
