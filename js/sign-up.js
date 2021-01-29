registerForm.onsubmit= (e) => {
    e.preventDefault()
    console.log(e)

    let requestObject = {
        FirstName: e.target[0].value,
        LastName: e.target[1].value,
        Email: e.target[2].value,
        Password: e.target[3].value

    }

    fetch('https://localhost:44357/api/values', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestObject),
        
    })
}