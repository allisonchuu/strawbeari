/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");


var x = true;

function moveGif() {
    var elem2 = document.querySelector('.gifcontainer');

    if(x == true){
        elem2.classList.add('show-panda');
        x = false;
    }else{
        elem2.classList.remove('show-panda');
        x = true;
    }
}



