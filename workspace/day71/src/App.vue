<template>
  <div>
    <MyButton2>
      <span style="color:red">클릭하세용</span>
      <em>!!</em>
    </MyButton2>
  </div>

  <BaseCard>
    <template #header>제목</template>
    안녕하세요, 저는 기본 슬롯입니다
    <template #footer>푸터</template>
  </BaseCard>

  <MyComponent v-slot="{text, count}">
    <p>{{ text }} - Count : {{ count }}</p>
  </MyComponent>
</template>

<script>
import BaseCard from './components/BaseCard.vue';
import MyButton2 from './components/MyButton2.vue';
import MyComponent from './components/MyComponent.vue';

export default {
  components : {
    MyButton2,
    BaseCard, 
    MyComponent,
  },
};
</script>

<style>
div{
  margin:20px;
}
</style>