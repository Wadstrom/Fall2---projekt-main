import cookieUserID from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";
import { getDataByName } from "./fetches.js";

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    Name: e.target[0].value,
    Amount: e.target[1].value,
    Date: e.target[2].value,
    UserID: cookieUserID,
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



getDataByName("Income").then((data) => {
  data.forEach((item) => {
    item.Date = item.Date.slice(0, 10);

    item["Delete"] = item.ID
    item["Edit"] = item
  });
  generateTable(data, "table-div", "Income");
});


