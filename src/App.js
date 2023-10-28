import { useState } from 'react';
import './App.css';
import Expenses from "./Components/Expenses";
import NewExpense from "./NewExpenses/NewExpense";
//import userEvent from '@testing-library/user-event';


const DUMMY_EXPENSES =
  [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ];

function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const appSaveExpenseData=(expenseDataApp1)=>
  {
    //const expenseDataApp={...expenseDataApp1};
    setExpenses((prevExpenses)=>{return [ expenseDataApp1, ...prevExpenses]})
    console.log({expenseDataApp1});
    console.log({expenses});

    //console.log("In App");
    //console.log(expenseDataApp);
    
  }
  return (
    <div>
      
    <NewExpense onAddExpenseHandler={appSaveExpenseData}/>
    <Expenses expense={expenses}/>
   
    </div>
  );
}

export default App;
