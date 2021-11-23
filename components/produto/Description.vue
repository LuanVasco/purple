<template>
  <div>
    <div class="py-10 lg:pt-4 lg:pb-4 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
      <!-- Description and details -->
      <div>
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Descrição
        </h2>
        <div class="space-y-6">
          <p class="text-base text-gray-900">
            {{ descricao }}
          </p>
        </div>
      </div>

    </div>
   
  </div>
</template>

<script>
export default {
  props: {
    descricao: {
      type: String,
      default: '',
    }
  }
}
</script>