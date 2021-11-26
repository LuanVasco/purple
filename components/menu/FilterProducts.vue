<template>
   <section aria-labelledby="products-heading" class="pr-20">
    <h2 id="products-heading" class="sr-only">Products</h2>
    <form class="hidden lg:block">
      <h3 class="sr-only">Categories</h3>

      <ul role="list" class="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
        <li v-for="(categorie, index) in categories"
          :key="index"
        >
          <a :href="categorie.path">
            {{ categorie.name }}
          </a>
        </li>
      </ul>

      <div class="border-b border-gray-200 py-6">
        <h3 class="-my-3 flow-root">      
          <button 
            @click="openColors"
            type="button" 
            class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" 
            aria-controls="filter-section-0" 
            aria-expanded="false"
          >
            <span class="font-medium text-gray-900">
              Cores
            </span>
            <span class="ml-6 flex items-center">
              <svg 
                v-if="filterColors" 
                class="h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" 
                  clip-rule="evenodd" 
                />
              </svg>
              <svg 
                v-else
                class="h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" 
                  clip-rule="evenodd" 
                />
              </svg>
            </span>
          </button>
        </h3>        
        <div 
          class="pt-6" 
          v-if="filterColors"
          id="filter-section-0"
        >
          <div class="space-y-4">
            <div 
              class="flex items-center"
              v-for="(color, index) in colors"
              :key="index"
            >
              <input 
                :id="color.name" 
                name="color[]" 
                :value="color.hexColor"
                @click="setColor(color.name)"
                type="checkbox" 
                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              >
              <label 
                :for="color.name" 
                class="ml-3 text-sm text-gray-600"
              >
                {{ color.name }}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-200 py-6">
        <h3 class="-my-3 flow-root">
          <button  
            @click="openProductTypes" 
            type="button" 
            class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" 
            aria-controls="filter-section-1" 
            aria-expanded="false"
          >
            <span class="font-medium text-gray-900">
              Tipo de Produto
            </span>

            <span class="ml-6 flex items-center">
              <svg 
                v-if="filterProductTypes" 
                class="h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" 
                  clip-rule="evenodd" 
                />
              </svg>
              <svg 
                v-else
                class="h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" 
                  clip-rule="evenodd" 
                />
              </svg>
            </span>
          </button>
        </h3>
         
        <div 
          v-if="filterProductTypes"
          class="pt-6" 
          id="filter-section-1"
        >
          <div class="space-y-4">

            <div 
              class="flex items-center" 
              v-for="(type, index) in getTiposProdutos"
              :key="index"
            >
              <input 
                :id="type.nome" 
                name="category[]" 
                :value="type.id"
                @click="setTipoProduto(type.id)"
                type="checkbox" 
                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              >
              <label 
                :for="type.nome" 
                class="ml-3 text-sm text-gray-600"
              >
                {{ type.nome }}
              </label>
            </div>

          </div>
        </div>
      </div>
      
    </form>
  </section>

</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "Homem",
          path: "/homem"
        },
        {
          name: "Mulher",
          path: "/mulher"
        },
        {
          name: "Criança",
          path: "/crianca"
        }
      ],
      colors: [
        {
          name: "BRANCA",
          hexColor: "#ffffff",
        },
        {
          name: "PRETO",
          hexColor: "#000000",
        },
        {
          name: "AZUL",
          hexColor: "#0201fd",
        },
        {
          name: "VERDE",
          hexColor: "#007000",
        },
        {
          name: "VERMELHO",
          hexColor: "#ff0100",
        },
        {
          name: "AMARELO",
          hexColor: "#ffd700",
        },
        {
          name: "ROXO",
          hexColor: "#993399",
        },
      ],      

      filterColors: false,
      filterProductTypes: false,

    }
  },
  computed: {
    getTiposProdutos() {
      return this.$store.state.filter.tiposDeProdutos
    }
  },
  methods: {
    openColors() {
      this.filterColors = !this.filterColors
    },
    openProductTypes() {
      this.filterProductTypes = !this.filterProductTypes    
    },
    openSizes() {
      this.filterSizes = !this.filterSizes
    },
    setColor(value) {
      this.$store.commit('filter/setColor', value)
    },
    setTipoProduto(value) {
      this.$store.commit('filter/setTipoProduto', value)
    }
  }
}
</script>