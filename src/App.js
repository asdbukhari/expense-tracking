import Expenses from "./components/expense/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Internet Packages",
      price: 600,
      date: new Date(2021, 5, 17),
    },
    {
      id: "e1",
      title: "Bike Petrol",
      price: 2500,
      date: new Date(2021, 9, 17),
    },
    {
      id: "e1",
      title: "Lunch",
      price: 1200,
      date: new Date(2021, 7, 17),
    },
    {
      id: "e1",
      title: "Others",
      price: 5000,
      date: new Date(2021, 6, 17),
    },
  ];

  return (
    <>
      <h2>Let's get started!</h2>
      <Expenses data={expenses} />
    </>
  );
}

export default App;
