import cookieUserID from "./cookiecutter.js";

//calculate remaining budget
// get-budget.catagory and amount. Get all expenses for that catagory.
//then ammount minus the TOTAL of expenses
//budget - expenses i den kategorien = kvar av budget.
//----------------------------Getting Budgets and sorting-------------------------------
var budgets = []
var groceriesBudget
let fixedcostsBudget
let entertainmentBudget
const GetBudgetsByUserIdPromise = () => {
  return fetch("https://localhost:44357/api/budget/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        budgets[i] = { Category: data[i].Category, Amount: data[i].Amount, Date: data[i].Date}
      }
      let sortDateE = budgets.filter(date => new Date(date.Date).getMonth() === getDateNow());
      let sortYear= sortDateE.filter(year => new Date(year.Date).getFullYear() === getYearNow())
      groceriesBudget = sortYear.filter(category => category.Category === 'Groceries');
      fixedcostsBudget = sortYear.filter(category => category.Category === "Fixed Cost")
      entertainmentBudget = sortYear.filter(category => category.Category === "Entertainment")
      
    })
};
//-----------------------------Getting expenses_ANd sorting-----------------------
var expenses = []
var groceriesExpense
let fixedcostsExpense
let entertainmentExpense
const GetExpensesByUserIdPromise = () => {
  return fetch("https://localhost:44357/api/Expense/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        expenses[i] = { Category: data[i].Category, ExpenseAmount: data[i].ExpenseAmount, TransactionDate: data[i].TransactionDate }
      }
      let sortDateE = expenses.filter(date => new Date(date.TransactionDate).getMonth() === getDateNow());
      let sortYear= sortDateE.filter(year => new Date(year.TransactionDate).getFullYear() === getYearNow())
      groceriesExpense = sortYear.filter(category => category.Category === 'Groceries');
      fixedcostsExpense = sortYear.filter(category => category.Category === "Fixed Cost")
      entertainmentExpense = sortYear.filter(category => category.Category === "Entertainment") 
    })
};
//----------------------------------print functions-----------------------------
function printBudgets() {
  GetBudgetsByUserIdPromise().then(() => {
    calculateBudgets(); 
    document.getElementById("budget").innerHTML += "<br>" + "Groceries: " + totalBudgetGroceries + "<br>" + "Fixed Costs: " + totalBudgetFixedCosts + "<br>" + "Entertainment: " + totalBudgetEntertainment;
    printExpenses()
  });
}
function printExpenses() {
  GetExpensesByUserIdPromise().then(() => {
    calculateExpenses();
    document.getElementById("expense").innerHTML += "<br>" + "Groceries: " + totalExpenseGroceries + "<br>" + "Fixed Costs: " + totalExpenseFixedCosts + "<br>" + "Entertainment: " + totalExpenseEntertainment;
    document.getElementById("remaining").innerHTML += "<br>" + "Groceries: " + totalRemainingGroceries + "<br>" + "Fixed Costs: " + totalRemainingFixedCosts + "<br>" + "Entertainment: " + totalRemainingEntertainment;
  });
}
//-------------------Calculate function--------------------------------------------(p.All < lista promise. Kolla. )
let totalRemainingGroceries = 0;
 let totalRemainingFixedCosts = 0;
 let totalRemainingEntertainment = 0;
let totalExpenseGroceries = 0, totalExpenseFixedCosts = 0, totalExpenseEntertainment = 0;
let totalBudgetGroceries = 0, totalBudgetFixedCosts = 0, totalBudgetEntertainment = 0;

const calculateBudgets = () => {
  for (let i = 0; i < groceriesBudget.length; i++) {
    totalRemainingGroceries += groceriesBudget[i].Amount
    totalBudgetGroceries += groceriesBudget[i].Amount
  }
  for (let i = 0; i < fixedcostsBudget.length; i++) {
    totalRemainingFixedCosts += fixedcostsBudget[i].Amount
    totalBudgetFixedCosts += fixedcostsBudget[i].Amount
  }
  for (let i = 0; i < entertainmentBudget.length; i++) {
    totalRemainingEntertainment += entertainmentBudget[i].Amount
    totalBudgetEntertainment += entertainmentBudget[i].Amount
  }
}
const calculateExpenses = () => {
  for (let i = 0; i < groceriesExpense.length; i++) {
    totalRemainingGroceries -= groceriesExpense[i].ExpenseAmount
    totalExpenseGroceries += groceriesExpense[i].ExpenseAmount
  }
  for (let i = 0; i < fixedcostsExpense.length; i++) {
    totalRemainingFixedCosts -= fixedcostsExpense[i].ExpenseAmount
    totalExpenseFixedCosts += fixedcostsExpense[i].ExpenseAmount
  }
  for (let i = 0; i < entertainmentExpense.length; i++) {
    totalRemainingEntertainment -= entertainmentExpense[i].ExpenseAmount
    totalExpenseEntertainment += entertainmentExpense[i].ExpenseAmount
  }
}


// du ska skapa en div med id "remaining" för att skriva ut vad som man har kvar. Den ska flyttas i css. SOVA!!!
// kolla över Calculate(). så den kallas på rätt ställe och EFTER datan har hämtats i GetexpensesByUserIdPromise och Get BudgetsByUserIdPromise

function getDateNow(){
  const today = new Date();
  let month = today.getMonth();
  return month;
}
function getYearNow(){
  const today= new Date();
  let year = today.getFullYear();
  console.log(year);
  return year;
}

printBudgets()
