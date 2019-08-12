<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-main bg-transparent mt-2">
    <div class="container">
      <img :src="logoUrl" class="navbar-logo" />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        v-if="mostrarNavegacion"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup" v-if="mostrarNavegacion">
        <div class="navbar-nav ml-auto">
          <!-- <a class="nav-item nav-link active" href="#">
            Inicio
            <span class="sr-only">(current)</span>
          </a>-->
          <nuxt-link class="nav-item nav-link" to="/" exact>
            Inicio
            <span class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-item nav-link" to="/ponentes" exact>Ponentes</nuxt-link>
          <nuxt-link class="nav-item nav-link" to="/fff">Horario</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  props: {
    logoUrl: {
      type: String,
      default: '/logo.png'
    },
    mostrarNavegacion:{
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
.navbar-logo {
  height: 45px;
}

@media (min-width: 768px) {
  .navbar-logo {
    height: 60px;
  }
}

.navbar-main {
  position: absolute;
  /* width: 100%; inncecesario */
  left: 0;
  right: 0;
}

.navbar-light .navbar-nav .nav-link.nuxt-link-active {
  position: relative;
  font-weight: bold;
}

.navbar-light .navbar-nav .nav-link.nuxt-link-active::after {
  content: "";
  background-color: var(--main-color-1);
  height: 4px;
  width: 80%;
  position: absolute;
  border-radius: 2px;
  left: 10%;
  bottom: 0px;
}
</style>
