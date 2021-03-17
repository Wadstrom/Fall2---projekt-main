import cookieUserID from "./cookiecutter.js"

const notLoggedIn = "You are not logged in. Please login for full use of this site.";

const GetNameByUserIdPromise = () => {
  return fetch("https://localhost:44357/api/user/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.FirstName;
    });
};

function checkCookie() {
  var username = cookieUserID;
  if (username != "") {
    GetNameByUserIdPromise().then((result) => {
      document.getElementById("welcome").innerHTML = "Welcome: " + result;
    })
  } else {
    document.getElementById("welcome").innerHTML = notLoggedIn;
  }

}
checkCookie();

