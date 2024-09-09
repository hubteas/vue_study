<script setup>

</script>

<template>
  <h1>About Page</h1>
  <ul>
    <li>$route.name : {{ this.$route.name }}</li>
    <li>$route.path : {{ this.$route.path }}</li>
  </ul>
  <button @click="$router.push('/')">Home으로 이동</button>
</template>
<style>

</style>
