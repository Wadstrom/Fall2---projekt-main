import generateTable from "./tableGenerator.js";
import cookieUserID from "./cookiecutter.js"



forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  let requestObject = {
    From_ID: cookieUserID,
    To_Email: e.target[0].value,
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
//getPendingFriend();
