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
var cookieUserID = getCookie("User");

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    Category: e.target[0].value,
    Amount: e.target[1].value,
    UserID: cookieUserID,
  };

  fetch("https://localhost:44357/api/budget", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};
const getBudgetData = () => {
  fetch("https://localhost:44357/api/budget/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = ` <tr id="budgetTableData">
            <th>Category:</th>
            <th>Amount (kr):</th>
            <th>Budget ID:</th>
            <th>User ID:</th>
        </tr>`;
      data.forEach(function (budget) {
        // += betyder Append och `` betyder "template-strings där vi kan ha en massor html"
        output += `
                <tr>
                <td>${budget.Category}</td>            
                <td>${budget.Amount}</td>
                <td>${budget.BudgetId}</td>  
                <td>${budget.UserID}</td>
            </tr>
                `;
      });
      document.getElementById("budgetTable").innerHTML = output;
    });
};

//hide show add budget btn
