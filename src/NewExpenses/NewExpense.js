import React from "react";
import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense= (props)=>
{  
    var [addNewExpenseContent,setAddNewewExpenseContent]=useState(<button onClick={addNewExpenseContentHandler}>Add new Expense</button>);
    
    function saveExpenseDataHandler(enteredExpenseData)
    {
        const expenseData={...enteredExpenseData,id:Math.random().toString()};
        props.onAddExpenseHandler(expenseData);
        setAddNewewExpenseContent(<button onClick={addNewExpenseContentHandler}>Add new Expense</button>);

        console.log("In NewExpense");
        console.log(expenseData);
    }

    function setCancelHandler()
    {
        setAddNewewExpenseContent(<button onClick={addNewExpenseContentHandler}>Add new Expense</button>);
    }
    function addNewExpenseContentHandler()
    {
        setAddNewewExpenseContent(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={setCancelHandler}/>)
    }

    return(
        <div className="new-expense">
            {addNewExpenseContent}
            
        </div>
    );
}

export default NewExpense;