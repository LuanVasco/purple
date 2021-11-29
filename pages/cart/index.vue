<template>
  <section class="container mx-auto my-20">
    <div class="flex items-start">
      <div class="w-3/5 mr-20">
        <header>
          <h3 class="title">
            Seu carrinho
            <span v-if="!cartItens.length">Vazio</span>
          </h3>
          <p>Total ({{ totalPrice | priceFormat }}) / {{ cartItens.length }} itens </p>
        </header>
        <section>
          <div class="border border-black flex mb-4"
            v-for="item in cartItens"
            :key="item.id"
          >
            <img :src="'data:image/jpeg;base64,'+item.image.arquivo"
              :alt="item.nome" 
              class="mr-4"
              width="250"
              height="250"
              style="object-fit: cover;"
            />
            <div class="py-4">
              <h5 class="font-bold text-xl">
                {{ item.nome }}
              </h5>
              <p>
                {{ item.descricao }}
              </p>
            </div>
          </div>
          <button class="bg-black px-8 py-4 text-white mt-4 w-2/5"
            :class="!cartItens.length ? 'pointer-events-none bg-gray-500' : ''"
          >Finalizar</button>
          <ul>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </section>
      </div>
      <div class="w-2/5">
        <button class="bg-black px-8 py-4 text-white mb-8 w-full"
          :class="!cartItens.length ? 'pointer-events-none bg-gray-500' : ''"
        >
          Finalizar
        </button>
        <section class="order">
          <h5 class="font-bold text-2xl mb-8">Resumo do pedido</h5>
          <div class="flex justify-between" v-for="item in cartItens" :key="item.id">
            <p>{{ item.nome }}</p>
            <p>{{ item.valorUnitario | priceFormat }}</p>
          </div>
          <div class="flex justify-between">
            <p>Entrega</p>
            <p>Livre</p>
          </div>
          <div class="flex justify-between">
            <p>Total:</p>
            <p>{{ totalPrice | priceFormat }}</p>
          </div>
        </section>
        <section class="mt-4">
          <h5 class="font-bold text-2xl mb-8">Ajuda</h5>
          <ul>
            <li>
              <a href="">Entregas e Frete</a>
            </li>
            <li>
              <a href="">Trocas e Devolucoes</a>
            </li>
          </ul>
          <h5>Pague com:</h5>
          <div>
            <h6>Cartão De Crédito</h6>
            <ul>
              <li>
                <img src="" alt="">
              </li> 
            </ul>
          </div>
          <div>
            <h6>Boleto Bancário</h6>
            <img src="" alt="">
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import filters from '@/mixins/filters';
export default {
  layout: 'cart',
  head() {
    return {
      title: 'Purple | Carrinho',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Finalize sua compra'
        }
      ]
    }
  },
  mixins: [filters],
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
    removeProduct(value) {
      this.$store.commit('cart/removeProduct', value)
    }
  }
}
</script>