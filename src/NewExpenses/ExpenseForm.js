import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm= (props)=>
{
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");
    const titleChangeHandler=(event)=>
    {
        setEnteredTitle(event.target.value);
        //If state update depends on previous state
        // setUserInput((prevState)=>{return {...prevState,enteredTitle:event.target.value}});
        // console.log(enteredTitle);
    }
    const amountChangeHandler=(event)=>
    {
        setEnteredAmount(event.target.value);
        // console.log(enteredAmount);
    }
    const dateChangeHandler=(event)=>
    {
        setEnteredDate(event.target.value);
        // console.log(enteredDate);
     
    }
    const storeHandler=( event )=>
    {
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    const cancelHandler = ()=>
    {
        props.onCancelHandler();
    }

    return(
        <form onSubmit={storeHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label><input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label><input value={enteredAmount} type="number" min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label><input value={enteredDate} type="date" min="2019-01-01"
        max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
         
            <div className="new-expense__actions">
            <button onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
            </div>

        </form>
    );
}

export default ExpenseForm;