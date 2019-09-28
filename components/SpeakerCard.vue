<template>
  <div class="col-12 col-md-3" style="text-align: center;">
    <div class="card mb-4">
      <div class="row no-gutters">
        <div class="col-4 col-md-12">
          <img :src="urlImg" class="card-img p-2 p-md-3 rounded-circle" alt="..." />
        </div>
        <div class="col-8 col-md-12">
          <div class="card-body text-left text-md-center">
            <h5 class="card-title">{{ fullname }}</h5>
            <!-- <p
              class="card-text"
              style="font-size: 13px;"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <a href="#" class="btn btn-primary">Ver mas</a>
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
    'urlImg'
  ]
    
}
</script>

<style lang="scss">
.card-img {
  height: 100%;
  @include media(md) {
    max-width: 160px;
  }
}
</style>