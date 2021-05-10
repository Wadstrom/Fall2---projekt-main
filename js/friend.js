import generateTable from "./tableGenerator.js";
import cookieUserID from "./cookiecutter.js"
import { getDataByName } from "./fetches.js"
import {feedbackResponse} from "./workhorse.js"

forms.onsubmit = (e) => {
  e.preventDefault();
  console.log(e);
 
  let requestObject = {
    ID: cookieUserID,
    Email: e.target[0].value
  };

  fetch("https://localhost:44357/api/friend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    feedbackResponse(response, "feedback")
   
});
}
getDataByName("Friend").then((data) => {
  friendListSorter(data)
});

function friendListSorter (list) {
  let sent = []
  let received = []
  let friends = []
  list.forEach((obj) => {
    if (obj.List_ID === 1){
      obj["Accept"] = obj.Relationship_ID;
      obj["Decline"] = obj.Relationship_ID;
      delete obj.Relationship_ID
      sent.push(obj)
    } else if (obj.List_ID === 2){
      obj["Delete"] = obj.Relationship_ID;
      delete obj.Relationship_ID
      received.push(obj)
    } else {
      obj["Delete"] = obj.Relationship_ID;
      delete obj.Relationship_ID
      friends.push(obj)
    }
  })
  generateTable(sent, "sent")
  generateTable(received, "received", "Friend")
  generateTable(friends, "friends", "Friend")
}