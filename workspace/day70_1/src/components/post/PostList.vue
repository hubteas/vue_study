<template>
  <section class="post-list">
    <h1>게시글</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a href="#" @click="viewPost(post.id)">{{ post.title }}</a>
      </li>
    </ul>
  </section>
</template>

<!-- <script>
export default {
  data() {
    return {
      posts: [
        {id:1, title:"첫번째 게시물"},
        {id:2, title:"두번째 게시물"},
        {id:3, title:"세번째 게시물"},
      ],
    };
  },
  methods:{
    viewPost(id){
      alert(`view post ${id}`);
      //상세페이지로 이동은 vue-router를 이용해서 이동함
    },
  },
};
</script> -->

<script>
export default {
  props: {
    posts: {
      type: Array,
      Required: true,
    },
  },
  methods: {
    viewPost(id) {
      this.$emit('view-post', id);
    },
  },
};
</script>



<style scoped>
.post-list ul {
  list-style: none;
  padding: 0;
}

.post-list ul li {
  margin-bottom: 10px;
}

.post-list ul li a {
  color: #333;
  text-decoration: none;
}

.post-list ul li a:hover {
  color: red;
}
</style>


<style scoped>
.post-list ul{
  list-style-type: none;
  padding: 0;
}

.post-list ul li{
  margin-bottom: 10px;
}

.post-list ul li a{
  color: #333;
  text-decoration: none;
}

.post-list li a:hover{
  color : red;
}
</style>