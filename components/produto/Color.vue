<template>
  <div>
    <h3 class="text-sm text-gray-900 font-medium">Color</h3>

    <fieldset class="mt-4">
      <legend class="sr-only">
        Choose a color
      </legend>
      <div class="flex items-center space-x-3">
        <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
          <input 
            type="radio" 
            name="color-choice" 
            :value="colors" 
            class="sr-only" 
            aria-labelledby="color-choice-2-label"
          >
          <p id="color-choice-2-label" 
            class="sr-only"
          >
            {{ colors }}
          </p>
          <span aria-hidden="true" 
            :class="colors"
            class="border-black border h-8 w-8 border-opacity-10 rounded-full"
          ></span>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
  export default {
    props: {
      colors: {
        type: String,
        default: "",
      }
    }
  }
</script>

<style scoped>
.branca {
  background-color: #ffffff;
}
.preta {
  background-color: #000000;
}
.azul {
  background-color: #0000ff;
}
.vermelho {
  background-color: #ff0000;
}
.verde {
  background-color: #00ff00;
}
</style>