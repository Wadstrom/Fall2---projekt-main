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

var cookie = getCookie("User")

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    IncomeName: e.target[0].value,
    IncomeAmount: e.target[1].value,
    TransactionDate: e.target[2].value,
    UserId: cookie
  };

  fetch("https://localhost:44357/api/Income", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};
