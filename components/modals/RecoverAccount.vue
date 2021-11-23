<template>
   <transition name="login" appear>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="min-h-full flex items-center justify-center w-full py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">

          <div>
            <h2 class="text-center text-3xl font-extrabold text-gray-900">
              Recupe sua conta
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              já
              <span @click="formCadastro"
              class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer "
              >
                lembrei o login
              </span>
            </p>
          
            <form 
              class="mt-8 space-y-6" 
              action="#" 
              method="POST"
            >
              <input type="hidden" name="remember" value="true">
              <div class="rounded-md shadow-sm -space-y-px">
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
                <button type="submit" 
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Recuperar
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
      email: '',
    }
  },
  methods: {
    recoverAccount() {
      this.$store.dispatch('account/recoverAccount', this.email) 
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