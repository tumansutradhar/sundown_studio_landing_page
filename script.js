// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

/* Page 3 Section Start */

var featuredContainer = document.querySelector("#featured-container");
var fixedImg = document.querySelector("#fixed-img");

featuredContainer.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
});

featuredContainer.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
});

var project = document.querySelectorAll(".projects");

project.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-img");
        fixedImg.style.backgroundImage = `url(${image})`;
    });
});

/* Page 3 Section End */