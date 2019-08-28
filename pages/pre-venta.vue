<template>
  <div class="preVenta">
    <NavBar logoUrl="/logo-udep.png" :mostrarNavegacion="false" />
    <!-- Bloque principal -->
    <section class="bloque bloque-principal">
      <div class="container h-100">
        <div class="row h-100 align-content-center">
          <div class="col-md-8 preVenta-columna-centrada">
            <img src="/logo-con-frase.png" width="475px" class="img-principal" srcset />

            <div class="row mt-4 d-none d-sm-flex">
              <div class="mr-4">
                <img src="/index_fechas.png" alt width="140px" />
              </div>
              <div class>
                <img src="/index_lugar.png" alt width="250px" />
              </div>
            </div>
          </div>

          <div class="col-md-4">
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

    <!-- Bloque PONENTES -->
    <section class="bloque-ponentes">
      <div class="container">
        <h2 class="text-center mb-5">
          <span class="titulo-1">Ponentes</span>
        </h2>
        <div class="row">
          <div class="col ponente">
            <img src="/ponentes/javier-peon.png" width="140px" height="140px" class="ponente__img" />
            <h4 class="ponente__nombre">Javier Peón</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
          <div class="col ponente">
            <img src="/ponentes/cesar-butron.jpg" width="140px" height="140px" class="ponente__img" />
            <h4 class="ponente__nombre">César Butron</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
          <div class="col ponente">
            <img src="/ponentes/adolfo-rojas.jpg" width="140px" height="140px" class="ponente__img" />
            <h4 class="ponente__nombre">Adolfo Rojas</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
          <div class="col ponente">
            <img src="/ponentes/daniel-cumpa.jpg" width="140px" height="140px" class="ponente__img" />
            <h4 class="ponente__nombre">Denis Zarate</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
          <div class="col ponente">
            <img
              src="/ponentes/david-humpire.jpg"
              width="140px"
              height="150px"
              class="ponente__img"
            />
            <h4 class="ponente__nombre">Rodolfo Zamalloa</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col ponente">
            <img src="/ponentes/tomas-luy.jpg" width="140px" height="140px" class="ponente__img" />
            <h4 class="ponente__nombre">Jorge Guimac</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
          <div class="col ponente">
            <img
              src="/ponentes/orlando-chavez.jpg"
              width="140px"
              height="140px"
              class="ponente__img"
            />
            <h4 class="ponente__nombre">Darwin Medina</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
          <div class="col ponente">
            <img src="/ponentes/luis-flores.jpg" width="140px" height="140px" class="ponente__img" />
            <h4 class="ponente__nombre">Riquel Mitma</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
          <div class="col ponente">
            <img
              src="/ponentes/edwin-derteano.jpg"
              width="140px"
              height="140px"
              class="ponente__img"
            />
            <h4 class="ponente__nombre">Luis Espinoza</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
          <div class="col ponente">
            <img src="/ponentes/alberto-rios.jpg" width="140px" height="150px" class="ponente__img" />
            <h4 class="ponente__nombre">Alberto Rios</h4>
            <p>Director of Client Services en Clix Marketing</p>
          </div>
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

export default {
  layout: "landing",
  components: {
    NavBar,
    LeadForm
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
      margin-bottom: 35px;
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
  .datos > div {
  }
}

.preVenta-columna-centrada {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

