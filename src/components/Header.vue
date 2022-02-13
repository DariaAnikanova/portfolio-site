<template>
  <header class="header">
    <a href="." class="header_logo logo"
      ><div class="header_logo_icon"></div
    ></a>
    <nav class="header_nav">
      <div
        class="fas fa-bars header_nav_menu-btn"
        id="burgerBtn"
        role="button"
        aria-label="nav menu"
        onclick="toggleNav()"
      ></div>
      <ul class="header_nav_list link-list" id="navLinks">
        <li class="header_nav_list_item">
          <button class="link-list_item btn header_nav_btn">Home</button>
        </li>
        <!-- <li class="header_nav_list_item">
            <button class="link-list_item btn header_nav_btn">About</button>
          </li>
          <li class="header_nav_list_item">
            <button class="link-list_item btn header_nav_btn">Projects</button>
          </li>
          <li class="header_nav_list_item">
            <button class="link-list_item btn header_nav_btn">Blog</button>
          </li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    // TODO: Refactor to make sense with Vue
    toggleNav() {
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
    },
    // TODO: Refactor to make sense with Vue
    toggleNavMenuIcon() {
      burgerBtn.classList.toggle("fas");
      burgerBtn.classList.toggle("fa-bars");
      burgerBtn.classList.toggle("far");
      burgerBtn.classList.toggle("fa-times-circle");
    },
  },
};
</script>
<style scoped lang="scss"></style>
