<template>
  <div class="home">
    <header class="bg-main">
      <MainMenu />
      <MainBanner :bannerItems="bannerItems"/>
    </header>
    <MainBox />
    <Categories />
    <GroupLink />
  </div>
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
          slogan: "BE FREE TO MAKEART",
          img: "/banner-woman.png",
        },
        {
          name: "KIDS",
          slogan: "BE FREE TO MAKE ART",
          img: "",
        },
      ]
    }
  },
  head() {
    return {
      title: 'Home | Purple',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conheça nossa loja'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home .bg-main {
  background: radial-gradient(50% 50% at 49.76% 50%, #8CBEF9 0%, #1686EA 48.44%, #4B13CC 100%);
}
</style>