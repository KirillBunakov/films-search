<!-- eslint-disable vue/require-v-for-key -->

<template>
  <div class="poster__main">
    <div class="poster poster__hover container" v-for="movie in movies" :key="movie.id">
      <div class="poster__logo">
        <img src="" alt="logo">
      </div>
      <div class="poster__content">
        <router-link :to="'/movie/'+movie.id" :movieId="$route.params.id"><h3 class="poster__title">{{ movie.title }}</h3></router-link>
        <p class="poster__text">{{ movie.year }}, {{ movie.genre }}</p>
        <p class="poster__text" v-if="movie.directors">Режиссёр: {{ movie.directors.toString() }}</p>
        <p class="poster__text" v-if="movie.actors">Актёры: <span class="poster__actors">{{ movie.actors.toString() }}</span></p>
        <p class="poster__description" v-if="movie.description">{{ movie.description }}</p>
      </div>
      <div class="poster__duration" v-if="movie.collapse.duration">{{ movie.collapse.duration.toString() }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movies'],
  setup () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
