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
  data.forEach((obj) => {
    obj.Date = obj.Date.slice(0, 10);
    //delete and edit columns with the important value
    obj["Delete"] = obj.ID;
    obj["Edit"] = obj;
  });
  generateTable(data, "table-div", "Income");
});
// const obj = { name: "Emil", lastname: "Neander" };

// const objArray = ["test1", "test2"];

// const test = Object.keys(obj).map((key) => {
//   const newObj = {[key]: objArray.map((item) => {
//     return item }
//   });
//   return newObj;
// });
// console.log(test);
