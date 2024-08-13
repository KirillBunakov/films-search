<template>
  <div>
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
import AppPoster from '@/components/AppPoster.vue'
import Loader from '@/components/AppLoader.vue'
import AppFilterMovies from '@/components/AppFilterMovies.vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const movies = computed(() => store.state.myMovies)
    const loader = computed(() => store.state.loader)
    async function filterByName (filterNameState) {
      console.log(filterNameState)
      if (filterNameState === true) {
        movies.value.sort((a, b) => a.title > b.title ? 1 : -1)
      } else if (filterNameState === false) {
        store.dispatch('getMovies')
      }
    }
    async function filterByYear (filterYearState) {
      if (filterYearState === true) {
        movies.value.sort((a, b) => Number(a.year) > Number(b.year) ? 1 : -1)
      } else if (filterYearState === false) {
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
