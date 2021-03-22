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