import ExpenseDate from "../ExpenseDate";
import Card from "../../UI/Card";

import "./expenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expenseBox">
      <ExpenseDate date={props.expenseItem.date} />
      <h1 className="expenseBox__title">{props.expenseItem.title}</h1>
      <small className="expenseBox__price">pkr {props.expenseItem.price}</small>
    </Card>
  );
};

export default ExpenseItem;
