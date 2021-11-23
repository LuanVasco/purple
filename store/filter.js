export const state = () => ({
  cores: [],
  tipo_produto: '',
  tamanho: '',
})

export const mutations = {
  setColor(state, payload) {
    if(state.cores.length == 0) {
      state.cores.push(payload)
    } else {
      state.cores.forEach((item, index) => {        
        item == payload ? state.cores.splice(index, 1) : state.cores.push(payload)
      });
    }
  },
  setTipoProduto(state, payload) {
    state.tipo_produto = payload
  },
  setTamanho(state, payload) {
    state.tamanho = payload
  }
}