<template>
  <header class="container mx-auto flex items-center justify-between p-4 md:px-0">
    <div class="w-1/3">
      <NuxtLink to="/">
        <img 
          src="/icons/logo-purple-7.svg" 
          alt=""
          width="70px"
        />
      </NuxtLink>
    </div>
    <!-- <form 
      action="" 
      class="hidden relative w-1/3 md:block"
    >
      <input 
        type="text"
        class="border w-full px-6 py-2 rounded-lg bg-transparent outline-none text-white placeholder-white::placeholder"
        placeholder="Buscar..."
        v-model="busca"
      />
      <button class="search" @click.prevent="buscarProdutos">
        <UilSearch 
          size="25px"
          color="white"
        />
      </button>
    </form> -->
    <nav class="w-1/3 text-right"> 
      <button @click="openMenu">
        <UilTimes 
          size="45px" 
          class="logo" 
          color="white" 
          v-if="menuNavegation" 
        />
        <UilBars 
          size="45px" 
          class="logo" 
          color="white" 
          v-else 
        />
      </button>
      <button @click="openCart">
        <UilShoppingBag 
          size="45px" 
          class="logo" 
          color="white" 
        />
      </button>
    </nav>
  </header>
</template>

<script>
import { UilShoppingBag, UilSearch, UilBars, UilTimes, UilFacebook } from '@iconscout/vue-unicons'
export default {
  transition: {
    name: 'menu',
    mode: 'out-in'
  },
  components: {
    UilShoppingBag,
    UilSearch,
    UilBars,
    UilTimes,
    UilFacebook
  },
  data() {
    return {
      menuOpen: false,
      menuCart: false,
      busca: ""
    }
  },
  computed: {
    menuNavegation() {
      return this.$store.state.modals.menuNavegation
    }  
  },
  methods: {
    openMenu() {      
      this.menuOpen = !this.menuOpen
      this.$store.commit('modals/setNavegationModal', this.menuOpen)
    },
    openCart() {
      this.menuCart = !this.menuCart
      this.$store.commit('modals/setCartModal', this.menuCart)
    },
    buscarProdutos() {
      this.$router.push({ path: "/search",query: { q: this.busca } })
    }
  }
}
</script>

<style>
  .search {
    transform: translateY(-50%);
    top: 50%;
    @apply absolute right-3;
  }
</style>