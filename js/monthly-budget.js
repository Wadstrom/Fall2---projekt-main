budgetForm.onsubmit= (e) => {
    e.preventDefault()
    console.log(e)

    let requestObject = {
        Category: e.target[0].value,
        Amount: e.target[1].value,
        UserID: e.target[2].value
    }

        fetch('https://localhost:44357/api/budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject),
        })
    
}
const getBudgetData = () => {
    fetch('https://localhost:44357/api/budget/')
        .then((response) => { return response.json() })
        .then((data) => {
            let output = ` <tr id="budgetTableData">
            <th>Category:</th>
            <th>Amount (kr):</th>
            <th>Budget ID:</th>
            <th>User ID:</th>
        </tr>`
            data.forEach(function(budget){
                // += betyder Append och `` betyder "template-strings där vi kan ha en massor html"
                  output += `
                <tr>
                <td>${budget.Category}</td>            
                <td>${budget.Amount}</td>
                <td>${budget.BudgetId}</td>  
                <td>${budget.UserID}</td>
            </tr>
                `    
        })
    document.getElementById('budgetTable').innerHTML = output
    })
}
