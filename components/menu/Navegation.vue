<template>
  <div>
    <transition name="slide" appear>
      <section 
        v-if="menuNavegation"
        class="h-full fixed top-0 right-0 z-20"  
      >
        <section 
          class="bg-white"
        >
          <div class="w-screen max-w-md">
            <button @click="closeModal" class="close-button" >
              <UilTimes 
                size="45px" 
                color="black" 
              />
            </button>
            <div class="container mx-auto">
              <nav class="flex flex-col items-center justify-center min-h-screen">
                <ul>
                  <li v-for="link in menu"
                    :key="link.name"
                  >
                    <a class="block text-2xl font-black font-roboto uppercase mb-4"
                      :href="link.path"
                    >
                      {{ link.name }}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </section>
    </transition>
    <transition name="fade" appear>
      <div  
        v-if="menuNavegation"
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
      ]
    }
  },
  computed: {
    menuNavegation() {
      return this.$store.state.modals.menuNavegation
    }  
  },
  methods: {
    closeModal() {
      this.$store.commit('modals/setMenuNavegation', false)
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