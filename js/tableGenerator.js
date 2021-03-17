//-----------------------------------------
const generateTable = (data) => {
  // get the reference for the body
  var body = document.getElementById("table-div");
  console.log("data (array of objects):");
  console.log(data);

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");

  var tblBody = document.createElement("tbody");

  //Declare the prop keys from data - [0] because we know the prop key won't change
  var propKey = Object.keys(data[0]);
  console.log("data prop keys:");
  console.log(propKey);

  data.unshift(data[0]);
  console.log(data);
  // ROWS (one row = i)
  for (var r = 0; r < data.length; r++) {
    var row = document.createElement("tr");

    //Declare the prop value from data
    var propValue = Object.values(data[r]);
    console.log("data prop values:");
    console.log(propValue);
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
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends table into our div
  body.appendChild(tbl);
};
export default generateTable;
