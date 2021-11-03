<template>
  <section class="mulher">
    <header class="bg-main">
      <MenuMain />
      <BannerMain :bannerItems="bannerItems"/>
    </header>
    <BoxProducts :products="products"/>
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
      ],
      products: [
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
         {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
         {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
         {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
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