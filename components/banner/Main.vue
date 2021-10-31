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
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true
      },
      bannerItems: [
        {
          name: "MEN",
          slogan: "BE FREE TO MAKE ART",
          img: "/banner-men.png",
        },
        {
          name: "WOMAN",
          slogan: "BE FREE TO MAKE ART",
          img: "/banner-woman.png",
        },
        {
          name: "KIDS",
          slogan: "BE FREE TO MAKE ART",
          img: "",
        },
      ]
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
  margin-bottom: 5rem;
  position: relative;
  z-index: 2;
}
.banner-title {
  font-size: 241px;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  line-height: 1;
  letter-spacing: 20px;
  color: #fff;
}

.banner-subtitle {
  font-size: 42px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 30px;
  color: #fff;
}
</style>
