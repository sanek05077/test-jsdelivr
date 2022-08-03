<template>
  <v-form
    class="pt-5 ptmd-10"
  >
    <v-container>
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          md="4"
        >
          <h1 class="text-center mb-5">Enter your request</h1>
          <v-text-field
            label="Search"
            prepend-inner-icon="mdi-magnify"
            id="search"
            v-model="search"
            :rules="rules"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
import { debounce } from 'lodash'

export default {
  name: 'SearchForm',
  data () {
    return {
      rules: [
        value => !!value || 'Please enter your request'
      ]
    }
  },
  created () {
    this.debounceWatch = debounce(() => {
      this.$store.dispatch('getPackages')
    }, 300)
  },
  beforeDestroy () {
    this.debounceWatch.cancel()
  },
  computed: {
    search: {
      get: function () {
        return this.$store.getters.search
      },
      set: function (value) {
        this.$store.commit('setSearch', value)
      }
    }
  },
  watch: {
    search: {
      handler () {
        this.debounceWatch()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(['getPackages'])
  }
}
</script>

<style scoped>

</style>
