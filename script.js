const openMenu = document.querySelector('#show-menu');
const sideMenu = document.querySelector('#nav-menu');

var elem2 = document.querySelector('.gifcontainer');
var x = true;

let navSec = document.querySelector('.nav-section ');

openMenu.addEventListener('click', function() {
    sideMenu.classList.add('active');
});

function hideMenu() {
    sideMenu.classList.remove('active');
}

navSec.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "#bbb0b1";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

function moveGif() {
    

    if(x == true){
        elem2.classList.add('show-panda');
        x = false;
    }else{
        elem2.classList.remove('show-panda');
        x = true;
    }
}



