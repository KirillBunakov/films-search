<template>
  <div class="notfound container">
    <h2 class="notfound__title">Такой страницы не существует</h2>
    <router-link to="/"><h3 class="notfound__text">На главную</h3></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.notfound{
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  justify-content: center;
  background-color: white;
  height: 100px;
  &__title{
    color: black;
  }
  &__text{
    color: black;
  }
  &__text:hover{
    color: red;
  }
}
</style>
