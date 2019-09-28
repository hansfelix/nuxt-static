<template>
  <div class="card-speaker col-12 col-sm-6 col-md-4" :class="{'col-lg-3': mostrarCuatro}" style="text-align: center;">
    <div class="card mb-4">
      <div class="row no-gutters">
        <div class="col-4 col-sm-12">
          <img :src="urlImg" class="card-img p-2 p-sm-3 rounded-circle" alt="..." />
        </div>
        <div class="col-8 col-sm-12">
          <div class="card-body text-left text-sm-center pt-sm-0">
            <h5 class="card-title">{{ fullname }}</h5>
            <div class="subtitle-container d-flex">
              <p class="card-subtitle">{{ job }}</p>
            </div>
            <div class="description-container">
              <p class="card-description">
                {{ descripcion }}
              </p>
            </div>
            
            <button @click="showModal = true" class="btn btn-sm w-100 btn-primary">Ver mas</button>

          </div> 
        </div>
      </div>         
    </div>
    
      <SpeakerModal 
        :showSpeakerModal="showModal"
        @close="showModal = false"
        :ponencias='ponencias'
        :nombre='fullname'
        :urlImg='urlImg'
        :cargo='job'
        :descripcion='descripcion'
      />

  </div>
</template>

<script>
import Modal from "~/components/Modal.vue";
import SpeakerModal from "~/components/SpeakerModal/SpeakerModal.vue";

export default {
  props: [
    'fullname' , 
    'urlImg',
    'job',
    'mostrarCuatro',
    'ponencias',
    'descripcion'
  ],
  components: {
    Modal,
    SpeakerModal
  },
  data() {
    return {
      showModal: false
    }; 
  }
    
}
</script>

<style lang="scss">
.card-speaker {
  .card {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important;
    border-color: transparent;
  }
  .card-img {
    height: 100%;
    @include media(md) {
      max-width: 160px;
    }
  }
  .card-body {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @include media(sm) {
      top: unset;
      transform: unset;
      position: unset;
    }
  }

  h5.card-title {
    font-size: 1.08em;
    font-weight: bold;
    margin-bottom: 7px;
  }
  .subtitle-container {
    height: 2.4em;
    text-align: left;
    margin-bottom: 7px;
    .card-subtitle {
      font-size: 0.85em;
      font-weight: normal;
      margin-top: 0;
      width: 100%;
      @include media(sm) {
        text-align: center;
      }
    }
  }
  .description-container {
    display: none;
    @include media(sm) {
      display: block;
      .card-description {
        font-size: 0.75em;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
    
  }
  
} 
</style>