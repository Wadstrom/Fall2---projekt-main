const popup = (objValue) => {
    //Get overlay container
    const overlayContainer = document.getElementById('overlay-container')
    //create overlay
    const overlay = document.createElement('div')
    overlay.className = 'overlay'
    overlayContainer.appendChild(overlay)
    overlay.style.visibility = "visible"
    
    //create popup 
    const popup = document.createElement('div')
    popup.className = 'popup popupb'
    overlay.appendChild(popup)

    //creating X button for closeDown popup
    const close = document.createElement('p')
    close.className = "close"
    const x = document.createTextNode("×")
    close.appendChild(x)
    popup.appendChild(close)
    
  
    
  for (var c = 0; c < objValue.length -3; c++){
    //create inputs in popup
    const input = document.createElement('input')
    input.className = 'input1'
    input.value = objValue[c]
    popup.appendChild(input)
    console.log( objValue);
  }

    //Closing down popup
    close.addEventListener('click', () =>{
      console.log("funkar");
      if(overlay.className === 'overlay'){
        overlay.style.visibility = "hidden"
        
        overlay.remove()
      }
    })

    window.onclick = function (event) {
      if (event.target == overlay) {
        overlay.remove();
      }
    };
    
}

export default popup

/* <div class="box">
      <a class="buttonPopup" href="#popup1">About us</a>
      </div>
      <div id="popup1" class="overlay"></div>
<div class="popup">
        <h1>About us</h1>
        <a class="close" href="#">&times;</a>
        <div class="content">
          <p>His palms are sweaty, knees weak, arms are heavy
            There's vomit on his sweater already, mom's spaghetti.
          </p> 
        </div>
      </div> */