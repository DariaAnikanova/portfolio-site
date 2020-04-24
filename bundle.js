(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const initIntersectionObserver = require('./observer');
const initProjectModal = require('./modal');

initIntersectionObserver();
initProjectModal();

},{"./modal":2,"./observer":3}],2:[function(require,module,exports){
module.exports = function initModal() {
    const projContainer = document.querySelector('.project__container');

    projContainer.addEventListener("click", e => {
        const modalToggle = e.target.closest(".read-more");

        if (!modalToggle) return;

        const modal = modalToggle.nextElementSibling;
        const closeBtn = modal.querySelector('.modal-close-btn');

        modal.classList.add('open');
        document.body.style.overflowY= "hidden";

        closeBtn.addEventListener("click", () => {
            modal.classList.remove('open');
            document.body.style.overflowY = "scroll";
        });
    });
}

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);
