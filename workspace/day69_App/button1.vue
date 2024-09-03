<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Click me</button>
  </div>
</template>

<script>
export default{
  data(){
    return{
      message:"버튼을 클릭하세요"
    };
  },
  methods:{
    changeMessage(){
      this.message="버튼을 눌렀습니다";
    }
  }
};
</script>

<style>
#app{
  background-color: lightcoral;
  text-align: center;
  margin: 20px;
  width: 100%;
}

button{
  padding: 10px 20px;
  font-size: 15px;
  cursor:pointer;
}
</style>