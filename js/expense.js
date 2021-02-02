expenseForm.onsubmit= (e) => {
    e.preventDefault()
    console.log(e)

    let requestObject = {
        ExpenseName: e.target[0].value,
        Category: e.target[1].value,
        TransactionDate: e.target[2].value,
        ExpenseAmount: e.target[3].value,
        UserId: e.target[4].value
    }

        fetch('https://localhost:44357/api/expense', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject),
        })
    
}
const getExpenseData = () => {
    fetch('https://localhost:44357/api/expense/')
        .then((response) => { return response.json() })
        .then((data) => {
            let output = ` <tr id="expenseTableData">
            <th>Name:</th>
            <th>Category:</th>
            <th>Transaction date:</th>
            <th>Amount (kr):</th>
            <th>Expense ID:</th>
            <th>User ID:</th>
        </tr>`
            data.forEach(function(expense){
                // += betyder Append och `` betyder "template-strings där vi kan ha en massor html"
                  output += `
                <tr>
                <td>${expense.ExpenseName}</td>            
                <td>${expense.Category}</td>
                <td>${new Date(expense.TransactionDate).toDateString()}</td>  
                <td>${expense.ExpenseAmount}</td>
                <td>${expense.ExpenseID}</td>
                <td>${expense.UserID}</td>
            </tr>
                `    
        })
    document.getElementById('expenseTable').innerHTML = output
    })
}

let inputid = document.getElementById("inputID")
const getExpenseDataByID = () => {
    fetch('https://localhost:44357/api/expense/'+inputid.value)
        .then((response) => { return response.json() })
        .then((data) => {
            let output = ` <tr id="expenseTableData">
            <th>Name:</th>
            <th>Category:</th>
            <th>Transaction date:</th>
            <th>Amount (kr):</th>
            <th>Expense ID:</th>
            <th>User ID:</th>
        </tr>`
            data.forEach(function(expense){
                // += betyder Append och `` betyder "template-strings där vi kan ha en massor html"
                  output += `
                <tr>
                <td>${expense.ExpenseName}</td>            
                <td>${expense.Category}</td>
                <td>${new Date(expense.TransactionDate).toDateString()}</td>  
                <td>${expense.ExpenseAmount}</td>
                <td>${expense.ExpenseID}</td>
                <td>${expense.UserID}</td>
            </tr>
                `;    
        })
    document.getElementById('expenseTable').innerHTML = output
    })
}
//denna  listar i console retur värdena med namn. 
const getExpenseConsole = () => {
    fetch('https://localhost:44357/api/expense')
        .then((response) => { return response.json() })
        .then(data => console.log(data))
}   

function updateTable() {
    $('#expenseTableDiv').load(document.URL +  ' #expenseTableDiv');
}
