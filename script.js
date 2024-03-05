// Loader Animation Start

function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4000);
}

loaderAnimation();

// Loader Animation End

// Page 3 Section Start

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

// Page 3 Section End

// Page 5 Section Start

function swipeHorizontal() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.5,
        spaceBetween: 124.3,
        freeMode: true,
    });
}

swipeHorizontal();

// Page 5 Section End

// Menu Animation Section Start

function menuAnimation() {
    var menu = document.querySelector("nav>h4");
    var menuClick = document.querySelector("#menu-click");
    var navImg = document.querySelector("nav img");
    var flag = 0;

    menu.addEventListener("click", function () {
        if (flag == 0) {
            menuClick.style.top = 0;
            navImg.style.opacity = 0;
            flag = 1;
        } else {
            menuClick.style.top = "-100%";
            navImg.style.opacity = 1;
            flag = 0;
        }
    });
}

menuAnimation();

// Menu Animation Section End