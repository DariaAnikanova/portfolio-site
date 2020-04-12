const header = document.querySelector("header");
const greeting = document.querySelector(".greeting");

const welcomeSectionOptions = {
    rootMargin: "-250px 0px 0px 0px"
 };

const welcomeSectionObserver = new IntersectionObserver(function(
    entries,
    welcomeSectionObserver
) {
   entries.forEach(entry => {
    if(entry.isIntersecting) {
        header.classList.remove('nav-scrolled')
    } else {
        header.classList.add('nav-scrolled')
        }
   })
}, welcomeSectionOptions);

welcomeSectionObserver.observe(greeting);