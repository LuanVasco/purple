<template>
  <section class="crianca">
    <header class="bg-main">
      <MainMenu />
      <MainBanner :bannerItems="bannerItems"/>
    </header>
    <Products 
      :products="products"
    />
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
      ],
    }
  },
  async asyncData({ $axios }) {
    const data = $axios.get('/produto/listar?categoria=INFANTIL')
    return {
      data,
      products: data.content,
    }
  },
  head() {
    return {
      title: 'Purple | Infantil',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conheça nossa moda infantil'
        }
      ]
    }
  }

}
</script>

<style scoped>
.crianca .bg-main {
  background: radial-gradient(50% 50% at 49.76% 50%, #99bccf 0%, #5da0c2 48.44%, #3287af 100%);
}
</style>