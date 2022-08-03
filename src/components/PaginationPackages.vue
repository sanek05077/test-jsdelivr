<template>
  <div class="pagination-container" v-if="pagesLength > 1">
    <v-pagination
      v-model="pagination"
      :length="pagesLength"
      :total-visible="5"
    ></v-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PaginationList',
  computed: {
    ...mapGetters([
      'pagesLength'
    ]),
    pagination: {
      get: function () {
        return this.$store.getters.pagination
      },
      set: function (value) {
        this.$store.commit('setPagination', value)
      }
    }
  },
  watch: {
    pagination: {
      handler () {
        this.$store.dispatch('getPackages')
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
