<template>
  <transition name="login" appear>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="min-h-full flex items-center justify-center w-full py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          
          <div>
            <h2 class="text-center text-3xl font-extrabold text-gray-900">
              Crie sua conta
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              já
              <span @click="formCadastro"
              class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                tenho uma conta
              </span>
            </p>
          
            <form 
              class="mt-8 space-y-6" 
              action="#" 
              method="POST"
            >
              <input type="hidden" name="remember" value="true">
              <div class="rounded-md shadow-sm -space-y-px">

                <div class="pb-4">
                  <label for="name" class="sr-only">Nome</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="name" 
                    required 
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Name"
                  />
                </div>
                
                <div class="pb-4">
                  <label for="email-address" class="sr-only">E-mail</label>
                  <input 
                    id="email-address" 
                    name="email" 
                    type="email" 
                    autocomplete="email" 
                    required 
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="E-mail"
                  />
                </div>

                <div class="pb-4">
                  <label for="password" class="sr-only">Senha</label>
                  <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    autocomplete="current-password" 
                    required 
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Senha"
                  />
                </div>
                <div>
                  <label for="confirm_password" class="sr-only">Confirmar Senha</label>
                  <input 
                    id="confirm_password" 
                    name="confirm_password" 
                    type="confirm_password" 
                    autocomplete="current-password" 
                    required 
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Confirmar senha"
                  />
                </div>
              </div>

            

              <div>
                <button type="submit" 
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <!-- Heroicon name: solid/lock-closed -->
                    <svg 
                      class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      aria-hidden="true"
                    >
                      <path 
                        fill-rule="evenodd" 
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" 
                        clip-rule="evenodd" 
                      />
                    </svg>
                  </span>
                  Criar
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      account: {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      }
    }
  },
  methods: {
    createAccount() {
      this.$store.dispatch('account/createAccount', this.account) 
    },
    formCadastro() {
      this.$store.commit('account/setToggleAccount', 'haveAccount')
    }
  }
}
</script>
<style>
  .login-enter-active,
  .login-leave-active {
    transform: translateX(0);
    transition: transform .4s;
  }

  .login-enter,
  .login-leave-to {
    transform: translateX(100%);
  }

</style>