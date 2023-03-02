/* developed by EcXscariot/yourOrdinaryCarrot */
/* last modified 11/23/2022 */

if (!navigator.userAgent.includes("Mobile")||window.innerWidth > 1920) {
  mouseGlow();
}

// cursor trace function
const mouse = document.querySelector(".mouse");
const triangle = document.getElementById("mouse-triangle");

function mouseMove(e, acctivated) {
    const x = e.clientX - mouse.offsetWidth / 2,
          y = e.clientY - mouse.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }
    mouse.animate(keyframes, {
        duration: 1000,
        fill: "forwards"
    });

    mouse.classList.add("mouse-hover");
    mouse.classList.remove("acctivate");
    triangle.classList.remove("mouse-triangle-invisible");

}

function mouseGlow() {
window.onmousemove = e => {
    const possible = e.target.closest(".trigger"),
          acctivated = possible !== null;    
          
          mouseMove(e, acctivated);
          if (acctivated) {
            mouse.classList.remove("mouse-hover");
            mouse.classList.add("acctivate");
            triangle.classList.add("mouse-triangle-invisible");
        }
     
}
}
if (window.innerWidth > 1920||!navigator.userAgent.includes("Mobile")) {
//right click menu function

let events = ["contextmenu", "touchstart"];
//initial declaration
var timeout;
//for double tap
var lastTap = 0;
//refer menu div
let contextMenu = document.getElementById("context-menu");
//same function for both events
events.forEach((eventType) => {
  document.addEventListener(
    eventType,
    (e) => {
      e.preventDefault();
      //x and y position of mouse or touch
      let mouseX = e.clientX || e.touches[0].clientX;
      let mouseY = e.clientY || e.touches[0].clientY;
      //height and width of menu
      let menuHeight = contextMenu.getBoundingClientRect().height;
      let menuWidth = contextMenu.getBoundingClientRect().width;
      //width and height of screen
      let width = window.innerWidth;
      let height = window.innerHeight;
      //If user clicks/touches near right corner
      if (width - mouseX <= 200) {
        contextMenu.style.borderRadius = "5px 0 5px 5px";
        contextMenu.style.left = width - menuWidth + "px";
        contextMenu.style.top = mouseY + "px";
        //right bottom
        if (height - mouseY <= 200) {
          contextMenu.style.top = mouseY - menuHeight + "px";
          contextMenu.style.borderRadius = "5px 5px 0 5px";
        }
      }
      //left
      else {
        contextMenu.style.borderRadius = "0 5px 5px 5px";
        contextMenu.style.left = mouseX + "px";
        contextMenu.style.top = mouseY + "px";
        //left bottom
        if (height - mouseY <= 200) {
          contextMenu.style.top = mouseY - menuHeight + "px";
          contextMenu.style.borderRadius = "5px 5px 5px 0";
        }
      }
      //display the menu
      contextMenu.style.visibility = "visible";
    },
    { passive: false }
  );
});
//for double tap(works on touch devices)
document.addEventListener("touchend", function (e) {
  //current time
  var currentTime = new Date().getTime();
  //gap between two gaps
  var tapLength = currentTime - lastTap;
  //clear previous timeouts(if any)
  clearTimeout(timeout);
  //if user taps twice in 500ms
  if (tapLength < 500 && tapLength > 0) {
    //display the menu
    contextMenu.style.visibility = "visible";
    e.preventDefault();
  } else {
    //timeout if user doesn't tap after 500ms
    timeout = setTimeout(function () {
      clearTimeout(timeout);
    }, 500);
  }
  //lastTap set to current time
  lastTap = currentTime;
});
//click outside the menu to close it (for click devices)
document.addEventListener("click", function (e) {
  if (!contextMenu.contains(e.target)) {
    contextMenu.style.visibility = "hidden";
  }
});
}

