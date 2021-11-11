<template>
  <section class="crianca">
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
       products: [
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
         {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
         {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
         {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          path: "/camiseta-basica",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          path: "/camiseta-basica",
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
.crianca .bg-main {
  background: radial-gradient(50% 50% at 49.76% 50%, #99bccf 0%, #5da0c2 48.44%, #3287af 100%);
}
</style>