const header = document.querySelector("header");
const greeting = document.querySelector(".greeting");
const readMore = document.querySelector(".read-more1");
const project1Modal = document.querySelector(".project-1-modal");
const closeModalBtn = document.querySelector(".modal-close-btn");


/* Change header styling once scrolled */

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

/*Modal functionality*/

function openModal() {
    document.project1Modal.style.visibility = "visible";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.project1Modal.style.visibility = "hidden";
    document.body.style.overflow = "scroll";
}


readMore.addEventListener("click", openModal());
addEventListener("click", closeModal());
welcomeSectionObserver.observe(greeting);