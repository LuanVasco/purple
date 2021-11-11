<template>
  <div>
    <header class="bg-main bg-black py-10">
      <MenuMain />
    </header>
    <Nuxt />
    <MenuFooter />
    <MenuNavegation />
    <MenuCart />
  </div>
</template>
<script>
export default {
  
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