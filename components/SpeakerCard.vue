<template>
  <div class="card-speaker col-12 col-sm-6 col-md-4" :class="{'col-lg-3': mostrarCuatro}" style="text-align: center;">
    <div class="card mb-4">
      <div class="row no-gutters">
        <div class="col-4 col-sm-12">
          <img :src="urlImg" class="card-img p-2 p-sm-3 rounded-circle" alt="..." />
        </div>
        <div class="col-8 col-sm-12">
          <div class="card-body text-left text-sm-center pt-sm-0">
            <h5 class="card-title">
              {{ fullname }}
              <p class="card-subtitle">{{ job }}</p>
            </h5>
            <a href="#" class="btn btn-sm d-none d-sm-block w-100 btn-primary">Ver mas</a>  
          </div> 
        </div>
      </div>         
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'fullname' , 
    'urlImg',
    'job',
    'mostrarCuatro'
  ]
    
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
    
    .card-subtitle {
      font-size: 0.88em;
      font-weight: normal;
      padding-top: 7px;
    }
  }
} 
</style>