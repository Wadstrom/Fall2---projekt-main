import cookieUserID from "./cookiecutter.js";
//---------------------Collection of "fetch" functions----------------------



export const getDataByName = (name) => {
    return fetch(`https://localhost:44357/api/${name}/${cookieUserID}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => { return data })
}; 


