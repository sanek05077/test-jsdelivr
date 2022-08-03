import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      packages: {},
      query: '',
      isShowModal: false,
      isEmpty: false,
      pagesLength: 0,
      pagination: 1,
      currentPackage: {}
    }
  },
  getters: {
    packages: state => {
      return state.packages
    },
    search: state => {
      return state.query
    },
    pagesLength: state => {
      return state.pagesLength
    },
    pagination: state => {
      return state.pagination
    }
  },
  mutations: {
    setPackages: (state, payload) => {
      state.packages = payload.objects
      state.pagesLength = Math.round(payload.total / 10)
    },
    setSearch (state, payload) {
      state.query = payload
    },
    setPagination (state, payload) {
      state.pagination = payload
    },
    triggerModal (state, payload) {
      state.isShowModal = payload
    },
    updateCurrentPackage (state, payload = {}) {
      state.currentPackage = payload
    }
  },
  actions: {
    async getPackages ({ commit }) {
      this.state.isEmpty = this.state.query.length === 0
      try {
        const endpoint = 'https://registry.npmjs.org/-/v1/search'
        const size = 10
        const from = this.state.pagination === 0 ? 0 : (this.state.pagination - 1) * size
        const response = await axios.get(endpoint, {
          params: {
            text: this.state.query,
            from,
            size
          }
        })

        commit('setPackages', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
