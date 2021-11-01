<template>
  <section class="mulher">
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
          img: "/banner-woman.png",
        },
        {
          name: "Calças",
          slogan: "BE FREE TO MAKE ART",
          img: "/banner-woman.png",
        },
        {
          name: "Vestidos",
          slogan: "BE FREE TO MAKE ART",
          img: "/banner-woman.png",
        },
        {
          name: "Regata",
          slogan: "BE FREE TO MAKE ART",
          img: "/banner-woman.png",
        },
      ]
    }
  }
}
</script>

<style scoped>
.bg-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: radial-gradient(50% 50% at 49.76% 50%, #b86e8a 0%, #c94b7b 48.44%, #ce2f6c 100%);
  overflow: hidden;
}
</style>