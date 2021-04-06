const popup = () => {
    const overlay = document.getElementById('popup2')
    overlay.className = 'overlay b'
    const popup = document.createElement('div')
    popup.className = 'popup'
    overlay.appendChild(popup)

    const input1 = document.createElement('input')
    input1.className = 'input1'
    popup.appendChild(input1)
    
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