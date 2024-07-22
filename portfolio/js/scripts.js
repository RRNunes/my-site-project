document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtn = document.getElementById("learnMoreBtn");

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function() {
            window.location.href = "about.html";
        });
    }

    const nav = document.querySelector("nav");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});