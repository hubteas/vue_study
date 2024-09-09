<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
 <nav>
  <RouterLink to='/'>Home</RouterLink>
  <span> | </span>
  <RouterLink to="/about">About</RouterLink>
 </nav>
 <main>
  <RouterView></RouterView>
 </main>
</template>

<style>

</style>
