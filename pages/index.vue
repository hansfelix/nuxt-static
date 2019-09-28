<template>
  <div class="preVenta">
    <NavBar logoUrl="/logo-udep.png" />
    <!-- Bloque principal -->
    <section class="bloque bloque-principal">
      <div class="container h-100">
        <div class="row h-100 align-content-center">
          <div class="col-lg-8 preVenta-columna-centrada">
            <img src="/logo-con-frase.png" width="475px" class="img-principal" srcset />

            <div class="row my-3 text-center">
              <div class="col-12 col-md-6 mb-2 mb-md-0 text-md-rigth">
                <img src="/index_fechas.png" alt width="140px" />
              </div>
              <div class="col-12 col-md-6 mt-2 mt-md-0 text-md-left">
                <img src="/index_lugar.png" alt width="250px" />
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <!--align-self-center -->
            <!-- Formulario Lead -->
            <LeadForm />
          </div>
        </div>
      </div>
    </section>

    <!-- Bloque DESCRIPCIÓN -->
    <section class="bloque-descripcion" style="width:100%">
      <div class="container">
        <div class="bloque-descripcion--contenido">
          <h2 class="text-center mb-4">
            <span class="titulo-1">Hacia un país tecnológico</span>
          </h2>
          <p style="max-width: 800px;">
            El
            <span class="texto-simposio">Simposio de Energías Renovables</span> tiene como objetivo fortalecer la red de conocimiento en energías renovables,
            además de generar espacios de propuestas en el sector energético con viabilidad técnica,
            social, ambiental y económica para un desarrollo sostenible.
          </p>
        </div>
      </div>
    </section>

    <!-- Bloque EJES -->
    <section class="bloque-ejes pt-0">
      <div class="container">
        <h2 class="text-center mb-4">
          <span class="titulo-1">Ejes temáticos</span>
        </h2>
        <div class="row mt-5">
          <div class="col-6 col-md-3 eje">
            <img src="/icon-movilidad-electrica.png" alt srcset />
            <p class="mt-2">Movilidad Eléctrica</p>
          </div>
          <div class="col-6 col-md-3 eje">
            <img src="/icon-innovacion.png" alt srcset />
            <p class="mt-2">Innovación y tecnologías disruptivas</p>
          </div>
          <div class="col-6 col-md-3 eje">
            <img src="/icon-actual.png" alt srcset />
            <p class="mt-2">Estado actual de la normativa peruana</p>
          </div>
          <div class="col-6 col-md-3 eje">
            <img src="/icon-futuro.png" alt srcset />
            <p class="mt-2">Presente y futuro de las energías renovables</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Boque VIDEO -->
    <section class="bloque-video">
      <div class="container" style="max-width:750px">
        <h2 class="text-center mb-5">
          <span class="titulo-1 titulo-1--light">¿Por qué asistir?</span>
        </h2>
        <style>
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
        </style>
        <div class="embed-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/XvcwSB96c4U"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Bloque PRECIO -->
    <section class="bloque-precio">
      <div class="container">
        <h2 class="text-center mb-5">
          <span class="titulo-1">Inversión</span>
        </h2>
        <p class="mb-5">
          Todas las entradas incluyen 💻
          <strong>certificado digital</strong> y ☕
          <strong>coffee break</strong>.
        </p>
        <div class="row">
          <div class="col-6 col-sm-6 col-md-3">
            <PriceCard title="Estudiante IEEE" price="130" />
          </div>

          <div class="col-6 col-sm-6 col-md-3">
            <PriceCard title="Estudiante" price="180" />
          </div>

          <div class="col-6 col-sm-6 col-md-3">
            <PriceCard title="Profesional IEEE" price="230" />
          </div>

          <div class="col-6 col-sm-6 col-md-3">
            <PriceCard title="Profesional" price="280" />
          </div>
        </div>
      </div>
    </section>

    <!-- Bloque PONENTES -->
    <section class="bloque-ponentes">
      <div class="container">
        <h2 class="text-center mb-5">
          <span class="titulo-1">Ponentes</span>
        </h2>
        <div class="row">
          <ponente
            v-for="ponente in listaPonentes"
            :key="ponente.id"
            v-bind:fullname="ponente.nombre"
            v-bind:urlImg="ponente.urlImg"
            v-bind:job="ponente.puesto"
          ></ponente>
        </div>
      </div>
    </section>

    <!-- Bloque AUSPICIOS -->
    <section class="bloque-auspicios">
      <div class="container text-center">
        <h5>AUSPICIAN</h5>
        <div class="row">
          <div class="col">
            <img src="/logos/auspicios/te-logo.svg" width="150px" srcset />
          </div>
          <div class="col">
            <img src="/logos/auspicios/logitech-logo.svg" width="150px" srcset />
          </div>
          <div class="col">
            <img src="/logos/auspicios/bticino-logo.svg" width="150px" srcset />
          </div>
        </div>
        <H5 class="mt-5">CON EL APOYO DE</H5>
        <div class="row">
          <div class="col">
            <img src="/logos/auspicios/ieee-peru-logo-04.svg" width="150px" srcset />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import landing from "~/layouts/landing.vue";
import NavBar from "~/components/Navbar.vue";
import LeadForm from "~/components/LeadForm.vue";
import Ponente from "~/components/SpeakerCard.vue";
import PriceCard from "~/components/PriceCard.vue";

export default {
  layout: "landing",
  components: {
    NavBar,
    LeadForm,
    Ponente,
    PriceCard
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
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.preVenta {
  .img-principal {
    max-width: 100%;
    height: auto;
    width: auto;

    @include media(xs) {
      margin-bottom: 15px;
    }
  }

  .bloque-descripcion {
    // background-color: #bed062;
    color: #404040;
    padding: 60px 0;

    .bloque-descripcion--contenido {
      // display: flex;

      p {
        font-size: 1.1rem;
        line-height: 2rem;
        margin: 0 auto;
        text-align: center;
      }
      .img-video {
        border-radius: 5px;
        margin-left: 20px;
      }
    }
  }

  .bloque-ejes {
    padding: 60px 0;

    .eje {
      text-align: center;
    }
  }

  .bloque-video {
    padding: 60px 0;
    background: linear-gradient(
        rgba(195, 207, 106, 0.9),
        rgba(195, 207, 106, 0.9)
      ),
      url(https://www.sciencenewsforstudents.org/sites/default/files/scald-image/860_rains_in_Africa_wind_solar.png);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .bloque-precio {
    padding: 50px 0;
    text-align: center;



    .card-body {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      @include media(sm) {
        justify-content: center;
      }
    }



    
  }

  .bloque-ponentes {
    // background-color: var(--main-color-1);
    padding: 50px 0;
    // color: white;

    .ponente {
      text-align: center;

      .ponente__img {
        border-radius: 50%;
      }

      .ponente__nombre {
        margin: 15px 0 5px;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }

  .bloque-auspicios {
    padding: 50px 0;
    background-color: #d8d8d8;
  }
}

.preVenta-columna-centrada {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

