const projContainer = document.querySelector('.project__container');

projContainer.addEventListener("click", e => {
    //Refactor markup so this works
    const modalToggle = e.target.closest('.read-more');
    console.log(modalToggle);

    if (! modalToggle) return

    const modal = modalToggle.parentNode.nextElementSibling;
    const closeBtn = modal.querySelector('.modal-close-btn');
    console.log(modal);

    modal.classList.add('open');

    closeBtn.addEventListener("click", () => {
        modal.classList.remove('open');
    })
});