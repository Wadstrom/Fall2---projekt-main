//-----------------------------------------
const generateTable = (data) => {
  console.log("data: ");
  console.log(data);
  // get the reference for the body
  var body = document.getElementById("table-div");
  // create table and table body
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  //Declare the object keys from data - "[0]" because we know the obj keys won't change
  //objKey is gonna be the table headers
  var objKey = Object.keys(data[0]);
  console.log("objKey: ");
  console.log(objKey);
  //copying and adding the first data object to beginning
  data.unshift(data[0]);

  // ROWS (one row = r) creating a row until data.length is reached
  for (var r = 0; r < data.length; r++) {
    var row = document.createElement("tr");
    //Declare the obj value from data
    var objValue = Object.values(data[r]);
    console.log("objValue:");
    console.log(objValue);

    //COLUMNS (one column = c) creating a column until objKey.length is reached
    for (var c = 0; c < objKey.length; c++) {
      var td = document.createElement("td");
      var th = document.createElement("th");
      //if row === 0 then write out th
      if (r === 0) {
        var headerText = document.createTextNode(objKey[c]);
        th.appendChild(headerText);
        row.appendChild(th);
        //else write out all td
      } else {
        var cellText = document.createTextNode(objValue[c]);
        td.appendChild(cellText);
        row.appendChild(td);
      }
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // append tbody in the table
  tbl.appendChild(tblBody);
  // append table into our table-div
  body.appendChild(tbl);
};
export default generateTable;
