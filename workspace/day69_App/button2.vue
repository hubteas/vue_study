<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">버튼클릭</button>
  </div>
</template>

<script>
export default{
  data(){
    return {
      message : "버튼컴포넌트입니다"
    };
  },
  methods:{
    changeMessage(event){
      console.log(event.target);
      console.log(event.target.tagName);
      this.message = "버튼 클릭했습니다. 콘솔을 확인하세요"
    }
  }
}
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