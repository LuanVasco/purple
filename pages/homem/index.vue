<template>
  <section class="homem">
    <header class="bg-main">
      <MenuMain />
      <BannerMain :bannerItems="bannerItems"/>
    </header>
    <BoxProducts />
    <BoxNews />
    <MenuFooter />
  </section>
</template>

<script>
export default {
  data() {
    return {
      bannerItems: [
        {
          name: "Camisetas",
          slogan: "BE FREE TO MAKE ART",
          img: "/banner-men.png",
        },
        {
          name: "Calças",
          slogan: "BE FREE TO MAKE ART",
          img: "/banner-men.png",
        },
        {
          name: "Vestidos",
          slogan: "BE FREE TO MAKE ART",
          img: "/banner-men.png",
        },
        {
          name: "Regata",
          slogan: "BE FREE TO MAKE ART",
          img: "/banner-men.png",
        },
      ]
    }
  }
}
</script>

<style scoped>

.homem {
  background-color: #fff;
}
.bg-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: radial-gradient(50% 50% at 49.76% 50%, #e0ca79 0%, #e6c655 48.44%, #e0bb38 100%);
  overflow: hidden;
}
</style>