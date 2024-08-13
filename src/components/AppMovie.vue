<template>
  <div class="">
    <div class="backToMovies container">
      <div class="backToMovies__text">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_2041)">
        <path d="M11.67 3.86998L9.9 2.09998L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.86998Z" fill="#FF5252" fill-opacity="0.98"/>
        </g>
        <defs>
        <clipPath id="clip0_1_2041">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        <router-link to="/"><p>Назад к списку</p></router-link>
      </div>
      <div class="backToMovies__border"></div>
    </div>
    <div class="poster container" v-if="current">
      <div class="poster__logo">
        <img src="" alt="logo">
      </div>
      <div class="poster__content">
        <h3 class="poster__title">{{ current.title }}</h3>
        <p class="poster__text">{{ current.year }}, {{ current.genre }}</p>
        <p class="poster__text" v-if="current.directors">Режиссёр: {{ current.directors.toString() }}</p>
        <p class="poster__text" v-if="current.actors">Актёры: <span class="poster__actors">{{ current.actors.toString() }}</span></p>
        <p class="poster__description" v-if="current.description">{{ current.description }}</p>
      </div>
      <div class="poster__duration" v-if="current.collapse.duration">{{ current.collapse.duration.toString() }}</div>
    </div>
    <loader
    v-if="loader"></loader>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Loader from '@/components/AppLoader.vue'

export default {
  setup () {
    const route = useRoute()
    const id = computed(() => route.params.id)
    const store = useStore()
    const movies = computed(() => store.state.myMovies)
    const current = computed(() => movies.value.find(el => el.id === Number(id.value)
    ))
    const loader = computed(() => store.state.loader)
    onMounted(() => {
      console.log('qqq')
      store.dispatch('getMovies')
    })
    return {
      id, movies, current, loader
    }
  },
  components: { Loader }
}
</script>

<style lang="scss" scoped>
.backToMovies{
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  // & p::before{
  //   content: url('../img/arrow_back.svg');
  // }
  &__border{
    border-bottom: 1px solid #C4C4C4;
    margin-bottom: 40px;
  }
  &__text{
  display: flex;
  flex-direction: row;
  gap: 0px;
  }
  &__text p{
  color: #FF5252FA;
  text-decoration-line: underline;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  }
}
</style>
