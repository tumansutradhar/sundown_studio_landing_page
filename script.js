const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

/* Page 3 Section Start */

function projectHover() {
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
}

projectHover();

/* Page 3 Section End */

/* Page 5 Section Start */

function swipeHorizontal() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.5,
        spaceBetween: 124.3,
        freeMode: true,
    });
}

swipeHorizontal();

/* Page 5 Section End */