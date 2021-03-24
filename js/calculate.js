import {filterCurrentMonthYear, calculateBudgets} from "./workhorse.js";
import {GetBudgetsByUserIdPromise, GetExpensesByUserIdPromise} from "./fetches.js";
import generateTable from "./tableGenerator.js"

async function calculateBudgetsAndExpense(){
let budgetsUnfilterd  = GetBudgetsByUserIdPromise();
let expensesUnfilterd = GetExpensesByUserIdPromise();
let budgetsFilterd =  filterCurrentMonthYear(await budgetsUnfilterd);
let expensesFilterd =  filterCurrentMonthYear(await expensesUnfilterd);
let result = calculateBudgets(await budgetsFilterd, await expensesFilterd);
generateTable(result[0], "total-div")
generateTable(result[1], "budget-div")
generateTable(result[2], "expense-div")
};
calculateBudgetsAndExpense()



