<template>
  <section class="crianca">
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

<style scoped>
.bg-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: radial-gradient(50% 50% at 49.76% 50%, #99bccf 0%, #5da0c2 48.44%, #3287af 100%);
  overflow: hidden;
}
</style>