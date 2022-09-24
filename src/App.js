import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Food",
    amount: 120,
    date: new Date(2021, 8, 22),
  },
  { id: "e2", title: "Phone bill", amount: 60, date: new Date(2022, 8, 22) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 108,
    date: new Date(2020, 8, 21),
  },
  {
    id: "e4",
    title: "Utility",
    amount: 150,
    date: new Date(2021, 8, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
