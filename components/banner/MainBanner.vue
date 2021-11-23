<template>
  <section class="banner">
    <client-only>
    <div v-swiper:mySwiper="options">
      <div class="swiper-wrapper">
        <div 
          v-for="(item, index) in bannerItems" 
          :key="index" 
          class="banner-wrapper swiper-slide"
        >
          <img 
            :src="item.img" 
            alt=""
            class="banner-img"
          />
          <div class="banner-content">
            <h2 class="banner-title">{{ item.name }}</h2>
            <p class="banner-subtitle">{{ item.slogan }}</p>
          </div>
        </div>
      </div>
    </div>
    </client-only>
  </section>
</template>

<script>
export default {
  props: {
    bannerItems: {
      type: Array,
      default: ""
    }
  },
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true
      },      
    }
  }
}
</script>

<style>
.banner {
  position: relative;
}
.banner-wrapper {
  text-align: center;
}
.banner-img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.banner-content {
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}
.banner-title {
  font-size: 60px;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  line-height: 1;
  letter-spacing: 5px;
  color: #fff;
}

.banner-subtitle {
  font-size: 21px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 3px;
  color: #fff;
}
@media (min-width: 768px) {
  .banner-content {
    margin-bottom: 5rem;
  }
  .banner-title {
    font-size: 241px;
    letter-spacing: 20px;
  }

  .banner-subtitle {
    font-size: 42px;
    letter-spacing: 30px;
  }
}

</style>
