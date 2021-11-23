<template>
  <section class="homem">
    <header class="bg-main">
      <MainMenu />
      <MainBanner :bannerItems="bannerItems"/>
    </header>
    <Products :products="products"/>
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
      ],
    }
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/produto/listar?categoria=MASCULINO')
    return {
      products: data.content,
      data
    }
  },
  head() {
    return {
      title: 'Purple | Homem',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conheça novas peças e inove seu visual'
        }
      ]
    }
  }
}
</script>

<style scoped>
.homem .bg-main {
  background: radial-gradient(50% 50% at 49.76% 50%, #e0ca79 0%, #e6c655 48.44%, #e0bb38 100%);
}
</style>