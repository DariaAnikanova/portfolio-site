<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      ><router-link to="/" class="footer_logo logo"></router-link
    ></v-app-bar-nav-icon>

    <nav class="header_nav">
      <ul class="header_nav_list link-list" id="navLinks">
        <li class="header_nav_list_item">
          <router-link to="/" class="link-list_item btn header_nav_btn"
            >Home</router-link
          >
        </li>
        <li class="header_nav_list_item">
          <router-link to="/about" class="link-list_item btn header_nav_btn"
            >About</router-link
          >
        </li>
        <li class="header_nav_list_item">
          <router-link to="/projects" class="link-list_item btn header_nav_btn"
            >Projects</router-link
          >
        </li>
      </ul>
    </nav>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  methods: {
    // TODO: Refactor to make sense with Vue
    // toggleNav() {
    //   const burgerBtn = document.getElementById("burgerBtn");
    //   const navLinks = document.getElementById("navLinks");
    //   if (
    //     navLinks.style.visibility === "hidden" ||
    //     navLinks.style.visibility === ""
    //   ) {
    //     navLinks.style.visibility = "visible";
    //     toggleNavMenuIcon();
    //   } else {
    //     navLinks.style.visibility = "hidden";
    //     toggleNavMenuIcon();
    //   }
    //   //   burgerBtn.classList.toggle("navMenuActive");
    // },
    // // TODO: Refactor to make sense with Vue
    // toggleNavMenuIcon() {
    //   burgerBtn.classList.toggle("fas");
    //   burgerBtn.classList.toggle("fa-bars");
    //   burgerBtn.classList.toggle("far");
    //   burgerBtn.classList.toggle("fa-times-circle");
    // },
  },
};
</script>
