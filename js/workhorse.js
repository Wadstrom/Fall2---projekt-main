//----------------Collection of functions---------------

//----------------Filter and sort-----------------------
// filterCurrentMonthYear needs getMonthNow and getYearNow
function filterCurrentMonthYear(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = { Category: data[i].Category, Amount: data[i].Amount, Date: data[i].Date }
    }
    let filterMonth = arr.filter(date => new Date(date.Date).getMonth() === getMonthNow());
    let filterYear = filterMonth.filter(year => new Date(year.Date).getFullYear() === getYearNow())
    return filterYear
}
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