import cookieUserID from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";
import { getDataByName, postByModel } from "./fetches.js";

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    Name: e.target[0].value,
    Amount: e.target[1].value,
    Date: e.target[2].value,
    UserID: cookieUserID,
  };

  postByModel(requestObject, "Income")
};
//GET

getDataByName("Income").then((data) => {
  data.forEach((obj) => {
    obj.Date = obj.Date.slice(0, 10);
    //delete and edit columns with the important value
    obj["Delete"] = obj.ID;
    delete obj["ID"];
    obj["Edit"] = obj;
  });
  generateTable(data, "table-div", "Income");
});
