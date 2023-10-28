import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense= (props)=>
{   function saveExpenseDataHandler(enteredExpenseData)
    {
        const expenseData={...enteredExpenseData,id:Math.random().toString()};
        props.onAddExpenseHandler(expenseData)
        console.log("In NewExpense");
        console.log(expenseData);
    }
    return(
        <div className="new-expense">

            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            
        </div>
    );
}

export default NewExpense;