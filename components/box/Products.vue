<template>
  <section class="container mx-auto flex items-start py-16 sm:py-24">
    <aside class="w-1/4">
      <FilterProducts />
    </aside>
    <main class="w-3/4">
      <div class="max-w-2xl mx-auto lg:max-w-7xl">
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <MainCard
            v-for="(product, index) in produtoFiltrado" 
            :key="index"
            :product=product           
          />
        </div>
      </div>
    </main>
  </section>
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      produtoFiltrado: this.products,
    }
  },
  computed: {
    getProductFiltrados() {
      return this.$store.state.product.tiposProdutos
    },
    getColor() {
      return this.$store.state.filter.cores
    },
    getTipoProduto() {
      return this.$store.state.filter.tipo_produto
    }
  },
  watch: {
    getColor(value) {
      if(this.getColor.length) {
        this.reqProdutoByColor(value)
      } else {
        this.produtoFiltrado = this.products
      }
    },
    getTipoProduto(value) {
      if(this.getTipoProduto.length) {
        this.reqProdutoByTipoVestimenta(value)
      } else {
        this.produtoFiltrado = this.products
      }
    },
    getProductFiltrados(value) {
      this.produtoFiltrado = value
    }
  },
  methods: {
    reqProdutoByColor(value) {
      this.$store.dispatch('product/setProdutosByColor', value)      
    },
    reqProdutoByTipoVestimenta(value) {
      console.log(value)
      this.$store.dispatch('product/setProdutosByVestimenta', value)      
    }
  }
}
</script>