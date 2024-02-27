// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var projectContainer = document.querySelector("#project-container");
var projectImages = document.querySelector("#project-images");

projectContainer.addEventListener("mouseenter", function () {
    projectImages.style.display = "block";
});

projectContainer.addEventListener("mouseleave", function () {
    projectImages.style.display = "none";
});

var projects = document.querySelectorAll("#projects");

projects.forEach(function (a) {
    a.addEventListener("mouseenter", function () {
        var dataImages = a.getAttribute("data-images");
        projectImages.style.backgroundImage = `url(${dataImages})`;
    });
});