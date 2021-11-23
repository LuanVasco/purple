<template>
  <transition name="login" appear>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="min-h-full flex items-center justify-center w-full py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h2 class="text-center text-3xl font-extrabold text-gray-900">
              Entre na sua conta
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Ou
              <span @click="createAccount"
              class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                crie clicando aqui
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
                <div>
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
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input 
                    id="remember-me" 
                    name="remember-me" 
                    type="checkbox" 
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label 
                    for="remember-me" 
                    class="ml-2 block text-sm text-gray-900"
                  >
                    Lembre de mim
                  </label>
                </div>

                <div class="text-sm">
                  <span @click="recoverAccount"
                    class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Esqueceu a senha?
                  </span>
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
                  Entrar
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
  methods: {
    createAccount() {
      this.$store.commit('account/setToggleAccount', 'dontHaveAccount')
    },
    recoverAccount() {
      this.$store.commit('account/setToggleAccount', 'recoverAccount')
    }
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .6s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .loginTop-enter-active,
  .loginTop-leave-active {
    transform: translateY(0);
    transition: transform .2s;
  }

  .loginTop-enter,
  .loginTop-leave-to {
    transform: translateY(-100%);
  }
  
  .login-enter-active,
  .login-leave-active {
    transform: translateY(0);
    transition: transform .2s;
  }

  .login-enter,
  .login-leave-to {
    transform: translateY(100%);
  }

  .close-button {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 30;
    cursor: pointer;
  }
</style>