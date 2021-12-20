import Expenses from "./components/Expense/Expenses";
import GenerateExpense from "./components/NewExpense/GenerateExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Internet Packages",
      price: 600,
      date: new Date(2021, 5, 17),
    },
    {
      id: "e2",
      title: "Bike Petrol",
      price: 2500,
      date: new Date(2021, 9, 17),
    },
    {
      id: "e3",
      title: "Lunch",
      price: 1200,
      date: new Date(2021, 7, 17),
    },
    {
      id: "e4",
      title: "Others",
      price: 5000,
      date: new Date(2021, 6, 17),
    },
  ];

  const saveExpenseDate = (expense) => {
    console.log("data");
    console.log(expense);
  };

  return (
    <>
      <GenerateExpense onSaveExpenseDate={saveExpenseDate} />
      <Expenses data={expenses} />
    </>
  );
}

export default App;
