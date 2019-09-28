<template>
  <div>
    <Nuxt />
    <Footer />
    <div id="fb-root"></div>
    <!-- Your customer chat code -->
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="109700820384167"
      theme_color="#91b053"
      logged_in_greeting="Hola, escríbenos si necesitas más información"
      logged_out_greeting="Hola, escríbenos si necesitas más información"
    ></div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {Footer},

  created(){
      //   $window.fbAsyncInit = function() {
      //     FB.init({
      //       xfbml            : true,
      //       version          : 'v4.0'
      //     });
      //   };

      //   (function(d, s, id) {
      //   var js, fjs = d.getElementsByTagName(s)[0];
      //   if (d.getElementById(id)) return;
      //   js = d.createElement(s); js.id = id;
      //   js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
      //   fjs.parentNode.insertBefore(js, fjs);
      // }(document, 'script', 'facebook-jssdk'));      
  }
};
</script>