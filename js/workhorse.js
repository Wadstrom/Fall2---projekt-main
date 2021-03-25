
//----------------Collection of functions---------------

//----------------Filter and sort-----------------------
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
   
    console.log(arr)
    console.log(earr)
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
            console.log("inne i 1a")
        }
        else if (arr[i].Category === "Fixed Cost") {
            totalRemainingFixedCosts += arr[i].Amount
            totalBudgetFixedCosts += arr[i].Amount
            console.log("inne i 2a")
        }
        else if (arr[i].Category === "Entertainment") {
            totalRemainingEntertainment += arr[i].Amount
            totalBudgetEntertainment += arr[i].Amount
            console.log("inne i 3a")
        }
        else {
            i++
        }
    }
    for (let j = 0; j < earr.length; j++) {
        if (earr[j].Category === "Groceries") {
            totalRemainingGroceries -= earr[j].Amount
            totalExpenseGroceries += earr[j].Amount
            console.log("1")
        }
        else if (earr[j].Category === "Fixed Cost") {
            totalRemainingFixedCosts -= earr[j].Amount
            totalExpenseFixedCosts += earr[j].Amount
            console.log("2")
        }
        else if (earr[j].Category === "Entertainment") {
            totalRemainingEntertainment -= earr[j].Amount
            totalExpenseEntertainment += earr[j].Amount
            console.log("3")
        }
        else {
            console.log("else")
            j++
        }
    }; //<---then här kanske?
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
            "Your total Groceriesexpense": totalExpenseGroceries,
            "Your total Fixedcostsexpense": totalExpenseFixedCosts,
            "Your total Entertainmentexpense": totalExpenseEntertainment
        }]
    console.log(returnArray)
    return returnArray
};