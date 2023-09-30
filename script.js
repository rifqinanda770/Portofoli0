window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const scrollValue = window.scrollY;

    header.style.backgroundPositionY = -scrollValue * 0.5 + "px";
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
