<template>
  <section class="bloque bloque-navbar">
    <div class="container">
      <h1 class="titulo-1">Ponentes de talla</h1>
      <p class="subtitulo-1">Además contaremos con ponentes de alto prestigio y experiencia, tanto nacional como internacional, en lo referente a energías renovables que harán que el simposio sea práctico y sobre todo útil.</p>
      <div class="row">
    
        <ponente
          v-for="ponente in listaPonentes"
          :key="ponente.id"
          :mostrarCuatro="true"
          v-bind:fullname="ponente.nombre"
          v-bind:urlImg="ponente.urlImg"
          v-bind:job="ponente.puesto"
        ></ponente>
          
      </div>
    </div>
  </section>
</template>

<script>
import Title from "~/components/Title.vue";
import Ponente from "~/components/SpeakerCard.vue";


export default {
  components: {
    Title,
    Ponente
  },

  data() {
    return {
      listaPonentes: [
        {
          id: 1,
          nombre: "Pedro Gamio",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/PEDROGAMIO.jpg",
          puesto: "Ex Vice Ministro de Energía del Perú"
        },
        {
          id: 2,
          nombre: "Alberto Rios",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/ALBERTORIOS.jpg",
          puesto: "Ex Vice Ministro de Energía del Perú"
        },
        {
          id: 3,
          nombre: "Herrera Descalzi",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/HERRERADESCALZI.jpg",
          puesto: "Ex-ministro de Energía del Perú"
        },
        {
          id: 4,
          nombre: "Julia Justo",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/JULIAJUSTO.jpg",
          puesto: "Directora Ejecutiva del Fondo Nacional del Ambiente"
        },
        {
          id: 5,
          nombre: "César Butrón",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/CESARBUTRON.jpg",
          puesto: "Presidente del COES SINAC"
        },
        {
          id: 6,
          nombre: "Adolfo Rojas",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/ADOLFOROJAS.jpg",
          puesto: "Gerente de Negocios LATAM, SUSTAINABLEARTH"
        },
        {
          id: 7,
          nombre: "Luis Flores",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/LUISFLORES.jpg",
          puesto: "Head of Regulatory Affairs - Renewable Energies, ENEL PERÚ"
        },
        {
          id: 8,
          nombre: "Edwin Derteano",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/EDWINDERTEAN.jpg",
          puesto: "Director de Asociación Automotriz del Perú"
        },
        {
          id: 9,
          nombre: "Tomás Luy",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/TOMASLUY.jpg",
          puesto: "Gerente General, Novum Solar"
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
