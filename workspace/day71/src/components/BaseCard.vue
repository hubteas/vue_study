<template>
<article>
  <div>
    <slot name='header'></slot>
  </div>
  <div>
    <slot></slot>
  </div>
  <div>
    <slot name='footer'></slot>
  </div>
</article>
</template>

<style scoped>
article{
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
