
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react'

let dummy_data=[
    {
        id:'e1',
        title:'School Fee',
        amount:250,
        date:new Date(2021, 5, 12)
    },
    {
        id:'e2',
        title:'Food',
        amount:2500,
        date:new Date(2021, 4, 12)
    },
    {
        id:'e1',
        title:'Entertainment',
        amount:1500,
        date:new Date(2021, 6, 12)
    },
    {
        id:'e1',
        title:'Extra',
        amount:100,
        date:new Date(2022, 5, 12)
    },

]
const  App=()=>{
    
    const [expenses, setExpenses] = useState(dummy_data);

    const addExpenseHandler =(expense) =>{
        const updatedExpenses =[expense, ...expenses]
        setExpenses(updatedExpenses)
    }
    return(
        <div>
            <NewExpense onAddExpense = {addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App