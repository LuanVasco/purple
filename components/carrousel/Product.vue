<template>
  <div class="overflow-hidden mt-6 max-w-2xl mx-auto sm:px-6 lg:px-8">

    <client-only>
      <div v-swiper:mySwiper="productImg">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="aspect-w-3 aspect-h-4 rounded-lg">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="w-full h-full object-center object-cover">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="aspect-w-4 aspect-h-5 sm:rounded-lg :aspect-w-3 lg:aspect-h-4">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="w-full h-full object-center object-cover">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="aspect-w-3 aspect-h-2 rounded-lg">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." class="w-full h-full object-center object-cover">
            </div>
          </div>
        </div>
      </div>
    </client-only>
    
  </div>
</template>

<script>
export default {
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