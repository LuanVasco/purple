export const state = () => ({
  cartItens: [],
  totalPrice: 0,
  selectedProduct: {},
});

export const mutations = {
  setSelectedProduct(state, payload) {
    state.selectedProduct = payload
    if(process.client) {
      sessionStorage.setItem("selectedProduct", JSON.stringify(payload));
    }
  },
  setTotalPrice(state, payload) {
    console.log(payload)
    state.totalPrice = payload
  },
  setCartItens(state, payload) {
    let item
    let qtd = 1
    if(state.cartItens.length > 0) {
      item = state.cartItens.pop() 
      if(item.id == payload.id) {
        item.qtd ? item.qtd += 1 : payload.qtd = qtd += 1
        state.cartItens.push(payload)
      } 
    } else {
      payload.qtd = qtd
      state.cartItens.push(payload)
    }
  },
}

export const actions = {
  setCartItens({ commit }, payload) {
    let totalPrice
    commit('setCartItens', payload)
    if(state.cartItens) {
      state.cartItens.map(item => {
        item.map(item => {
          totalPrice = totalPrice + item.price
          console.log(item)
        })
      })
      console.log(totalPrice)
      state.totalPrice = totalPrice
    }
   
  }
}

export const getters = {
  getProduct(state, getters) {
    return state.selectedProduct
  }
}
