import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //we can either use different useState for all inputs or create a common useState with and object for form data 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //single useState to capture formData
    // const [ userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); //if using individual useState and this is the preffered approach

        //in case we are using a common useState for entire formdata, we need to first copy the existing data using spread operator so that we do not loose existing data and then override the value as shown below

        //the one below is not the correct way we should pass a function to setUserinput with previous state as parameter and the modify the content
        //approch 1(wrong):
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        //approch 2(correct):
        // setUserInput((userInput)=>{
        //     return {
        //         ...userInput,
        //         enteredTitle: event.target.value,
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((userInput)=>{
        //     return {
        //         ...userInput,
        //         enteredAmount: event.target.value,
        //     }
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((userInput)=>{
        //     return {
        //         ...userInput,
        //         enteredDate: event.target.value,
        //     }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // this is for passing data from child to parent component, the expenseData passed from here will now be available in the parent component that is NewExpense
        props.onSaveExpenseData(expenseData);
        props.onHideForm(true);

        //two way data binding achieved by adding value attribute and now we can reset thevalues to initial state
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const cancelHandler = () => {
        props.onHideForm(true);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={cancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm