import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
// import { useState } from 'react';
function ExpenseItem(props)
{   
    //  const [title, setTitle]=useState(props.expense.title);
//     function changeTitleHandler()
//     {
//         setTitle("Updated");
//         console.log(title);
//     }     
    return (
          
            
       

         <div className='expense-item'>
        <ExpenseDate date={props.expense.date}/>
        <div className='expense-item__description'><h2>{props.expense.title}</h2></div>
        <div className='expense-item__price'>${props.expense.amount}</div>
        {/* <button onClick={changeTitleHandler}>Change Title</button> */}
        
        </div>
    

    );
}

export default ExpenseItem;