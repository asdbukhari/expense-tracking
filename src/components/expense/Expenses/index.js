import Card from "../../UI/Card";
import ExpenseItem from "../ExpenseItem";

const Expenses = (props) => {
  const expenses = props.data;
  return (
    <>
      <Card>
        {expenses.map((expense) => {
          return <ExpenseItem expenseItem={expense} />;
        })}
      </Card>
    </>
  );
};

export default Expenses;
