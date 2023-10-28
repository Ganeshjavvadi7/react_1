import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "./Card";
function Expenses(props)
{
    
    const [filteredYear, setFilteredYear] = useState("2020");
    const [filterInfoText, setFilterInfoText] = useState("All");
    function  saveYear(selectedYear){

        setFilteredYear(selectedYear);
        if(filteredYear==="2019"){ setFilterInfoText("2020 2021 & 2022");}
        else if(filteredYear==="2020"){ setFilterInfoText("2019 2021 & 2022");}
        else if(filteredYear==="2021"){ setFilterInfoText("2019 2020 & 2022");}
    else{ setFilterInfoText("2019 2020 & 2021") }
    console.log()
    const filteredExpenses=props.expense.filter((item) => 
     item.date.getFullYear() == filteredYear);
     console.log(filteredExpenses);


    }
    return(
        <div>
        
        <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} onSaveYear={saveYear}/>
        <p>Data for year {filterInfoText} is hidden</p>
                {props.expense.map((item) => <ExpenseItem key={item.id} expense={item} />)}
        </Card>
        </div>
    );
}

export default Expenses;