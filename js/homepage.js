var paramForUserName = getCookie("User");
let fname = "";

const GetNameByUserIdPromise = () => {
  return fetch("https://localhost:44357/api/user/" + paramForUserName)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.FirstName;
    });
};

function checkCookie() {
  var username = getCookie("User");
  if (username != "") {
    console.log(fname + "hej");
    GetNameByUserIdPromise().then((result) => {
      document.getElementById("welcome").innerHTML = "Welcome: " + result;
    });
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
