export const state = () => ({
  open: false,
  navegation: false,
  cart: false,
  login: false,

});

export const mutations = {
  setOpenModal(state, payload) {
    state.open = payload
  },
  setNavegationModal(state, payload) {
    state.navegation = payload
    state.open = payload
  },
  setCartModal(state, payload) {
    state.cart = payload
    state.open = payload
  },
  setLoginModal(state, payload) {
    state.login = payload
  }
}