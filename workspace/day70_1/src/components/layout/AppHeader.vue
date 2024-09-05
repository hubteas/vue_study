<template>
  <header class="app-header">
    <h1>Vue 게시판</h1>
    <AppNav />
  </header>
</template>

<script>
import AppNav from './AppNav.vue';

export default{
  components:{
    AppNav,
  },
};
</script>

<style scoped>
.app-header{
  background-color: #333;
  color:white;
  text-align: center;
  padding: 20px;
}
</style>
