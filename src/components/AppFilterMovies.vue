<template>
  <div class="filter container">
    <h2 class="filter__title">Фильмы</h2>
    <div class="filter__box">
      <div class="filter__form">
        <input type="checkbox" id="filterByName" v-model="filterNameState" @click="filterNameState = !filterNameState, filterYearState = false" @input="$emit('filterByName', filterNameState)">
        <label for="filterByName">Отсортировать по названию</label>
      </div>
      <div class="filter__form">
        <input type="checkbox" id="filterByYear" v-model="filterYearState" @click="filterYearState = !filterYearState, filterNameState = false" @input="$emit('filterByYear', filterYearState)">
        <label for="filterByYear">Отсортировать по году</label>
      </div>
    </div>
    <div class="filter__borderline"></div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const filterNameState = ref(false)
    const filterYearState = ref(false)

    return {
      filterNameState, filterYearState
    }
  }
}
</script>

<style lang="scss" scoped>
.filter{
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto;
  margin-bottom: 40px;
  &__title{
    font-family: Roboto;
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    color: #FFFFFF;
    margin-top: 40px;
  }
  &__box{
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
  &__form{
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  &__form label{
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: #C4C4C4;
  }
  &__borderline{
    border-bottom: 1px solid white;
  }
}
input:checked{
  accent-color: #FF5252FA
}
</style>
