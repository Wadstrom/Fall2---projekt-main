import cookieUserID from "./cookiecutter.js";
import {GetNameByUserIdPromise} from "./fetches.js";


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
