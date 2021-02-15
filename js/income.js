forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    IncomeName: e.target[0].value,
    IncomeAmount: e.target[1].value,
    TransactionDate: e.target[2].value,
    UserId: e.target[3].value,
  };

  fetch("https://localhost:44357/api/Income", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};
