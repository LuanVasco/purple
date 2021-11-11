<template>
  <section class="container mx-auto my-20">
    <div class="flex items-start">
      <div class="w-3/5 mr-20">
        <header>
          <h3 class="title">Seu carrinho</h3>
          <p>Total ({{ qtdProdutos }} produto) R$399,99</p>
        </header>
        <section>
          <div class="border border-black flex">
            <img src="" alt="" class="mr-4">
            <div class="py-4">
              <h5>Produto Teste</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Ducimus optio temporibus odit, hic aperiam vel neque omnis 
              sapiente repellat, velit numquam voluptatum adipisci iure sint 
              molestiae dignissimos quia pariatur! Explicabo?</p>
            </div>
          </div>
          <button class="bg-black px-8 py-4 text-white mt-4 w-2/5">Finalizar</button>
          <ul>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </section>
      </div>
      <div class="w-2/5">
        <button class="bg-black px-8 py-4 text-white mb-8 w-full">
          Finalizar
        </button>
        <section class="order">
          <h5 class="font-bold text-2xl mb-8">Resumo do pedido</h5>
          <div class="flex justify-between">
            <p>1 Produto</p>
            <p>R$399,99</p>
          </div>
          <div class="flex justify-between">
            <p>Entrega</p>
            <p>Livre</p>
          </div>
          <div class="flex justify-between">
            <p>Total:</p>
            <p>R$399,99</p>
          </div>
        </section>
        <div class="border my-10">
          <label for="cupom">Digite Cupom Promocional</label>
          <input type="text" id="cupom" name="cupom">
        </div>
        <section>
          <h5 class="font-bold text-2xl mb-8">Ajuda</h5>
          <ul>
            <li>
              <a href="">Como usar o cupom de desconto</a>
            </li>
            <li>
              <a href="">Entregas e Frete</a>
            </li>
            <li>
              <a href="">Trocas e Devolucoes</a>
            </li>
          </ul>
          <h5>Pague com:</h5>
          <div>
            <h6>Cartão De Crédito</h6>
            <ul>
              <li>
                <img src="" alt="">
              </li> 
            </ul>
          </div>
          <div>
            <h6>Boleto Bancário</h6>
            <img src="" alt="">
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'cart',
  data() {
    return {
      qtdProdutos: 0,
    }
  }
}
</script>