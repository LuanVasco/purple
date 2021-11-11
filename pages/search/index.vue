<template>
  <section>
    <h2>Você procurou por: <br/> "{{ url }}"</h2>
    <transition mode="out-in">
        <BoxProducts :products="products"/>
    </transition>
  </section>
</template>

<script>
export default {
  layout: 'search',
  data() {
    return {
      produtos: null,
      produtosPorPagina: 6,
      produtosTotal: 0,
       products: [
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
         {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
         {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
         {
          name: "Camiseta Básica",
          price: 89.99,
          color: "cinza",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-cinza.png",
          gallery: {
            primary: "/produtos/camiseta-cinza.png",
          }
        },
        {
          name: "Camisa Básica",
          price: 89.99,
          color: "branca",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-branca.png",
          gallery: {
            primary: "/produtos/camiseta-branca.png",
          }
        },
        {
          name: "Camiseta Básica",
          price: 89.99,
          color: "vermelha",
          path: "/produtos/camiseta-basica",
          mainImage: "/produtos/camiseta-vermelha.png",
          gallery: {
            primary: "/produtos/camiseta-vermelha.png",
          }
        },
      ]
    }
  },
  methods: {
    getProdutos() {
      this.produtos = null
      // setTimeout(() => {
      //   this.$axios.get(`/produto?_limit=${this.produtosPorPagina}${this.url}`)
      //   .then(response => {
      //     this.produtosTotal = Number(response.headers['x-total-count']);
      //     this.produtos = response.data;
      //   })
      // }, 1500)
    }
  },
  computed: {
    url() {
      const query = this.$route.query
      return query;
    }
  },
  watch: {
    url() {
      this.getProdutos()
    }
  },
  created() {
    this.getProdutos();
  }
}
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px
}
.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #FFF;
  border-radius: 4px;
  transition:  all 0.2s;
}
.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position:relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: 700;
}

.sem-resultados {
  text-align: center;
}
@media screen and (max-width: 500px) {
  .produtos {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 10px;
  }
}
</style>