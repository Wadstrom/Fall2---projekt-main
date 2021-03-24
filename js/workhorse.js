
//----------------Collection of functions---------------

//----------------Filter and sort-----------------------
// filterCurrentMonthYear needs getMonthNow and getYearNow
export function filterCurrentMonthYear(arr) {
    console.log(arr)
    //for (let i = 0; i < arr.length; i++) {
    //var filteredArray = [...arr]
    // filteredArray[i] = { Category: arr[i].Category, Amount: arr[i].Amount, Date: arr[i].Date }
    //}
    let filterMonth = arr.filter(date => new Date(date.Date).getMonth() === getMonthNow());
    let filterYear = filterMonth.filter(year => new Date(year.Date).getFullYear() === getYearNow())
    console.log(filterYear)
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

export const calculateBudgets = (arr, earr) => {
    console.log(arr)
    console.log(earr)
    let totalRemainingGroceries = 0;
    let totalRemainingFixedCosts = 0;
    let totalRemainingEntertainment= 0;
    let totalBudgetGroceries = 0, totalBudgetFixedCosts =0, totalBudgetEntertainment=0;
    let totalExpenseGroceries=0, totalExpenseFixedCosts=0, totalExpenseEntertainment=0;
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
    for (let i = 0; i < earr.length; i++) {
        if (earr[i].Category === "Groceries") {
            totalRemainingGroceries -= earr[i].Amount
            totalExpenseGroceries += earr[i].Amount
        }
        else if (earr[i].Category === "Fixed Cost") {
            totalRemainingFixedCosts -= earr[i].Amount
            totalExpenseFixedCosts += earr[i].Amount
        }
        else if (earr[i].Category === "Entertainment") {
            totalRemainingEntertainment -= earr[i].Amount
            totalExpenseEntertainment += earr[i].Amount
        }
        else {
            i++
        }
    }
    var returnArray = [
        {"Groceries Budget left" : totalRemainingGroceries,
        "Fixed Costs Budget left" :totalRemainingFixedCosts,
        "Entertainment Budget left" :totalRemainingEntertainment},
        {"Your total Groceries Budget" :totalBudgetGroceries,
        "Your total Fixed Costs Budget" :totalBudgetFixedCosts,
        "Your total Entertainment Budget" :totalBudgetEntertainment},
        {"Your total Groceriesexpense":totalExpenseGroceries,
        "Your total Fixedcostsexpense":totalExpenseFixedCosts,
        "Your total Entertainmentexpense":totalExpenseEntertainment}]
    return returnArray
};