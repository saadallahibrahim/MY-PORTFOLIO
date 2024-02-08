

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".navbar ul a");
const menuLength = menuItem.length;

for(var i = 0; i < menuLength; i++) {
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active";
    }
}



function animateProgressBar(barId, percentage) {
    var bar = document.getElementById(barId);
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= percentage) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        }
    }
}

animateProgressBar("htmlBar", 90);
animateProgressBar("cssBar", 85);
animateProgressBar("jsBar", 80);
animateProgressBar("phpBar", 75);
animateProgressBar("mysqlBar", 70);



// scrollReveal start here for index

 // Initialize ScrollReveal
 ScrollReveal().reveal('.headings', {
    duration: 700,
    delay: 200,
    easing: 'ease-in-out',
    origin: 'top',
    distance: '50px',
    opacity: 0,
    scale: 0.8
});


ScrollReveal().reveal('.icons', {
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    origin: 'left',
    distance: '600px',
    opacity: 0,
    scale: 0.8
});




// // scrollReveal start here for about


ScrollReveal().reveal('.navbar', {
    duration: 800,
    delay: 250,
    easing: 'ease-in-out',
    origin: 'left',
    distance: '50px',
    opacity: 0,
    scale: 0.8
});

ScrollReveal().reveal('.skill', {
    duration: 800,
    delay: 300,
    easing: 'ease-in-out',
    origin: 'top',
    distance: '40px',
    opacity: 0,
    scale: 0.8
});


// // scrollReveal start here for resume

ScrollReveal().reveal('.details', {
    duration: 800,
    delay: 200,
    easing: 'ease-in-out',
    origin: 'buttom',
    distance: '30px',
    opacity: 0,
    scale: 0.8
});


// the navbar for media query

// var navLinks = document.getElementById("navLinks");

//     function showMenu(){
//         navLinks.style.left = "0";
//     }
//     function hideMenu(){
//         navLinks.style.left = "-300px";
//     }

//     var targetElement = document.getElementById("yourTarget");
//     if (targetElement) {
//         targetElement.addEventListener("click", hideMenu);
//     }


var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.left = "0";
    navLinks.classList.add("active"); // Add the "active" class to handle the display
}

function hideMenu() {
    navLinks.style.left = "-300px";
    navLinks.classList.remove("active"); // Remove the "active" class
}





   

