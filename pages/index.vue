<template>
  <div class="home">
    <header class="bg-main">
      <MenuMain />
      <BannerMain />
    </header>
    <BoxMain />
    <BoxCategories />
    <BoxNews/>
    <MenuGroupLink />
    <MenuFooter />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home {
  background-color: #041231;
}
.bg-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: radial-gradient(50% 50% at 49.76% 50%, #8CBEF9 0%, #1686EA 48.44%, #4B13CC 100%);
  overflow: hidden;
}
</style>