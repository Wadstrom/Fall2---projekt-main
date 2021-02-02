savingForm.onsubmit = (e) => {
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