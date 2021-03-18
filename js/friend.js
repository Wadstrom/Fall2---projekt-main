import cookieUserID from "./cookiecutter.js";
import generateTable from "./tableGenerator.js";

var email;
var firstname;
var lastname;

const GetNameByUserIdPromise = () => {
  return fetch("https://localhost:44357/api/user/" + cookieUserID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
GetNameByUserIdPromise().then((result) => {
  email = result.Email;
  firstname = result.FirstName;
  lastname = result.LastName;
});

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    From_ID: cookieUserID,
    From_Email: email,
    From_Firstname: firstname,
    From_Lastname: lastname,
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
      generateTable(data);
    });
};
getPendingFriend();
