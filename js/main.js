//If using links with role=button, have to add key event handler that listens for the space key in order to be consistent with native buttons.
function toggleNavMenuIcon() {
  burgerBtn.classList.toggle("fas");
  burgerBtn.classList.toggle("fa-bars");
  burgerBtn.classList.toggle("far");
  burgerBtn.classList.toggle("fa-times-circle");
}

function toggleMobileNav() {
  const burgerBtn = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");
  if (
    navLinks.style.visibility === "hidden" ||
    navLinks.style.visibility === ""
  ) {
    navLinks.style.visibility = "visible";
    toggleNavMenuIcon();
  } else {
    navLinks.style.visibility = "hidden";
    toggleNavMenuIcon();
  }
  //   burgerBtn.classList.toggle("navMenuActive");
}
