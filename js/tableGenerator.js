import { deleteByID } from "./fetches.js";
import popup from "./popup.js";
//-----------------------------------------
const generateTable = (data, tableDiv, model) => {
  console.log("data: ");
  console.log(data);
  // get the reference for the body
  var tableDiv = document.getElementById(tableDiv);
  // create table and table body
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  //Declare the object keys from data - "[0]" because we know the obj keys won't change
  //objKey is gonna be the table headers
  data.unshift(data[0]);
  var objKey = Object.keys(data[0]);
  console.log("objKey: ");
  console.log(objKey);
  //copying and adding the first data object to beginning

  // ROWS (one row = r) creating a row until data.length is reached
  for (var r = 0; r < data.length; r++) {
    var row = document.createElement("tr");
    //Declare the obj value from data
    var objValue = Object.values(data[r]);
    console.log("objValue:");
    console.log(objValue);

    //COLUMNS (one column = c) creating a column until objKey.length is reached (still in the row-forloop)
    for (var c = 0; c < objKey.length; c++) {
      //if row === 0 then write out th
      if (r === 0) {
        var th = document.createElement("th");
        var headerText = document.createTextNode(objKey[c]);
        th.appendChild(headerText);
        row.appendChild(th);
        //else write out all td
      }
      //IF objKey contains data with name "Delete" then create TrashcanButton!
      else if (objKey[c] == "Delete") {
        console.log(objValue);

        var td = document.createElement("td");
        var pTag = document.createElement("p");
        var btnName = document.createTextNode("🗑");
        //dataSet kolla in---
        //giving value to it so we know what to delete. ObjValue[c] is the ID.
        pTag.value = objValue[c];

        pTag.className = "deleteButton";
        pTag.appendChild(btnName);
        td.appendChild(pTag);
        row.appendChild(td);
      }
      //IF objKey contains data with name "Edit" then create EditButton!
      else if (objKey[c] == "Edit") {
        var td = document.createElement("td");
        var pTag = document.createElement("p");
        //giving value to p-tag so we know what to edit. ObjValue is all values of current row
        pTag.value = objValue;
        var btnName = document.createTextNode("✎");
        pTag.className = "editButton";
        pTag.appendChild(btnName);
        td.appendChild(pTag);
        row.appendChild(td);
      } else {
        var td = document.createElement("td");
        var cellText = document.createTextNode(objValue[c]);
        td.appendChild(cellText);
        row.appendChild(td);
      }
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  //end of row-forloop ------------------------------------------------------------------

  // append tbody in the table
  tbl.appendChild(tblBody);
  // append table into our table-div
  tableDiv.appendChild(tbl);

  //event listener for delete and edit
  //tbl?---
  document.addEventListener("click", (e) => {
    //classList istället---
    if (e.target.className === "deleteButton") {
      //e.target.value is the value of (trashcan) <p> that was defined in the for-loop (46)
      const id = e.target.value;
      deleteByID(model, id);

      e.target.parentNode.parentNode.remove();
    } else if (e.target.className === "editButton") {
      //e.target.value is the value of (editpen) <p> that was defined in the for-loop (58)
      const data = e.target.value;
      popup(data);
    }
  });
};

export default generateTable;
