

let menu = document.getElementById('menu');
let toggle = false;

const hendleMenu = () => {


    if(toggle === false){
        menu.style.transform = "translate(0%)";
        toggle = true;
    } else if(toggle === true) {
        menu.style.transform = "translate(-150%)";
        toggle = false;
    }
}

const hidemenu = () => {
    menu.style.transform = "translate(-150%)";
    toggle = false;
}

// aos library code 
AOS.init();