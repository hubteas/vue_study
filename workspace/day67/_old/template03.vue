<template>
  <div>
    <h1>Hello, {{ name }}</h1>
    <p>Single File Component</p>
  </div>
</template>

<script>
export default{
  data(){
    return {
      name : "김태유",
    };
  }
};
</script>