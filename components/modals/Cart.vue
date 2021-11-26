<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-1 py-6 px-4 sm:px-6"
      :class="cartItens.length > 0 ? 'overflow-y-auto' : 'overflow-hidden'"
    >
      <div class="mt-8" v-if="cartItens.length > 0">
        <div class="flow-root">
          <ul role="list" class="-my-6 divide-y divide-gray-200">
            <li class="py-6 flex"
              v-for="item in cartItens"
              :key="item.id"
            >
              <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img :src="'data:image/jpeg;base64,'+item.image.arquivo" 
                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." 
                  class="w-full h-full object-center object-cover"
                />
              </div>

              <div class="ml-4 flex-1 flex flex-col">
                <div>
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">
                        {{ item.nome }}
                      </a>
                    </h3>
                    <p class="ml-4">
                      R$ {{ item.valorUnitario * item.qtd}}
                    </p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ item.color }}
                  </p>
                </div>
                <div class="flex-1 flex items-end justify-between text-sm">
                  <p class="text-gray-500">Qtd {{ item.qtd }}</p>
                  <div class="flex">
                    <button 
                      @click="removeProduct(item.id)"
                      type="button" 
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <!-- More products... -->
          </ul>
        </div>
      </div>
      <div class="flex flex-1 justify-center items-center h-full" v-else>
        <div class="p-20 border-2 border-dashed border-gray-200">
          <p class="text-center font-bold">
            Carrinho Vazio
          </p>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div class="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>R$ {{ totalPrice ? totalPrice : '00.00'}}</p>
      </div>
      <p class="mt-0.5 text-sm text-gray-500">
        Entrega e taxas calculadas no checkout.
      </p>
      <div class="mt-6" @click="closeModal">
        <NuxtLink to="/cart"
          :class="{ totalPrice: 'disabled' }"
          class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800"
        >
          Ir para o checkout
        </NuxtLink>
      </div>
      <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
        <p>
          ou
          <button
            @click="closeModal"
            type="button"
            class="text-indigo-600 font-medium hover:text-indigo-500"
          >
            Continuar comprando
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.state.cart.carrinho.reduce((memo, item) => {
        return (item.qtd * item.valorUnitario) + memo 
      }, 0)
    },
    cartNavegation() {
      return this.$store.state.modals.cartNavegation
    },
    cartItens() {
      return this.$store.state.cart.carrinho
    }
  },
  watch: {
    totalPrice(value) {},
    cartItens(value) {
      let totalPrice
      value.map(item => {
        totalPrice += item.price
      })
      this.$store.commit('cart/setTotalPrice', totalPrice)
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('modals/setCartNavegation', false)
    },
    removeProduct(value) {
      this.$store.commit('cart/removeProduct', value)
    }
  }
}
</script>

<style>
  .disabled {
    background-color: rgba(0, 0, 0, 0.75);
    pointer-events: none;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transform: translateX(0);
    transition: transform .3s;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
  }

  .close-button {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 30;
    cursor: pointer;
  }
</style>