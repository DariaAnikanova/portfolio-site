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
