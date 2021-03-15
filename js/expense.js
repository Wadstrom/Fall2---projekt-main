import cookieUserID from "./cookiecutter.js";

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    ExpenseName: e.target[0].value,
    Category: e.target[1].value,
    TransactionDate: e.target[2].value,
    ExpenseAmount: e.target[3].value,
    UserId: cookieUserID,
  };

  fetch("https://localhost:44357/api/expense/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};

const getExpenseData = () => {
  fetch(`https://localhost:44357/api/expense/${cookieUserID}/`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = ` <tr id="expenseTableData">
            <th>Name:</th>
            <th>Category:</th>
            <th>Transaction date:</th>
            <th>Amount (kr):</th>
        </tr>`;
      data.forEach(function (expense) {
        output += `
                <tr>
                <td>${expense.ExpenseName}</td>            
                <td>${expense.Category}</td>
                <td>${new Date(expense.TransactionDate).toDateString()}</td>  
                <td>${expense.ExpenseAmount}</td>
            </tr>
                `;
      });
      document.getElementById("expenseTable").innerHTML = output;
      });
};
getExpenseData()



