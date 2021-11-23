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
        <p class="description mb-6">Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type. </p>
        
        <p class="description">Letraset sheets containing Lorem Ipsum passages, and 
        more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.</p>
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