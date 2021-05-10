import cookieUserID from "./cookiecutter.js";
import { dotAnimation } from "./animations.js";
//---------------------Collection of "fetch" functions----------------------

export const getDataByName = (name) => {
  return fetch(`https://localhost:44357/api/${name}/${cookieUserID}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch(() => {
       dotAnimation.errorMessage("Unable to retrieve data")
    })
    .finally(() => {
      console.log("Fixa det här")
    })
};

export const deleteByID = (model, id) => {
  dotAnimation.show()
  fetch("https://localhost:44357/api/" + model + "/" + id + "/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    window.location.reload()
  }).catch(() => { 
     dotAnimation.errorMessage("Unable to delete")
  })
    .finally(() => {
      dotAnimation.hide()
    })
};

export const setFriendStatus = (relationshipID, wantedstatus  ) => {
  return  fetch(`https://localhost:44357/api/Friend/${relationshipID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify (
            wantedstatus 
        )
    })
    
};

export const putByID = (requestObject, model, id) => {
  dotAnimation.deleteMessage()
  dotAnimation.show()
  fetch("https://localhost:44357/api/" + model + "/" + id + "/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  }).then(() => {
    window.location.reload()
  }).catch(() => { 
    dotAnimation.errorMessage("Unable to edit")
   }).finally(() => {
     dotAnimation.hide()
   })
};

export const postByModel = (requestObject, model) =>{
  dotAnimation.deleteMessage()
  dotAnimation.show()
  fetch("https://localhost:44357/api/" + model, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  }).then(() => {
    window.location.reload()
  }).catch(() => { 
     dotAnimation.errorMessage("Unable to add") 
  })
    .finally(() => {
      dotAnimation.hide()
    })
}
