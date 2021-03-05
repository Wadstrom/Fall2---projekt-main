
// import cookieUserID from "./cookiecutter";



forms.onsubmit = (e) => {
    e.preventDefault();
    console.log(e);

    let requestObject = {
        From_ID: 1,
        To_ID: e.target[0].value,
        Status: 0
    };

    fetch("https://localhost:44357/api/friend", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestObject),
    });
};


const getPendingFriend = () => {
    fetch(`https://localhost:44357/api/friend/`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          console.log(data)
          
        });
        
};


getPendingFriend()
