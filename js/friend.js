import generateTable from "./tableGenerator.js";
import cookieUserID from "./cookiecutter.js"
import { getDataByName } from "./fetches.js"


forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    ID: cookieUserID,
    Email: e.target[0].value
  };

  fetch("https://localhost:44357/api/friend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};

getDataByName("Friend").then((data) => {
  generateTable(data, "friendtable");
});

getDataByName("Expense").then((data) => {
  data.forEach((item) => {
    item.Date = item.Date.slice(0, 10);
  });
  generateTable(data, "table-div");
});

