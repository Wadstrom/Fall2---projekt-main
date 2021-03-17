import cookieUserID from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    IncomeName: e.target[0].value,
    IncomeAmount: e.target[1].value,
    TransactionDate: e.target[2].value,
    UserId: cookieUserID,
  };

  fetch("https://localhost:44357/api/Income", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};
//GET
const GetIncomeByUserId = () => {
  fetch("https://localhost:44357/api/Income/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      generateTable(data);
    });
};
GetIncomeByUserId();
