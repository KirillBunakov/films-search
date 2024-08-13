<template>
  <div>
    <!-- <h1>{{ movies }}</h1> -->
    <!-- <button @click="$store.dispatch('getMovies')">btn</button> -->
    <app-filter-movies
    @filterByName="filterByName"
    @filterByYear="filterByYear"
    ></app-filter-movies>

    <loader v-if="loader"></loader>
    <app-poster
    v-if="movies"
    :movies="movies"
    ></app-poster>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
// import axios from 'axios'
import AppPoster from '@/components/AppPoster.vue'
import Loader from '@/components/AppLoader.vue'
import AppFilterMovies from '@/components/AppFilterMovies.vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const movies = computed(() => store.state.myMovies)
    const loader = computed(() => store.state.loader)
    // const movies = ref([])
    // const loader = ref(false)
    // async function loadMovies () {
    //   try {
    //     loader.value = true
    //     const { data } = await axios.get('http://localhost:9000/api/movies')
    //     movies.value = Object.keys(data.data).map(key => {
    //       return {
    //         id: key,
    //         // poster: data.data[key].poster,
    //         frames: data.data[key].frames,
    //         title: data.data[key].title,
    //         genres: data.data[key].genres,
    //         year: data.data[key].year,
    //         collapse: data.data[key].collapse.duration,
    //         actors: data.data[key].actors,
    //         directors: data.data[key].directors,
    //         description: data.data[key].description
    //       }
    //     })
    //     loader.value = false
    //   } catch (e) {
    //     console.log(e.message)
    //   }
    // }
    async function filterByName (filterNameState) {
      console.log(filterNameState)
      if (filterNameState === true) {
        movies.value.sort((a, b) => a.title > b.title ? 1 : -1)
      } else if (filterNameState === false) {
        // movies.value.sort((a, b) => Number(a.id) > Number(b.id) ? 1 : -1)
        store.dispatch('getMovies')
      }
    }
    async function filterByYear (filterYearState) {
      if (filterYearState === true) {
        movies.value.sort((a, b) => Number(a.year) > Number(b.year) ? 1 : -1)
      } else if (filterYearState === false) {
        // movies.value.sort((a, b) => Number(a.id) > Number(b.id) ? 1 : -1)
        store.dispatch('getMovies')
      }
    }
    onMounted(() => {
      store.dispatch('getMovies')
    })
    return {
      movies, loader, filterByName, filterByYear
    }
  },
  components: { AppPoster, Loader, AppFilterMovies }
}
</script>

<style scoped>

</style>
