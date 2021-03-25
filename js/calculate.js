import {filterCurrentMonthYear, calculateBudgets} from "./workhorse.js";
import {GetBudgetsByUserIdPromise, GetExpensesByUserIdPromise} from "./fetches.js";
import generateTable from "./tableGenerator.js"

async function calculateBudgetsAndExpense(){
let budgetsUnfilterd  = await GetBudgetsByUserIdPromise();
let expensesUnfilterd = await GetExpensesByUserIdPromise();
let budgetsFilterd =  await filterCurrentMonthYear(budgetsUnfilterd);
let expensesFilterd = await  filterCurrentMonthYear(expensesUnfilterd);
let result = calculateBudgets(budgetsFilterd, expensesFilterd); //<---undefined
return result;
};
calculateBudgetsAndExpense().then((result)=>{
  
  generateTable([result[0]],"budget")
  generateTable([result[1]],"expense")
  generateTable([result[2]],"remaining")
  //varför kan jag inte lyfta ut result[1] tex. Och varför står det undefined när data finns?!
})



