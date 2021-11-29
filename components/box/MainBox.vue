<template>
  <section class="container mx-auto py-20">
    <section class="flex items-center justify-between">
      <div class="w-1/2 relative">
        <img 
          src="/nature.jpg" 
          alt=""
          width="500"
          height="500"
          class="roundend-lg"
        />
        <img 
          src="/summer-woman.jpg" 
          alt=""
          width="550"
          class="img-sob"
        />
      </div>
      <div class="w-1/2 text-white">
        <h2 class="title mb-8">Summer</h2>
        <p class="description mb-6">Com o verão prestes a chegar nos países do hemisfério sul, as lojas começam a preparar o que vai fazer sucesso na estação.  Neste texto vamos falar quais as tendências de moda para o verão.</p>
        <p class="description">Muitas tendências que já estamos vendo serão reforçadas ou transformada quando as temperaturas começarem a subir.</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.img-sob {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>