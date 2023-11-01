import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "./Card";
import ExpenseChart from "./ExpenseChart";
function Expenses(props)
{
    var filteredExpenses=[];
    const [filteredYear, setFilteredYear] = useState('2020');
    // const [filterInfoText, setFilterInfoText] = useState("All");
    function  saveYear(selectedYear){

        setFilteredYear(selectedYear);
    }
    //     if(filteredYear==="2019"){ setFilterInfoText("2020 2021 & 2022");}
    //     else if(filteredYear==="2020"){ setFilterInfoText("2019 2021 & 2022");}
    //     else if(filteredYear==="2021"){ setFilterInfoText("2019 2020 & 2022");}
    // else{ setFilterInfoText("2019 2020 & 2021") }

    filteredExpenses=props.expense.filter((item) => 
    { 
     if(item.date.getFullYear().toString() === filteredYear)
     {
     return item;
     }
    });
    var expenseContent=<p>No expense item available for the filtered Year</p>
    if(filteredExpenses.length >0)
    {
        expenseContent= filteredExpenses.map((item) => <ExpenseItem key={item.id} expense={item} />);
    }
    return(
        <div>
        
        <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} onSaveYear={saveYear}/>
        {/* <p>Data for year {filterInfoText} is hidden</p> */}
        <ExpenseChart expenses={filteredExpenses}/>
        {expenseContent}
        </Card>
        </div>
    );
}

export default Expenses;