export const state = () => ({
  menuNavegation: false,
  cartNavegation: false,
});

export const mutations = {
  setMenuNavegation(state, payload) {
    console.log(payload)
    state.menuNavegation = payload
  },
  setCartNavegation(state, payload) {
    console.log(payload)
    state.cartNavegation = payload
  }
}