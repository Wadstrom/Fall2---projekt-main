import cookieUserID from "./cookiecutter.js";
//---------------------Collection of "fetch" functions----------------------



export const getDataByName = (name) => {
    return fetch(`https://localhost:44357/api/${name}/${cookieUserID}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => { return data })
};


export const deleteByID = (model, id) => {

    fetch("https://localhost:44357/api/" + model + "/" + id +"/", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },


    })

}

export const setFriendStatus = (relationshipID, wantedstatus  ) => {
    fetch(`https://localhost:44357/api/Friend/${relationshipID}/${wantedstatus}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }
    })
    
};


