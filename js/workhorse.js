
//----------------Collection of functions---------------

//----------------Filter and "sort"-----------------------
// filterCurrentMonthYear needs getMonthNow and getYearNow
export function filterCurrentMonthYear(arr) {

    let filterMonth = arr.filter(date => new Date(date.Date).getMonth() === getMonthNow());
    let filterYear = filterMonth.filter(year => new Date(year.Date).getFullYear() === getYearNow())

    return filterYear;
}
export function getMonthNow() {
    const today = new Date();
    let month = today.getMonth();
    return month;
}
export function getYearNow() {
    const today = new Date();
    let year = today.getFullYear();
    return year;
}
//------------------budget functions----------------------------
export const calculateBudgets = (arr, earr) => {
    let totalRemainingGroceries = 0;
    let totalRemainingFixedCosts = 0;
    let totalRemainingEntertainment = 0;
    let totalBudgetGroceries = 0;
    let totalBudgetFixedCosts = 0;
    let totalBudgetEntertainment = 0;
    let totalExpenseGroceries = 0;
    let totalExpenseFixedCosts = 0;
    let totalExpenseEntertainment = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Category === "Groceries") {
            totalRemainingGroceries += arr[i].Amount
            totalBudgetGroceries += arr[i].Amount
        }
        else if (arr[i].Category === "Fixed Cost") {
            totalRemainingFixedCosts += arr[i].Amount
            totalBudgetFixedCosts += arr[i].Amount
        }
        else if (arr[i].Category === "Entertainment") {
            totalRemainingEntertainment += arr[i].Amount
            totalBudgetEntertainment += arr[i].Amount
        }
        else {
            i++
        }
    }
    for (let j = 0; j < earr.length; j++) {
        if (earr[j].Category === "Groceries") {
            totalRemainingGroceries -= earr[j].Amount
            totalExpenseGroceries += earr[j].Amount
        }
        else if (earr[j].Category === "Fixed Cost") {
            totalRemainingFixedCosts -= earr[j].Amount
            totalExpenseFixedCosts += earr[j].Amount
        }
        else if (earr[j].Category === "Entertainment") {
            totalRemainingEntertainment -= earr[j].Amount
            totalExpenseEntertainment += earr[j].Amount
        }
        else {
            j++
        }
    };
    var returnArray = [
        {
            "Groceries Budget left": totalRemainingGroceries,
            "Fixed Costs Budget left": totalRemainingFixedCosts,
            "Entertainment Budget left": totalRemainingEntertainment
        },
        {
            "Your total Groceries Budget": totalBudgetGroceries,
            "Your total Fixed Costs Budget": totalBudgetFixedCosts,
            "Your total Entertainment Budget": totalBudgetEntertainment
        },
        {
            "Your total Groceries expense": totalExpenseGroceries,
            "Your total Fixedcosts expense": totalExpenseFixedCosts,
            "Your total Entertainment expense": totalExpenseEntertainment
        }]
    return returnArray
};
// som ska ge feed back i form av text. Success och Failed
// Skriva en funktion. Som gör detta baserat på backend response.
// Generell funktion som funkar överallt. DRY tänk.
// Vilka parametrar behöver funktion ta? 1.Svar från backend, 
// 2. Vart den ska skriva ut. 

export const feedbackResponse = (response, whereID) => {
 if (response.Status != "Success"){
     document.getElementById(whereID).innerHTML = response.Message
 }else{
    document.getElementById(whereID).innerHTML = response.Message
 }
}