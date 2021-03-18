import cookieUserID from "./cookiecutter.js";

const GetNameByUserIdPromise = () => {
  return fetch("https://localhost:44357/api/user/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.FirstName;
    });
};

function welcomeMessage() {
  if (cookieUserID != "") {
    GetNameByUserIdPromise().then((result) => {
      var welcomeText = document.createElement("h1");
      welcomeText.appendChild(document.createTextNode("Welcome " + result));
      document.getElementById("welcome").appendChild(welcomeText);
    });
  } else {
    var notLoggedIn = document.createElement("h1");
    notLoggedIn.appendChild(
      document.createTextNode(
        "You are not logged in. Please login for full use of this site."
      )
    );
    document.getElementById("welcome").appendChild(notLoggedIn);
  }
}
welcomeMessage();
