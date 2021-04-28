import cookieUserID from "./cookiecutter.js";
//---------------------Collection of "fetch" functions----------------------

export const getDataByName = (name) => {
  return fetch(`https://localhost:44357/api/${name}/${cookieUserID}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.error("Unable to retrieve data", error));
};

export const deleteByID = (model, id) => {
  fetch("https://localhost:44357/api/" + model + "/" + id + "/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const putByID = (requestObject, model, id) => {
  fetch("https://localhost:44357/api/" + model + "/" + id + "/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestObject),
  }).catch((error) => console.error("Unable to update.", error));
};
