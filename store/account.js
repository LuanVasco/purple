export const state = () => ({
  toggleAccount: 'haveAccount',
})

export const mutations = {
  setToggleAccount(state, payload) {
    state.toggleAccount = payload
  }
}