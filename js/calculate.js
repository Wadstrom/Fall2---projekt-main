import cookieUserID from "./cookiecutter.js";

//----------------------------Getting Budgets and sorting-------------------------------

const GetBudgetsByUserIdPromise = () => {
  var budgets = []
  let filterYear
  var groceriesBudget
  let entertainmentBudget
  let fixedcostsBudget
  return fetch("https://localhost:44357/api/budget/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      
      // groceriesBudget = filterYear.filter(category => category.Category === 'Groceries');
      // fixedcostsBudget = filterYear.filter(category => category.Category === "Fixed Cost")
      // entertainmentBudget = filterYear.filter(category => category.Category === "Entertainment")
  
    }).then(() => { return filterYear })

};
console.log(GetBudgetsByUserIdPromise())
//-----------------------------Getting Expenses and sorting-------------------------------

const GetExpensesByUserIdPromise = () => {
  var expenses = []
  let arr = []
  var groceriesExpense
  let fixedcostsExpense
  let entertainmentExpense
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
      let filterDate = expenses.filter(date => new Date(date.Date).getMonth() === getMonthNow());
      let filterYear = filterDate.filter(year => new Date(year.Date).getFullYear() === getYearNow())
      groceriesExpense = filterYear.filter(category => category.Category === 'Groceries');
      fixedcostsExpense = filterYear.filter(category => category.Category === "Fixed Cost")
      entertainmentExpense = filterYear.filter(category => category.Category === "Entertainment")
    }).then(() => { arr.push(groceriesExpense, fixedcostsExpense, entertainmentExpense) }).then
    (() => { return arr })
};
console.log(GetExpensesByUserIdPromise())
//-----------------------------------------------Filter Sort Date Functions-------------------------------------------------

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
let totalExpenseGroceries = 0, totalExpenseFixedCosts = 0, totalExpenseEntertainment = 0;
let totalBudgetGroceries = 0, totalBudgetFixedCosts = 0, totalBudgetEntertainment = 0;

const calculateBudgets = (arr) => {
  if (arr.Category === "Groceries") {
    for (let i = 0; i < arr.length; i++) {
      totalRemainingGroceries += arr[i].Amount
      totalBudgetGroceries += arr[i].Amount
    }
  }
  else if (arr.Category === "Fixed Cost") {
    for (let i = 0; i < arr.length; i++) {
      totalRemainingFixedCosts += arr[i].Amount
      totalBudgetFixedCosts += arr[i].Amount
    }
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      totalRemainingEntertainment += arr[i].Amount
      totalBudgetEntertainment += arr[i].Amount
    }
  }

}
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
