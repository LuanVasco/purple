export const state = () => ({
  cores: [],
  tipo_produto: [],
  tamanho: '',
  tiposDeProdutos: []
})

export const mutations = {
  setTiposDeProdutos(state, payload) {
    state.tiposDeProdutos = payload
  },
  setColor(state, payload) {
    const valorLista = state.cores.filter(item => item == payload)
    if(!valorLista.length) {
      state.cores = [...state.cores, payload]
    } else {
      const removerCor = state.cores.filter(item => item != payload )
      state.cores = removerCor
    }
  },
  setTipoProduto(state, payload) {
    const valorLista = state.tipo_produto.filter(item => item == payload)
    if(!valorLista.length) {
      state.tipo_produto = [...state.tipo_produto, payload]
    } else {
      const removerTipoProduto = state.tipo_produto.filter(item => item != payload )
      state.tipo_produto = removerTipoProduto
    }
  },
  setTamanho(state, payload) {
    state.tamanho = payload
  }
}
