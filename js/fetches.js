import cookieUserID from "./cookiecutter.js";
//---------------------Collection of "fetch" functions----------------------

export const GetBudgetsByUserIdPromise = () => {
    return fetch("https://localhost:44357/api/budget/" + cookieUserID)
        .then((response) => {
            return response.json();
        })
        .then((data) => { return data })
};


export const GetExpensesByUserIdPromise = () => {
    return fetch("https://localhost:44357/api/Expense/" + cookieUserID)
        .then((response) => {
            return response.json();
        })
        .then((data) => { return data })
};