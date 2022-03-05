<template>
  <footer class="footer">
    <router-link to="/" class="footer_logo logo"></router-link>
    <ul class="footer_contact-list link-list">
      <li class="footer_contact-list_item link-list_item">
        <a
          href="https://www.linkedin.com/in/dariaanikanova/"
          class="footer_contact-list_item_link link-list_item"
          target="_blank"
          ><span class="fab fa-linkedin" role="img" aria-label="linkedin"></span
        ></a>
      </li>
      <li class="footer_contact-list_item link-list_item">
        <a
          href="https://twitter.com/DariaNovaDev"
          class="footer_contact-list_item_link link-list_item"
          target="_blank"
          ><span
            class="fab fa-twitter-square"
            role="img"
            aria-label="twitter"
          ></span
        ></a>
      </li>
      <li class="footer_contact-list_item link-list_item">
        <a
          href="https://github.com/DariaAnikanova"
          class="footer_contact-list_item_link link-list_item"
          target="_blank"
          ><span
            class="fab fa-github-square"
            role="img"
            aria-label="github"
          ></span
        ></a>
      </li>
      <li class="footer_contact-list_item link-list_item">
        <a
          href="mailto:contact@darianova.dev"
          class="footer_contact-list_item_link link-list_item"
          ><span
            class="fas fa-envelope-square"
            role="img"
            aria-label="email"
          ></span
        ></a>
      </li>
    </ul>

    <small>Daria Anikanova - 2022 &copy;</small>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
