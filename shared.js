var mobileNav = document.querySelector(".nav-mobile");
var headerButton = document.querySelector(".header-button");

headerButton.addEventListener("click", function() {
    if (mobileNav.classList.contains("open")) {
        mobileNav.classList.remove("open")
    }
    else {
        mobileNav.classList.add("open")
    }
});
