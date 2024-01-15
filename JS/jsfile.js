// const navLinks = document.querySelectorAll('.navbar');
// const windowPathname = window.location.pathname;

const progrossBars = document.querySelectorAll('.progress'); //create the intersection observer
const observer = new IntersectionObserver((enteries) => {
    // loop through the entries
    enteries.forEach((entry) => {
        // check if the entry is intersecting
        if(entry.isIntersecting){
            // add the active class to the progress bars 
            progressBars.forEach((progress) => {
                progress.classaList.add("active");
            });
        }
        else{
            // remove the active class from the progess bars
            progrossBars.forEach((progress) => {
                progress.classList.remove("active");
            });
        }
    })
});
// observe te progress bars
observer.observe(document.querySelector(".progress"));