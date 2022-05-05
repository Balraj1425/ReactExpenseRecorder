import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  //moved to ExpensesList component
//   let expensesContent = <p>No expenses found.</p>;

//   if ( filteredExpenses.length > 0 ) {
//     expensesContent = filteredExpenses.map((expense) => (
//         <ExpenseItem
//           key={expense.id}
//           title={expense.title}
//           date={expense.date}
//           amount={expense.amount}
//         ></ExpenseItem>
//       ));
//   }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expenses;
