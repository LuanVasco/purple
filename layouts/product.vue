<template>
  <div>
    <header class="bg-main bg-black py-10">
      <MainMenu />
    </header>
    <Nuxt />
    <Footer />
    <Modals />
  </div>
</template>
<script>
export default {
  mounted() {
    if(!process.client) return;
    const savedData = JSON.parse(localStorage.getItem("carrinho"));  
    if(savedData) {     
      this.$store.commit('cart/setCartLocalStorage',savedData) 
    } 
  }
}
</script>

<style>
.bg-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: initial;
}
@media (min-width: 768px) {
  .bg-main {
    height: initial;
  }
}
</style>