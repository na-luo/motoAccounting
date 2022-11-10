<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import "@/assets/style/reset.scss";
  @import "@/assets/style/helper.scss";
  body{
    line-height: 1.5;
    font-size: 16px;
    font-family: $font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    caret-color: transparent;
  }

</style>
