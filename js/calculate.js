import {filterCurrentMonthYear, calculateBudgets} from "./workhorse.js";
import {GetBudgetsByUserIdPromise, GetExpensesByUserIdPromise} from "./fetches.js";
import generateTable from "./tableGenerator.js"


async function calculateBudgetsAndExpense(){
let budgetsUnfilterd  = await GetBudgetsByUserIdPromise();
let expensesUnfilterd = await GetExpensesByUserIdPromise();
let budgetsFilterd =  await filterCurrentMonthYear(budgetsUnfilterd);
let expensesFilterd = await  filterCurrentMonthYear(expensesUnfilterd);
let result = calculateBudgets(budgetsFilterd, expensesFilterd); 
return result;
};
calculateBudgetsAndExpense().then((result)=>{
  generateTable([result[0]],"remaining")
  generateTable([result[1]],"budget")
  generateTable([result[2]],"expense")
})