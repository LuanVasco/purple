<template>
  <div class="mt-10">
    <div class="flex items-center justify-between">
      <h3 class="text-sm text-gray-900 font-medium">
        Selecionar Tamanho
      </h3>
      <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
        Tamanho guia
      </a>
    </div>

    <fieldset class="mt-4">
      <legend class="sr-only">
        Choose a size
      </legend>
      <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

        <label v-for="medida in medidas"
          :key="medida.tamanho"
          class="group relative border rounded-md py-3 px-4 flex items-center 
          justify-center text-sm font-medium uppercase focus:outline-none
          sm:flex-1 sm:py-2 shadow-sm text-gray-900 cursor-pointer hover:text-white hover:bg-black"
          :class="!medida.active ? 'pointer-events-none	' : ''"
        >
          <input 
            type="radio" 
            name="size-choice" 
            :value="medida.tamanho" 
            disabled 
            class="sr-only" 
            aria-labelledby="size-choice-0-label"
            v-model=size
          />
          <p id="size-choice-0-label">
            {{ medida.tamanho }}
          </p>

          <div 
            aria-hidden="true" 
            class="absolute -inset-px rounded-md border-2 border-gray-600 pointer-events-none"
          >
            <svg v-if="!medida.active"
              class="absolute inset-0 w-full h-full text-gray-600 stroke-1" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none" 
              stroke="currentColor"
            >
              <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
            </svg>
          </div>
        </label>

      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    tamanhos: {
      type: Array,
    }
  },
  created() {
    this.tamanhos.map((item) => {
      this.medidas.map((medida, index) => {
        if(medida.tamanho == item.tamanho) {
          this.medidas[index] = { ...medida, active: true }
        }
      })
    })
  },
  data() {
    return {
      size: '',
      medidas: [
        {
          tamanho: 'PP',
        },
        {
          tamanho:'P',
        },
        {
          tamanho: 'M',
        },
        {
          tamanho: 'G',
        },
        {
          tamanho: 'GG',          
        },
        {
          tamanho: 'XL',
        }
      ]
    }
  }
}
</script>