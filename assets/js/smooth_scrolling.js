const background = document.querySelector(".background_container");

function parallax() {
    background.style.top = (window.scrollY / window.innerHeight * -100 * SCROLL_SCALE + SCROLL_OFFSET * SCROLL_SCALE) + "vh";
}

window.addEventListener("scroll", parallax);
parallax();