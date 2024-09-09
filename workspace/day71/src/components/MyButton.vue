<template>
  <button @click="$emit('large-text')">텍스트 키우기</button>
  <button @click="$emit('small-text')">텍스트 줄이기</button>
</template>

<script>
export default { 
  emits:['large-text', 'small-text'],
};
</script>

<style scoped>
button {
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
}
</style>