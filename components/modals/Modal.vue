<template>
  <div>
    <transition name="slide" appear>
      <section
        class="h-full fixed top-0 right-0 z-20"  
      >
        <section 
          class="bg-white"
        >
          <div class="w-screen max-w-md relative">
              <div class="flex items-start justify-between">
                <button v-if="modals.login"
                  @click="closeLogin" 
                  class="close-button-left"
                >
                  <UilArrowLeft
                    size="45px" 
                    color="black" 
                  />
                </button>
                <button @click="closeModal" class="close-button" >
                  <UilTimes 
                    size="45px" 
                    color="black" 
                  />
                </button>
              </div>
            <div class="container mx-auto">
              <slot></slot>
            </div>
          </div>
        </section>
      </section>
    </transition>
    <transition name="fade" appear>
      <div  
        @click="closeModal"
        class="w-full h-full fixed top-0 left-0 bg-black opacity-75 blur z-10"
      ></div>
    </transition>
  </div>
</template>
<script>
import { UilTimes, UilArrowLeft } from '@iconscout/vue-unicons'
export default {
  components: {
    UilTimes,
    UilArrowLeft
  },
  data() {
    return {
      modalsGroup: ['Open','Cart', 'Navegation', 'Login'],
    }
  },
  computed: {
    modals() {
      return this.$store.state.modals
    },
  },
  methods: {
    closeModal() {
      this.modalsGroup.map(item => {
        this.$store.commit(`modals/set${item}Modal`, false)
      })
    },
    closeLogin() {
      this.$store.commit('modals/setLoginModal', false)
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
  .close-button-left {
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 30;
    cursor: pointer;
  }
  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 30;
    cursor: pointer;
  }
</style>