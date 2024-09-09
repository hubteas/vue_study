<!-- 기본 slot과 Fallback 컨텐츠 -->
<template>
  <button class="my-btn">
    <slot>디폴트 버튼!</slot> <!-- Fallback content-->
  </button>
</template>

<style scoped>
.my-btn{
  color:#fff;
  background-color: darkblue;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>