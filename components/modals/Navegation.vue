<template>
  <nav class="flex flex-col items-center justify-center min-h-screen">
    <ul>
      <li v-for="link in links"
        :key="link.name"
        @click="closeModal" 
      >
        <a :href="link.path"
          class="block text-2xl font-black font-roboto uppercase mb-4"
        >
          {{ link.name }}
        </a>
      </li>
      <li>
        <button @click="openLogin"
          class="block text-2xl font-black font-roboto uppercase mb-4 border-none bg-none"
        >
          Login
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Mulher",
          path: "/mulher"
        },
        {
          name: "Homem",
          path: "/homem"
        },
        {
          name: "Criança",
          path: "/crianca"
        },
      ],
      login: false,
    }
  },
  computed: {
    menu() {
      return this.$store.state.modals.navegation
    }  
  },
  methods: {
    openLogin() {
      this.login = !this.login
      this.$store.commit('modals/setLoginModal', this.login)
    },
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