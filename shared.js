var backdrop = document.querySelector(".backdrop");
var mobileNav = document.querySelector(".nav-mobile");
var headerButton = document.querySelector(".header-button");

headerButton.addEventListener("click", function () {
    if (mobileNav.classList.contains("open")) {
        closeBackdrop();
        mobileNav.classList.remove("open");
    } else {
        backdrop.style.display = "block";
        backdrop.classList.add("open");
        mobileNav.classList.add("open");
    }
});

backdrop.addEventListener("click", function () {
    closeBackdrop();
    mobileNav.classList.remove("open");
});

function closeBackdrop() {
    backdrop.classList.remove("open");
    backdrop.style.display = "none";
}
