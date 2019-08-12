<template>
  <section class="bloque bloque-navbar">
    <div class="container">
      <h1 class="titulo-1">Ponentes de talla</h1>
      <p class="subtitulo-1">Además contaremos con ponentes de alto prestigio y experiencia, tanto nacional como internacional, en lo referente a energías renovables que harán que el simposio sea práctico y sobre todo útil.</p>
      <div class="d-flex flex-wrap" style="margin-right: -15px;">
        <div class="w-20" v-for="ponente in listaPonentes" :key="ponente">
          <div class="card mb-4" style="margin-right: 15px;">
            <img :src="ponente.urlImg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ ponente.nombre }}</h5>
              <p
                class="card-text"
                style="font-size: 13px;"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "~/components/Title.vue";

export default {
  components: {
    Title
  },

  data() {
    return {
      listaPonentes: [
        {
          nombre: "Pedro Gamio",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/PEDROGAMIO.jpg"
        },
        {
          nombre: "Alberto Rios",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/ALBERTORIOS.jpg"
        },
        {
          nombre: "Herrera Descalzi",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/HERRERADESCALZI.jpg"
        },
        {
          nombre: "Julia Justo",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/JULIAJUSTO.jpg"
        },
        {
          nombre: "César Butrón",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/CESARBUTRON.jpg"
        },
        {
          nombre: "Adolfo Rojas",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/ADOLFOROJAS.jpg"
        },
        {
          nombre: "Luis Flores",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/LUISFLORES.jpg"
        },
        {
          nombre: "Edwin Ertean",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/EDWINDERTEAN.jpg"
        },
        {
          nombre: "Tomás Luy",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/TOMASLUY.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.links {
  padding-top: 15px;
}

.w-20 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.66% !important;
  flex: 0 0 16.66% !important;
  max-width: 16.66%;
  /* margin-right: 15px; */
}
</style>
