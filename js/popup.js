const popup = (objValue) => {
  //Get overlay container
  const overlayContainer = document.getElementById("overlay-container");
  //create overlay
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlayContainer.appendChild(overlay);
  overlay.style.visibility = "visible";

  //create popup
  const popup = document.createElement("div");
  popup.className = "popup popupb";
  overlay.appendChild(popup);

  //Creating X button for closeDown popup
  const close = document.createElement("p");
  close.className = "close";
  const x = document.createTextNode("×");
  close.appendChild(x);
  popup.appendChild(close);

  //Creating Form
  const form = document.createElement("form")
  form.id = "popupForm"
  popup.appendChild(form)

  console.log(objValue.length);
  
 // for (var c = 0; c < objValue.length - 3; c++) {
   Object.values(objValue).forEach(element => {   
     //create inputs in popup
     const input = document.createElement("input");
     input.className = "input1";
     input.value = element;
     form.appendChild(input);
     
     console.log(element);
   });
//  }

  //Creating SubmitButton 
  const btn = document.createElement('button')
  btn.className = "submit-btn"
  const TextButton = document.createTextNode("Submit")
  btn.appendChild(TextButton)
  btn.type = "submit"
  form.appendChild(btn)


  //Closing down popup
  close.addEventListener("click", () => {
    console.log("funkar");
    if (overlay.className === "overlay") {
      overlay.style.visibility = "hidden";
      overlay.remove();
    }
  });

  window.onclick = function (event) {
    if (event.target == overlay) {
      overlay.remove();
    }
  };

  

  popupForm.onsubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const requestObject = Object.entries(objValue).map((entry) => {
      const [key, value] = entry

      console.log(`${key}: ${value}`);
    })
    console.log(requestObject);
  }

};


export default popup;
