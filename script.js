document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeIcon = document.querySelector(".close");

    // Open sidebar
    menuIcon.addEventListener("click", function () {
        sidebar.style.left = "0";
    });

    // Close sidebar
    closeIcon.addEventListener("click", function () {
        sidebar.style.left = "-550px";
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector("header"); // Change this if your navbar has a different tag

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down → Hide navbar
        navbar.style.display = "none";
    } else {
        // Scrolling up → Show navbar
        navbar.style.display = "block";
    }

    lastScrollTop = scrollTop;
});
