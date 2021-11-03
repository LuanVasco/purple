<template>
  <section class="homem">
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
.homem .bg-main {
  background: radial-gradient(50% 50% at 49.76% 50%, #e0ca79 0%, #e6c655 48.44%, #e0bb38 100%);
}
</style>