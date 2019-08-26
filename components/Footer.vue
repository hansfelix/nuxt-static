<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__sub-container">
        <div class="footer__sub-container-izquierda">
          <img
            src="https://simposio-energias-renovables.firebaseapp.com/static/img/logo-rama.1f79b9f.png"
            alt
            srcset
          />
        </div>
        <div class="footer__sub-container-derecha">
          <p>
            ¿Tienes dudas? Escríbenos:
            <br />
            <a href="mailto:ser@udep.pe">ser@udep.pe</a>
          </p>
          <div class="footer__redes-sociales">
            <img
              id="comp-j1afrwv20imageimageimage"
              alt="Blanca Facebook Icono"
              data-type="image"
              itemprop="image"
              style="width: 38px; height: 38px; object-fit: cover;"
              src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp"
            />
            <img
              id="comp-j1afrwv21imageimageimage"
              alt="LinkedIn"
              data-type="image"
              itemprop="image"
              style="width: 38px; height: 38px; object-fit: cover;"
              src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01/7528824071724d12a3e6c31eee0b40d4.webp"
            />
            <img
              id="comp-j1afrwv22imageimageimage"
              alt="Instagram"
              data-type="image"
              itemprop="image"
              style="width: 38px; height: 38px; object-fit: cover;"
              src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"
            />
          </div>
        </div>
      </div>
      <div
        class="footer__copyright text-center"
      >© 2019 Simposio de Energía renovables. Todos los derechos reservados.</div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: #3a3839;
  color: #d0d0d0;

  .footer__container {
    display: flex;
    flex-wrap: wrap;

    .footer__sub-container {
      display: flex;
      flex: 1 0 100%;
      @include media(xs) {
        flex-direction: column-reverse;
      }
    }

    .footer__sub-container-izquierda {
      flex: 1 0 50%;
      padding: 40px 0;
      @include media(xs) {
        border-top: 1px dotted #b3b3b3;
        flex: 0;
      }
    }
    .footer__sub-container-derecha {
      flex: 1 0 50%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include media(xs) {
        flex-direction: column;
        flex: 0;
      }

      p {
        margin: 35px 0;
        font-size: 1.1rem;
        @include media(xs) {
          text-align: center;
          font-size: 1.2rem;
        }
      }
      .footer__redes-sociales {
        img:nth-child(1) {
          margin-left: 0px;
        }
        img {
          margin-left: 15px;
        }
        @include media(xs) {
          margin-bottom: 30px;
        }
      }
    }
  }

  .footer__copyright {
    border-top: 1px dotted #b3b3b3;
    padding: 15px 5px;
    font-size: 0.9rem;
    flex: 1 0 100%;
    @include media(xs) {
      border-top: 0;
    }
  }
}
</style>