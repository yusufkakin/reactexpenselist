import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Food",
      amount: 120,
      date: new Date(2022, 8, 22),
    },
    { id: "e2", title: "Phone bill", amount: 60, date: new Date(2022, 8, 22) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 108,
      date: new Date(2022, 8, 21),
    },
    {
      id: "e4",
      title: "Utility",
      amount: 150,
      date: new Date(2022, 8, 20),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onSaveExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
