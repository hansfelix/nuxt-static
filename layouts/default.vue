<template>
  <div class>
    <NavBar/>
    <Nuxt/>
  </div>
</template>

<script>
import NavBar from "~/components/Navbar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style>
:root {
  --main-color-1: #c3cf6a;
  --main-color-2: #91b053;
  --main-color-3: #6c8e50;
}

body{
  margin: 0;
  font-family: 'Raleway', sans-serif;
}

body p { 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

</style>

