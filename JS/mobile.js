var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.left = "0";
    }
    function hideMenu(){
        navLinks.style.left = "-300px";
    }

var targetElement = document.getElementById("yourTarget");
        if (targetElement) {
            targetElement.addEventListener("click", hideMenu);
        }

