<template>
  <section class="container mx-auto flex items-start py-16 sm:py-24">
    <aside class="w-1/4">
      <MenuFilter/>
    </aside>
    <main class="w-3/4">
      <div class="max-w-2xl mx-auto lg:max-w-7xl">
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <CardMain 
            v-for="(product, index) in products" 
            :key="index"
            :product=product
          />
        </div>
      </div>
    </main>
  </section>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Camiseta",
          price: 89.99,
          color: "black",
          img: {
            primary: "/roupa-black.png",
            secondary: "/roupa-black-1.png",
            tertiary: "/roupa-black-2.png"
          }
        },
        {
          name: "Camisa",
          price: 89.99,
          color: "black",
          img: {
            primary: "/roupa-black.png",
            secondary: "/roupa-black-1.png",
            tertiary: "/roupa-black-2.png"
          }
        },
        {
          name: "Regata",
          price: 89.99,
          color: "black",
          img: {
            primary: "/roupa-black.png",
            secondary: "/roupa-black-1.png",
            tertiary: "/roupa-black-2.png"
          }
        },
        {
          name: "Roupa",
          price: 89.99,
          color: "black",
          img: {
            primary: "/roupa-black.png",
            secondary: "/roupa-black-1.png",
            tertiary: "/roupa-black-2.png"
          }
        },
      ]
    }
  }
}
</script>