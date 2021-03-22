import cookieUserID from "./cookiecutter.js";
import {filterCurrentMonthYear, getMonthNow, getYearNow  } from "./workhorse.js";
//----------------------------Getting Budgets and sorting-------------------------------

const GetBudgetsByUserIdPromise = () => {
  return fetch("https://localhost:44357/api/budget/" + cookieUserID)
  .then((response) => {
    return response.json();
  })
  .then((data) => { return data})
};
//-----------------------------Getting Expenses and sorting-------------------------------

const GetExpensesByUserIdPromise = () => {
   return fetch("https://localhost:44357/api/Expense/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {return data})
  }

  

var bud = GetBudgetsByUserIdPromise().then((result) => {return filterCurrentMonthYear(result)}); 
var exp = GetExpensesByUserIdPromise().then((result) => {return filterCurrentMonthYear(result)})
console.log(bud)
console.log(exp)
//-----------------------------------------------Filter Sort Date Functions-------------------------------------------------

//----------------------------------print functions-----------------------------
function printBudgets() {
  GetBudgetsByUserIdPromise().then((data) => {
    calculateBudgets(GetBudgetsByUserIdPromise(),GetExpensesByUserIdPromise());
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




const calculateBudgets = (arr, earr) => {
  console.log(arr)
  let totalRemainingGroceries;
  let totalRemainingFixedCosts;
  let totalRemainingEntertainment;
  let totalBudgetGroceries, totalBudgetFixedCosts, totalBudgetEntertainment;
  let totalExpenseGroceries, totalExpenseFixedCosts, totalExpenseEntertainment;
  for (let i = 0; i < arr.length; i++) {
    if (arr.Category === "Groceries") {
      totalRemainingGroceries += arr[i].Amount
      totalBudgetGroceries += arr[i].Amount
    }
    else if (arr.Category === "Fixed Cost") {
      totalRemainingFixedCosts += arr[i].Amount
      totalBudgetFixedCosts += arr[i].Amount
    }
    else if (arr.Category === "Entertainment") {
      totalRemainingEntertainment += arr[i].Amount
      totalBudgetEntertainment += arr[i].Amount
    }
    else {
      continue
    }
  }
  for (let i = 0; i < earr.length; i++) {
    if (earr.Category === "Groceries") {
      totalRemainingGroceries -= earr[i].Amount
      totalExpenseGroceries += earr[i].Amount
    }
    else if (earr.Category === "Fixed Cost") {
      totalRemainingFixedCosts -= earr[i].Amount
      totalExpenseFixedCosts += earr[i].Amount
    }
    else if (earr.Category === "Entertainment") {
      totalRemainingEntertainment -= earr[i].Amount
      totalExpenseEntertainment += earr[i].Amount
    }
    else {
      continue
    }
  }
  var returnArray = [
    totalRemainingGroceries, totalRemainingFixedCosts, totalRemainingEntertainment,
    totalBudgetGroceries, totalBudgetFixedCosts, totalBudgetEntertainment, 
    totalExpenseGroceries, totalExpenseFixedCosts, totalExpenseEntertainment]
  return returnArray
};
console.log(calculateBudgets(bud,exp))
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

//printBudgets();
