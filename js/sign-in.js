let UserID 

loginForm.onsubmit= (e) => {
    e.preventDefault()
    console.log(e)

    let requestObject = {
        Email: e.target[0].value,
        Password: e.target[1].value,
      
    }

    fetch('https://localhost:44357/api/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestObject),  
    }).then((Response) => Response.json())
             .then((result) => {  
                 console.log(result);  
                 if (result.Status != 'Invalid'){
                     UserID = result.UserID
                     console.log(UserID)
                     setCookie("User", UserID)
                     window.location.href = 'homepage.html';
                 }
                 else {
                    alert('Invalid User');
                 }
                })
                function setCookie(cname, cvalue) {     
                    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
                  }
    }
