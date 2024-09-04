<template>
  <article class="post-detail">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </article>
</template>

<!-- <script>
export default{
  data(){
    return{
      post:{
        id:1,
        title:"첫번째게시물",
        content:"vue게시판의 펏번째 게시물입니다",
        
      },
    };
  },
};
</script> -->
<script>
export default{
  props:{
    post:{
      type:Object,
      required: true,
    },
  },
};
</script>

<style>
.post-detail{
  padding: 20px;
  border: 1px solid black;
  margin : 20px;
}
</style>