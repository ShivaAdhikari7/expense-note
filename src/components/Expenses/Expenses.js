import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import React from 'react'
import Card from '../UI/Card';
 const Expenses = (props) => {
    return(

        <Card className='expenses'>
        {
                props.items.map(
                        expense =>(
                                <ExpenseItem 
                                date={expense.date}
                                title={expense.title}
                                amount={expense.amount} />

                        )
                )
        }
            <ExpenseItem 
                    date={props.items[0].date}
                    title={props.items[0].title}
                    amount={props.items[0].amount} />

           
       </Card>
    );
}
export default Expenses