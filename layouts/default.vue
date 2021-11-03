<template>
  <div>
    <Nuxt />
    <BoxNews />
    <MenuGroupLink />
    <MenuFooter />
    <MenuNavegation />
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
.home {
  background-color: #041231;
}
.homem, .mulher, .crianca {
  background-color: #fff;
}
.bg-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  overflow: hidden;
}
.title {
  font-size: 2rem;
  font-weight: 900;
  font-family: 'Roboto';
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 8px;
}
.subtitle {
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto';
  letter-spacing: 2px;
}
@media (min-width: 768px) {
  .bg-main {
    height: 100vh;
  }
  .title {
    font-size: 4rem;
    letter-spacing: 20px;
  }
  .subtitle {
    font-size: 1.313rem;
    letter-spacing: 8px;
  }
}
</style>