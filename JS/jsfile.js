


$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});


// var links = document.querySelectorAll('.navbar a');

//         // Loop through each anchor tag
//         links.forEach(function(link) {
//             // Add click event listener to each link
//             link.addEventListener('click', function(event) {
//                 // Remove 'active' class from all links
//                 links.forEach(function(item) {
//                     item.classList.remove('active');
//                 });
//                 // Add 'active' class to the clicked link
//                 this.classList.add('active');
//             });
//         });