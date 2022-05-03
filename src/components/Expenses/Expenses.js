import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    return(
        <Card className='expenses'>
            {props.expenses.map((expense)=><ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}></ExpenseItem>)}
        </Card>
    )
}

export default Expenses