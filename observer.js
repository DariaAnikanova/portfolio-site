const header = document.querySelector("header");
const logoDeco = document.querySelector(".logo-deco");
const headerLogo = document.querySelector(".header__logo");
const welcomeSection = document.querySelector(".welcome");

const welcomeSectionOptions = {
    rootMargin: "-100px 0px 0px 0px"
 };

const elementArray = [header, logoDeco, headerLogo];

const welcomeSectionObserver = new IntersectionObserver(function(
    entries,
    welcomeSectionObserver
) {
   entries.forEach(entry => {
    if(entry.isIntersecting) {
        elementArray.forEach(element =>
            element.classList.remove('nav-scrolled')
        )
    } else {
        elementArray.forEach(element =>
            element.classList.add('nav-scrolled')
        )}
   })
}, welcomeSectionOptions);

welcomeSectionObserver.observe(welcomeSection);