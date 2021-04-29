import generateTable from "./tableGenerator.js";
import cookieUserID from "./cookiecutter.js"
import { getDataByName } from "./fetches.js"


forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);
  document.getElementById("Success").style.visibility = "Hidden"
  document.getElementById("Failed").style.visibility = "Hidden"
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
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    if (response.Status != "Failed") {
      document.getElementById("Success").style.visibility = "Visible"
    } else {
      document.getElementById("Failed").style.visibility = "Visible"
     
    };
});
}
getDataByName("Friend").then((data) => {
  data.forEach((obj) => {
    obj["Accept"] = obj.Relationship_ID;
    obj["Decline"] = obj.Relationship_ID;
  })
  generateTable(data, "friendtable");
});
