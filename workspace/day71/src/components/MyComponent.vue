<template>
  <div>
    <slot :text="msg" :count="count"></slot>
    <button @click="countUp">Count : {{ count }}</button>
  </div>
</template>
<script>
import {ref} from 'vue';

export default{
  setup(){
    const msg = ref('안녕하세요');
    const count=ref(1);
  
    const countUp = ()=>{
      count.value += 1;
    }
    return {
    msg,
    count,
    countUp,
   }
  }

}
</script>

<style>

</style>