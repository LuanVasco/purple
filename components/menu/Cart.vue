<template>
  <div>
    <transition name="slide" appear>
      <section 
        v-if="cartNavegation"
        class="w-2/3 h-full fixed top-0 right-0 z-20 md:w-2/5"  
      >
        <section 
          class="bg-white w-full"
        >
          <div aria-labelledby="slide-over-title" 
            role="dialog" 
            aria-modal="true"
          >
              <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                <div class="w-screen max-w-md">
                  <div class="h-full flex flex-col bg-white shadow-xl">
                    <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <h2 class="text-lg font-medium text-gray-900" 
                          id="slide-over-title"
                        >
                          Seu carrinho
                        </h2>
                        <div class="ml-3 h-7 flex items-center">
                          <button @click="closeModal" 
                            class="close-button" 
                          >
                            <UilTimes 
                              size="45px" 
                              color="black" 
                            />
                          </button>
                        </div>
                      </div>

                      <div class="mt-8">
                        <div class="flow-root">
                          <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li class="py-6 flex">
                              <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" 
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." 
                                  class="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div class="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                    <p class="ml-4">R$ 90.00</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">Salmon</p>
                                </div>
                                <div class="flex-1 flex items-end justify-between text-sm">
                                  <p class="text-gray-500">Qtd 1</p>
                                  <div class="flex">
                                    <button 
                                      type="button" 
                                      class="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li class="py-6 flex">
                              <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" 
                                  alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." 
                                  class="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div class="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Medium Stuff Satchel</a>
                                    </h3>
                                    <p class="ml-4">R$ 32.00</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">Blue</p>
                                </div>
                                <div class="flex-1 flex items-end justify-between text-sm">
                                  <p class="text-gray-500">Qtd 1</p>

                                  <div class="flex">
                                    <button 
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
                    </div>

                    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>R$ 262.00</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">Entrega e taxas calculadas no checkout.</p>
                      <div class="mt-6">
                        <a href="/cart" 
                          class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Ir para o checkout
                        </a>
                      </div>
                      <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          ou 
                          <button @click="closeModal" 
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
                </div>
            </div>
          </div>

        </section>
      </section>
    </transition>
    <transition name="fade" appear>
      <div  
        v-if="cartNavegation"
        @click="closeModal"
        class="w-full h-full fixed top-0 left-0 bg-black opacity-75 blur z-10"
      ></div>
    </transition>
  </div>
</template>
<script>
import { UilTimes } from '@iconscout/vue-unicons'
export default {
  components: {
    UilTimes,
  },
  data() {
    return {
      menu: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Homem",
          path: "/homem"
        },
        {
          name: "Mulher",
          path: "/mulher"
        },
        {
          name: "Criança",
          path: "/crianca"
        },
      ]
    }
  },
  computed: {
    cartNavegation() {
      return this.$store.state.modals.cartNavegation
    }  
  },
  methods: {
    closeModal() {
      this.$store.commit('modals/setCartNavegation', false)
    }
  }
}
</script>

<style>
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