<template>
  <nav class="app-nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Post</a></li>
      <li><a href="#">Login</a></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.app-nav ul{
  list-style: none;
  padding: 0;
}

.app-nav ul li{
  display: inline-block;
  margin: 10px;
}

.app-nav ul li a{
  color : white;
  text-decoration: none;
  font-weight: bole;
}

.app-nav ul li a:hover{
  text-decoration: underline;
}
</style>
