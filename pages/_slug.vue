<template>
  <div class="container mx-auto py-20">
    <div class="grid grid-cols-2">
      
      <ProductCarrousel
        :gallery=gallery
      />

      <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-2xl lg:pt-16 lg:pb-24 lg:px-8">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {{ data.nome }}
          </h1>
        </div>

        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <p class="text-2xl my-4">
            <span class="text-gray-900"
              :class="data.valorUnitarioDesconto ? 'line mr-6' : ''"
            >
              {{ data.valorUnitario | priceFormat }}
            </span>
            <span class="text-black"
              v-if="data.valorUnitarioDesconto"
            >
              {{ data.valorUnitarioDesconto | priceFormat }}
            </span>
          </p>
          <p>
            <i>
              {{ promocao.descricao }}
            </i>
          </p>

          <form class="mt-10">
            <Color :colors="data.cor"/>
            
            <Sizes :tamanhos="tamanhos"/>
            <button
              @click.prevent="insertCart"
              class="mt-10 w-full bg-green-600 border border-transparent rounded-md py-3 px-8 
              flex items-center justify-center text-base font-medium hover:text-white hover:bg-black 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Adicionar ao carrinho
            </button>
          </form>
        </div>

      </div>
    </div>
    <div>
      <Description :descricao="data.descricao"/>
    </div>
  </div>

</template>

<script>
export default {
  layout: "product",

  async asyncData({ $axios, params }) {
    const { slug } = params
    const data = await $axios.$get(`/produto/${slug}`)
    let promocao = '';
    if(data.idPromocao) {
      promocao = await $axios.$get(`/promocao/${data.idPromocao}`)
    }
    const marca = await $axios.$get(`/marca/${data.idMarca}`)
    const tipo_vestimenta = await $axios.$get(`/tipo-vestimenta/${data.idTipoVestimenta}`)
    const tamanhos = await $axios.$get(`/estoque/${data.id}`)
    const gallery = await $axios.$get(`/produto/${data.id}/imagens`)
    return {
      data,
      marca,
      promocao,
      tipo_vestimenta,
      tamanhos,
      gallery,
    }
  },
  data() {
    return {
      insertProduct: false,
    }
  },
  
  computed: {
    selectedProduct() {
      return this.$store.state.cart.selectedProduct
    },
  }, 
  watch: {
    selectedProduct(value) {
      console.log(value)
    }
  },
  methods: {
    insertCart() {
      this.insertProduct = !this.insertProduct
      this.$store.commit('cart/setSelectedProduct', this.data)
      this.$store.commit('modals/setCartModal', this.insertProduct)
    },
  },
  head() {
    return {
      title: this.data.nome,
      meta: [
        {
          hid:'description',
          name: 'description',
          content: this.data.descricao
        }
      ]
    }
  },
  filters: {
    priceFormat(value) {
      return value = value.toLocaleString('pt-br',{ style: 'currency', currency: 'BRL'})
    }
  }
}
</script>


<style>  
  .line {
    text-decoration: line-through;
  }
</style>