savingForm.onsubmit= (e) => {
    e.preventDefault()
    console.log(e)

    let requestObject = {
        Amount: e.target[0].value,
        StartDate: e.target[1].value,
        ReachDate: e.target[2].value,
        GoalName: e.target[3].value,
        UserID: e.target[4].value

    }

    fetch('https://localhost:44357/api/SavingGoal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestObject),

    })
}
const getSavingData = () => {
    fetch('https://localhost:44357/api/savinggoal/')
        .then((response) => { return response.json() })
        .then((data) => {
            let output = ` <tr id="savingTableData">
            <th>Amount:</th>
            <th>Start Date:</th>
            <th>Reach Date:</th>
            <th>Goal Name:</th>
            <th>User ID:</th>
        </tr>`
            data.forEach(function(savinggoal){
                // += betyder Append och `` betyder "template-strings där vi kan ha en massor html"
                  output += `
                <tr>
                <td>${savinggoal.Amount}</td>            
                <td>${new Date(savinggoal.StartDate).toDateString()}</td>
                <td>${new Date(savinggoal.ReachDate).toDateString()}</td>  
                <td>${savinggoal.GoalName}</td>
                <td>${savinggoal.UserID}</td>
            </tr>
                `    
        })
    document.getElementById('savingTable').innerHTML = output
    })
}