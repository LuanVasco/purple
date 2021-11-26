<template>
  <section class="mulher">
    <header class="bg-main">
      <MainMenu />
      <MainBanner :bannerItems="bannerItems"/>
    </header>
    <Products :products="products"/>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    const data = await $axios.$get('/produto/listar?categorias=FEMININO')
    const tipos_produtos = await $axios.$get(`/tipo-vestimenta/listar?categorias=FEMININO`)

    store.commit('product/setTiposProdutos', tipos_produtos.content)

    return {  
      products: data.content,
      data
    }
  },
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
      ],
    }
  },
  head() {
    return {
      title: 'Purple | Mulher',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conheça nossas peças e coleções novas'
        }
      ]
    }
  }
}
</script>

<style scoped>
.mulher .bg-main {
  background: radial-gradient(50% 50% at 49.76% 50%, #b86e8a 0%, #c94b7b 48.44%, #ce2f6c 100%);
}
</style>