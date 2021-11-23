export const state = () => ({
  toggleAccount: 'haveAccount',
})

export const mutations = {
  setToggleAccount(state, payload) {
    console.log(payload)
    state.toggleAccount = payload
  }
}