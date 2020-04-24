module.exports = function initIntersectionObserver() {
    const header = document.querySelector("header");
    const greeting = document.querySelector(".greeting");

    /* Change header styling once scrolled */

    const welcomeSectionOptions = {
        rootMargin: "-150px 0px 0px 0px"
    };

    const welcomeSectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                header.classList.remove('nav-scrolled');
            } else {
                header.classList.add('nav-scrolled');
            }
        });
    }, welcomeSectionOptions);

    welcomeSectionObserver.observe(greeting);
}
