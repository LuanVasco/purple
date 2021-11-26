export const state = () => ({
  tiposProdutos: {}
})

export const mutations = {
  setTiposProdutos(state, payload) {
    state.tiposProdutos = payload
  },
}

export const actions = {
  async setProdutosByColor({ commit }, payload) {
    await this.$axios(`/produto/listar/?cores=${payload}`).then(res => { 
      commit('setTiposProdutos',res.data.content) 
    })
  },
  async setProdutosByVestimenta({ commit }, payload) {
    await this.$axios(`/produto/listar/?idsTipoVestimenta=${payload}`).then(res => { 
      commit('setTiposProdutos',res.data.content) 
    })
  },
}