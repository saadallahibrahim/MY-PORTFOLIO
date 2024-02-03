

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
