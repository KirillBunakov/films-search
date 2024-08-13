<template>
  <header class="header">
    <h2 class="header__title">#movienow</h2>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
  background: #FA2828FA;
  box-shadow: 0px 8px 7px 0px #00000047;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  &__title{
    font-family: Roboto;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.21em;
    text-transform: uppercase;
    color: #000000;
  }
}
</style>
