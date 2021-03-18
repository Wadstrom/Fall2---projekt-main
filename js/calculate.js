import cookieUserID from "./cookiecutter.js";

//----------------------------Getting Budgets and sorting-------------------------------

const GetBudgetsByUserIdPromise = () => {
  return fetch("https://localhost:44357/api/budget/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let budgets = [];
        budgets[i] = {
          Category: data[i].Category,
          Amount: data[i].Amount,
          Date: data[i].Date,
        };
      }
      let filterDate = budgets.filter(
        (date) => new Date(date.Date).getMonth() === getMonthNow()
      );
      let filterYear = filterDate.filter(
        (year) => new Date(year.Date).getFullYear() === getYearNow()
      );
      let groceriesBudget = filterYear.filter(
        (category) => category.Category === "Groceries"
      );
      let fixedcostsBudget = filterYear.filter(
        (category) => category.Category === "Fixed Cost"
      );
      let entertainmentBudget = filterYear.filter(
        (category) => category.Category === "Entertainment"
      );
      return groceriesBudget, fixedcostsBudget, entertainmentBudget;
    });
};
console.log(GetBudgetsByUserIdPromise());
//-----------------------------Getting Expenses and sorting-------------------------------
var expenses = [];
var groceriesExpense;
let fixedcostsExpense;
let entertainmentExpense;
const GetExpensesByUserIdPromise = () => {
  return fetch("https://localhost:44357/api/Expense/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        expenses[i] = {
          Category: data[i].Category,
          Amount: data[i].Amount,
          Date: data[i].Date,
        };
      }
      let filterDate = expenses.filter(
        (date) => new Date(date.Date).getMonth() === getMonthNow()
      );
      let filterYear = filterDate.filter(
        (year) => new Date(year.Date).getFullYear() === getYearNow()
      );
      groceriesExpense = filterYear.filter(
        (category) => category.Category === "Groceries"
      );
      fixedcostsExpense = filterYear.filter(
        (category) => category.Category === "Fixed Cost"
      );
      entertainmentExpense = filterYear.filter(
        (category) => category.Category === "Entertainment"
      );
    });
};
//-----------------------------------------------Filter Sort Date Functions-------------------------------------------------
function getMonthNow() {
  const today = new Date();
  let month = today.getMonth();
  return month;
}
function getYearNow() {
  const today = new Date();
  let year = today.getFullYear();
  return year;
}
//----------------------------------print functions-----------------------------
function printBudgets() {
  GetBudgetsByUserIdPromise().then(() => {
    calculateBudgets();
    document.getElementById("budget").innerHTML +=
      "<br>" +
      "Groceries: " +
      totalBudgetGroceries +
      "<br>" +
      "Fixed Costs: " +
      totalBudgetFixedCosts +
      "<br>" +
      "Entertainment: " +
      totalBudgetEntertainment;
    printExpenses();
  });
}
function printExpenses() {
  GetExpensesByUserIdPromise().then(() => {
    calculateExpenses();
    document.getElementById("expense").innerHTML +=
      "<br>" +
      "Groceries: " +
      totalExpenseGroceries +
      "<br>" +
      "Fixed Costs: " +
      totalExpenseFixedCosts +
      "<br>" +
      "Entertainment: " +
      totalExpenseEntertainment;
    document.getElementById("remaining").innerHTML +=
      "<br>" +
      "Groceries: " +
      totalRemainingGroceries +
      "<br>" +
      "Fixed Costs: " +
      totalRemainingFixedCosts +
      "<br>" +
      "Entertainment: " +
      totalRemainingEntertainment;
  });
}
//-------------------Calculate function--------------------------------------------(p.All < lista promise. Kolla. )---prata om att ta in param i functions.
let totalRemainingGroceries = 0;
let totalRemainingFixedCosts = 0;
let totalRemainingEntertainment = 0;
let totalExpenseGroceries = 0,
  totalExpenseFixedCosts = 0,
  totalExpenseEntertainment = 0;
let totalBudgetGroceries = 0,
  totalBudgetFixedCosts = 0,
  totalBudgetEntertainment = 0;

const calculateBudgets = () => {
  for (let i = 0; i < groceriesBudget.length; i++) {
    totalRemainingGroceries += groceriesBudget[i].Amount;
    totalBudgetGroceries += groceriesBudget[i].Amount;
  }
  for (let i = 0; i < fixedcostsBudget.length; i++) {
    totalRemainingFixedCosts += fixedcostsBudget[i].Amount;
    totalBudgetFixedCosts += fixedcostsBudget[i].Amount;
  }
  for (let i = 0; i < entertainmentBudget.length; i++) {
    totalRemainingEntertainment += entertainmentBudget[i].Amount;
    totalBudgetEntertainment += entertainmentBudget[i].Amount;
  }
};
const calculateExpenses = () => {
  for (let i = 0; i < groceriesExpense.length; i++) {
    totalRemainingGroceries -= groceriesExpense[i].Amount;
    totalExpenseGroceries += groceriesExpense[i].Amount;
  }
  for (let i = 0; i < fixedcostsExpense.length; i++) {
    totalRemainingFixedCosts -= fixedcostsExpense[i].Amount;
    totalExpenseFixedCosts += fixedcostsExpense[i].Amount;
  }
  for (let i = 0; i < entertainmentExpense.length; i++) {
    totalRemainingEntertainment -= entertainmentExpense[i].Amount;
    totalExpenseEntertainment += entertainmentExpense[i].Amount;
  }
};

printBudgets();
