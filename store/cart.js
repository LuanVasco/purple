export const state = () => ({
  cartItens: [],
  totalPrice: 0,
  selectedProduct: {},
  carrinho: [],
});

export const mutations = {
  setCartLocalStorage(state, payload) {
    state.carrinho = payload;
  },
  setSelectedProduct(state, payload) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    if(carrinho) {
      state.carrinho = carrinho
    }
    const itemExistente = state.carrinho.filter(item => item.id == payload.id)
    
    if(itemExistente.length) {
      let position = state.carrinho.findIndex(item => item.id === payload.id) 
      console.log(position)
      let qtd = state.carrinho[position].qtd + 1

      state.carrinho[position] = { ...payload, qtd }
    } else {
      state.carrinho = [...state.carrinho, {...payload, qtd: 1}]
    }
    if(process.client) {
      localStorage.setItem("carrinho", JSON.stringify(state.carrinho));
    }
  },
  removeProduct(state, payload) {
    state.carrinho = state.carrinho.filter(item => item.id != payload)
    if(process.client) {
      localStorage.setItem("carrinho", JSON.stringify(state.carrinho));
    }
  }
}


export const getters = {
  getProduct(state, getters) {
    return state.selectedProduct
  }
}
