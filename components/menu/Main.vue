<template>
  <header class="container mx-auto flex items-center justify-between py-4">
    <div class="w-1/3">
      <img 
        src="/icons/logo-purple-7.svg" 
        alt=""
        width="70px"
      />
    </div>
    <form 
      action="" 
      class="relative w-1/3"
    >
      <input 
        type="text"
        class="border w-full px-6 py-2 rounded-lg bg-transparent"
      />
      <UilSearch 
        size="25px"
        class="search"
        color="white"
      />
    </form>
    <nav class="w-1/3 text-right"> 
      <button @click="openMenu">
        <UilTimes size="45px" class="logo" color="white" v-if="menuOpen" />
        <UilBars size="45px" class="logo" color="white" v-else />
      </button>
      <button>
        <UilShoppingBag size="45px" class="logo" color="white" />
      </button>
    </nav>
  </header>
</template>

<script>
import { UilShoppingBag, UilSearch, UilBars, UilTimes } from '@iconscout/vue-unicons'
export default {
  transition: {
    name: 'menu',
    mode: 'out-in'
  },
  components: {
    UilShoppingBag,
    UilSearch,
    UilBars,
    UilTimes
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="css">
  .search {
    transform: translateY(-50%);
    top: 50%;
    @apply absolute right-3
  }
</style>