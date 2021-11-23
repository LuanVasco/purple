<template>
  <div class="overflow-hidden mt-6 max-w-2xl mx-auto">

    <client-only>
      <div v-swiper:mySwiper="productImg">
        <div class="swiper-wrapper">

          <div class="swiper-slide" 
            v-for="item in gallery"
            :key="item.nome"
          >
            <div class="aspect-w-3 aspect-h-4 rounded-lg">
              <img 
                :src="'data:image/jpeg;base64,'+item.arquivo"
                :alt="item.nome" 
                class="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </client-only>
    
  </div>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array
    }
  },
  data() {
    return {
      productImg: {
        slidesPerView: 1,
        loop: true
      },      
    }
  }
}
</script>