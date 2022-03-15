const sideMenu = document.querySelector('#nav-menu');
const gifContainer = document.querySelector('.gifcontainer');
var x = true;

function showMenu() {
    sideMenu.classList.add('active');
}

function hideMenu() {
    sideMenu.classList.remove('active');
}

function moveGif() {
    if(x == true){
        gifContainer.classList.add('show-panda');
        x = false;
    }else{
        gifContainer.classList.remove('show-panda');
        x = true;
    }
}



