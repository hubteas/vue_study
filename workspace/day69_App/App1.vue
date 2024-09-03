<!-- 1번 : button2.vue 확인-->
<template>
  <div id="app">
    <h1>메인컴포넌트</h1>
    <button2/>
  </div>
</template>

<script>
import button2 from './components/button2.vue'
export default{ 
  component:{
    button2
  }  
};
</script>

<style>
#app{
  background-color: lightsalmon;
  text-align: center;
  padding: 20px;
  margin-top: 60px;
}
</style>

