import cookieUserID from "./cookiecutter.js";
console.log(cookieUserID)
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
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        budgets[i] = { Category: data[i].Category, Amount: data[i].Amount }
      }
      groceriesBudget = budgets.filter(category => category.Category === 'Groceries');
      fixedcostsBudget = budgets.filter(category => category.Category === "Fixed Cost")
      entertainmentBudget = budgets.filter(category => category.Category === "Entertainment")
      return budgets
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
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        expenses[i] = { Category: data[i].Category, ExpenseAmount: data[i].ExpenseAmount }
      }
      console.log(expenses[1].Category)
      groceriesExpense = expenses.filter(category => category.Category === 'Groceries');
      fixedcostsExpense = expenses.filter(category => category.Category === "Fixed Cost")
      entertainmentExpense = expenses.filter(category => category.Category === "Entertainment")
      return expenses
    })
};
//----------------------------------print functions-----------------------------
function printBudgets() {
  GetBudgetsByUserIdPromise().then((result) => {
    calculateBudgets(); console.log(totalGroceries, totalFixedCosts, totalEntertainment)
    for (let i = 0; i < result.length; i++)
      document.getElementById("budget").innerHTML += "<br>" + result[i].Category + ": " + result[i].Amount;
  });
}
function printExpenses() {
  GetExpensesByUserIdPromise().then((result) => {
    calculateExpenses(); console.log(totalGroceries, totalFixedCosts, totalEntertainment)
    for (let i = 0; i < result.length; i++)
      document.getElementById("budget").innerHTML += "<br>" + result[i].Category + ": " + result[i].ExpenseAmount;
  });
}
//-------------------Calculate function--------------------------------------------
let totalGroceries = 0;
let totalFixedCosts = 0;
let totalEntertainment = 0;

const calculateBudgets = () => {
  for (let i = 0; i < groceriesBudget.length; i++)
    totalGroceries += groceriesBudget[i].Amount
  for (let i = 0; i < fixedcostsBudget.length; i++)
    totalFixedCosts += fixedcostsBudget[i].Amount
  for (let i = 0; i < entertainmentBudget.length; i++)
    totalEntertainment += entertainmentBudget[i].Amount
}
const calculateExpenses = () => {
  for (let i = 0; i < groceriesExpense.length; i++)
    totalGroceries -= groceriesExpense[i].ExpenseAmount
  for (let i = 0; i < fixedcostsExpense.length; i++)
    totalFixedCosts -= fixedcostsExpense[i].ExpenseAmount
  for (let i = 0; i < entertainmentExpense.length; i++)
    totalEntertainment -= entertainmentExpense[i].ExpenseAmount
}

// du skapa en div med id "remaining" för att skriva ut vad som man har kvar. Den ska flyttas i css. SOVA!!!
// kolla över Calculate(). så den kallas på rätt ställe och EFTER datan har hämtats i GetexpensesByUserIdPromise och Get BudgetsByUserIdPromise




printBudgets()
printExpenses()








