import { createStore } from 'vuex'
import axios from 'axios'
import { ref } from 'vue'

export default createStore({
  state: {
    myMovies: [],
    loader: ref(false)
  },
  getters: {
    getMovies (state) {
      return state.myMovies
    }
  },
  mutations: {
    getMoviesToState (state, data) {
      state.myMovies = data.data
    },
    toggleLoader (state) {
      state.loader = !state.loader
    }
  },
  actions: {
    async getMovies ({ commit }) {
      commit('toggleLoader')
      const { data } = await axios.get('http://localhost:9000/api/movies')
      commit('getMoviesToState', data)
      commit('toggleLoader')
    }
  },
  modules: {
  }
})
