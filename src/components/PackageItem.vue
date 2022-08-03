<template>
  <tr @click="showModal">
    <td>{{ item.name }}</td>
    <td>{{ item.version }}</td>
    <td>{{ item.description }}</td>
  </tr>
</template>

<script>
export default {
  name: 'packageItem',
  props: {
    item: Object
  },
  methods: {
    showModal () {
      this.$store.commit('triggerModal', true)
      this.$store.commit('updateCurrentPackage', this.item)
    }
  }
}
</script>

<style scoped>

</style>
