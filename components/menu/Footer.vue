<template>
  <footer class="bg-black py-20">
    <section class="container mx-auto flex justify-between items-start flex-wrap text-white">
      <div class="w-full md:w-1/5">
        <img 
          src="/icons/logo-purple-7.svg" 
          alt=""
          width="180"
        >
      </div>
      <div class="w-full md:w-1/5">
        <h6 class="title_footer">Ajuda</h6>
        <ul>
          <li>Entregas</li>
          <li>Pedidos</li>
          <li>Trocas e Devoluções</li>
          <li>Pagamentos</li>
          <li>Produtos</li>
          <li>Fale Conosco</li>
        </ul>
      </div>
      <div class="w-full md:w-2/5">
        <h6 class="title_footer">Sobre a marca</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia est modi mollitia commodi aspernatur obcaecati labore tempora assumenda, sint beatae in eius quam officia voluptates perferendis accusamus dolore quo corrupti.
        </p>
      </div>
      <div class="w-full md:w-1/5">
        <h6 class="title_footer">Redes Sociais</h6>
        <ul class="flex items-center">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </section>
  </footer>
</template>
<script>
export default {
  
}
</script>

<style scoped>
.title_footer {
  font-size: 1.313rem;
  font-weight: 900;
  font-family: 'Roboto';
  line-height: 1.875;
}
</style>