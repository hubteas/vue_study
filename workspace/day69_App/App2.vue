<template>
  <div id="app">
    <h1>이벤트 수식어</h1>
    <a href="#" @click.stop="handleClick">stop propagation</a>

    <form @submit.prevent="handleSubmit">
    <input type="text" v-model="inputValue" placeholder="입력후 엔터를 누르세요"/>
    <input text="text" @keyup.enter = "onEnter" placeholder="엔터를 누르세요"/>
    <input type="text" @keyup.ctrl.enter="onEnterCtrl" placeholder="ctrl + enter"/>
    <input type="text" @keyup.alt.c="onAltC" placeholder="Alt + C"/>
    
    <br><br>
    <button type="submit">제출</button>
    <button @click.exact="onClick">버튼</button>
    </form>
  </div>
</template>

<script>
export default{
  data(){
    return{
      inputValue:''
    };
  },
  methods:{
    handleClick(){
      console.log("stop propagation");
    },
    handleSubmit(){
      console.log("form submit:", this.inputValue);
    },
    onEnter(){
      console.log('enter 키를 눌렀을 때 이벤트 발생');
    },
    onEnterCtrl(){
      console.log('ctrl + enter');
    },
    onAltC(){
      console.log('Alt + C');
    },
    onClick(){
      console.log('아무것도 누르지 않음');
    },

  }
}
</script>