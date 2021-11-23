<template>
  <Modal v-if="modals.open">
    <Login v-if="modals.login && toggleAccount == 'haveAccount'"/>
    <CreateAccount v-if="modals.login && toggleAccount == 'dontHaveAccount'"/>
    <RecoverAccount v-if="modals.login && toggleAccount == 'recoverAccount'"/>
    <Cart v-if="modals.cart"/>
    <Navegation v-if="modals.navegation"/>
  </Modal>
</template>

<script>
export default {
  computed: {
    modals() {
      return this.$store.state.modals
    },
    toggleAccount() {
      return this.$store.state.account.toggleAccount
    }
  },
  watch: {
    toggleAccount(value) {
      console.log(value)
    }
  },
}
</script>