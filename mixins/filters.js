export default {
  filters: {
    priceFormat(value) {
      return value = value.toLocaleString('pt-br',{ style: 'currency', currency: 'BRL'})
    }
  }
}