import cookieUserID from "./cookiecutter.js";

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    From_ID: cookieUserID,
    //From_Email: 
    To_Email: e.target[0].value,
    Status: "Pending",
  };

  fetch("https://localhost:44357/api/friend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  });
};

const getPendingFriend = () => {
  fetch("https://localhost:44357/api/friend/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
<<<<<<< HEAD
      let output = ` <tr id="expenseTableData">
=======
      let output =  `<tr id="expenseTableData">
>>>>>>> 38f66583337368ae0417c8ca0c3959b5dde6c33a
      <th>Name:</th>
      <th>Email:</th>
      <th>From user ID:</th>
      <th>Status:</th>
  </tr>`;
data.forEach(function (friend) {
<<<<<<< HEAD
  // += betyder Append och `` betyder "template-strings där vi kan ha en massor html"
  output += `
          <tr>
          <td>Name</td>            
          <td>Email</td>
          <td>${friend.From_ID}</td>  
          <td>${friend.Status}</td>
      </tr>
          `;
});
document.getElementById("expenseTable").innerHTML = output;
=======
  // += betyder Append och ` betyder "template-strings där vi kan ha en massor html"
  output += `
          <tr>
          <td>Name</td>
          <td>Email</td>
          <td>${friend.From_ID}</td>
          <td>${friend.Status}</td>
      </tr>`
          ;
});
document.getElementById("friendtable").innerHTML = output;
>>>>>>> 38f66583337368ae0417c8ca0c3959b5dde6c33a
});
};
getPendingFriend();



  