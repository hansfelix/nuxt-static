<template>
  <div class="preVenta">
    <NavBar logoUrl="/logo-udep.png" :mostrarNavegacion="false" />
    <!-- Bloque principal -->
    <section class="bloque bloque-principal">
      <div class="container h-100">
        <div class="row h-100 align-content-center">
          <div class="col-md-8 preVenta-columna-centrada">
            <img src="/logo-con-frase.png" width="475px" class="img-principal" srcset />

            <div class="row mt-4">
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

    <!-- Bloque Sec -->
    <section class="bloque-descripcion">
      <div class="container">
        <h2>Compartimos conocimiento</h2>
        <p>
          El Simposio tiene como objetivo fortalecer la red de conocimiento en energías renovables,
          además de generar espacios de propuestas en el sector energético con viabilidad técnica,
          social , ambiental y económica para un desarrollo sostenible.
        </p>
      </div>
    </section>

    <!-- Bloque Sec -->
    <section class="bloque-ejes">
      <div class="container">
        <h2 class="titulo-1">Ejes temáticos</h2>
        <div class="row mt-5">
          <div class="col eje">
            <img src="/icon-movilidad-electrica.png" alt srcset />
            <p class="mt-2">Movilidad Eléctrica</p>
          </div>
          <div class="col eje">
            <img src="/icon-innovacion.png" alt srcset />
            <p class="mt-2">Innovación y tecnologías disruptivas</p>
          </div>
          <div class="col eje">
            <img src="/icon-actual.png" alt srcset />
            <p class="mt-2">Estado actual de la normativa peruana</p>
          </div>
          <div class="col eje">
            <img src="/icon-futuro.png" alt srcset />
            <p class="mt-2">Presente y futuro de las energías renovables</p>
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
  }

  .bloque-descripcion {
    background-color: #bed062;
    color: #404040;
    padding: 50px 0;
  }

  .bloque-ejes {
    padding: 50px 0;

    .eje {
      text-align: center;
    }
  }

  .datos > div {
  }
}
.preVenta-columna-centrada {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;
}
</style>

