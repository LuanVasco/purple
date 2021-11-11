<template>
  <section>
    <header class="container mx-auto py-20 text-center">
      <h2 class="title">
        Novidades
      </h2>
      <p class="subtitle">
        Escolha um produto específico
      </p>
      <nav class="mt-10">
        <button class="border-2 border-black px-6 py-2 mx-2"
          v-for="link in gallery"
          :key="link.name"
        >
          {{ link.name }}
        </button>
      </nav>
    </header>
    <section class="flex">
      <div class="h-120 bg-blue-800 w-1/3">
        <a href="">
          <img src="" alt="">
        </a>
      </div>
      <div class="flex flex-col w-1/3">
        <div class="h-80 bg-pink-700">
          <a href="">

          </a>
        </div>
        <div class="h-80 bg-gray-900">
          <a href="">

          </a>
        </div>
      </div>
      <div class="flex flex-col w-1/3">
        <div class="h-80 bg-yellow-500">
          <a href="">

          </a>
        </div>
        <div class="h-80 bg-green-600">
          <a href="">

          </a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        {
          name: "Camisetas",
          path: "/produto/camiseta-branca"
        },
        {
          name: "Regatas",
          path: "/produto/regata-preta"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>