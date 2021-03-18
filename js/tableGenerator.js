//-----------------------------------------
const generateTable = (data) => {
  // get the reference for the body
  var body = document.getElementById("table-div");
  // Create table and table body
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  //Declare the prop keys from data - "[0]" because we know the prop key won't change
  var propKey = Object.keys(data[0]);
  data.unshift(data[0]);
  // ROWS (one row = i)
  for (var r = 0; r < data.length; r++) {
    var row = document.createElement("tr");
    //Declare the prop value from data
    var propValue = Object.values(data[r]);
    //COLUMNS (one column = j)
    for (var c = 0; c < propKey.length; c++) {
      var td = document.createElement("td");
      var th = document.createElement("th");
      //if row === 0 then write out th
      if (r === 0) {
        var headerText = document.createTextNode(propKey[c]);
        th.appendChild(headerText);
        row.appendChild(th);
        //else write out all td
      } else {
        var cellText = document.createTextNode(propValue[c]);
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
