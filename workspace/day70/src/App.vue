<template>
  <app-header></app-header>
  <app-nav></app-nav>
  <app-view></app-view>
</template>
<script>
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppView from './components/AppView.vue';
export default {
  components:{
    AppHeader, AppNav, AppView,
  },
};
</script>
<style>
@import "./assets/component.css";
</style>