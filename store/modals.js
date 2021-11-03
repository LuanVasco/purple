export const state = () => ({
  menuNavegation: false
});

export const mutations = {
  setMenuNavegation(state, payload) {
    console.log(payload)
    state.menuNavegation = payload
  }
}