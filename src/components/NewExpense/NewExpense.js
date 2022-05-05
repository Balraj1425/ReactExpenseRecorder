import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [hideForm, setHideForm] = useState(true);

    //this custom event handler is used to get the data from child component to parent component.
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const formHideHandler = (formHidden) =>{
        setHideForm(formHidden);
    }

    const addClickHandler = () => { 
        setHideForm(false);
    };

    if (hideForm) {
        return <div className="new-expense"><button onClick={addClickHandler}>Add New Expense</button></div>
    }

    if (!hideForm) {
        return(
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={formHideHandler}></ExpenseForm>
            </div>
        )
    }
}

export default NewExpense