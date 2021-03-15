import cookieUserID from "./cookiecutter.js";

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    IncomeName: e.target[0].value,
    IncomeAmount: e.target[1].value,
    TransactionDate: e.target[2].value,
    UserId: cookieUserID
  };

  fetch("https://localhost:44357/api/Income", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};
var data1 = []
const GetIncomeByUserId = () => {
fetch("https://localhost:44357/api/Income/" + cookieUserID)
.then((response) => {return response.json() 
})
.then((data) => { data1={IncomeName: data.IncomeName, IncomeAmount: data.IncomeAmount}
return data1
})
}

console.log(GetIncomeByUserId())

//-----------------------------------------
function generate_table(data) {
  // get the reference for the body
  var body = document.getElementById("incometable");

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < data.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

