<template>
  <div class="group relative"
    @click="insertCart(product)"
  >
    <div class="w-full min-h-80 bg-gray-100 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
      <img v-if="product.image"
        :src="'data:image/jpeg;base64,'+product.image.arquivo"
        :alt="product.nome"
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
      <img v-else
        src="/prod-vazio.jpg"
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a :href="`/${product.id}`">
            <span 
              aria-hidden="true" 
              class="absolute inset-0"
            ></span>
            {{ product.nome }}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          {{ product.cor }}
        </p>
      </div>
      <p class="text-sm font-medium text-gray-900">
        R${{ product.valorUnitario }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: '',
    }
  },
  computed: {
    selectedProduct() {
      return this.$store.state.cart.selectedProduct
    }
  },
  methods: {
    insertCart(value) {
      this.$store.commit('cart/setSelectedProduct', value)
    }
  }
}
</script>