function handleScroll(e) {
    // Check if the window width is 480px or greater
    if (window.innerWidth >= 480) {
        e.preventDefault();

        const works = document.querySelector(".works");
        const projectWidth = works.querySelector('.project').offsetWidth + parseInt(window.getComputedStyle(works.querySelector('.project')).marginRight);

        if (e.deltaY > 0) {
            works.scrollLeft += projectWidth;
        } else {
            works.scrollLeft -= projectWidth;
        }
    }
}

// Attach the scroll handler
window.addEventListener("wheel", handleScroll);

// Re-check on window resize
window.addEventListener("resize", function() {
    if (window.innerWidth < 480) {
        // Disable the scroll if under 480px
        window.removeEventListener("wheel", handleScroll);
    } else {
        // Enable the scroll if 480px or above
        window.addEventListener("wheel", handleScroll);
    }
});
