<template>
  <div id="app">
    <AppHeader></AppHeader>
    <!-- <button @click="currentView = 'PostList'">게시물 목록</button>
    <button @click="currentView = 'PostWrite'">게시물 작성</button>

    <component :is="currentView"></component> -->
    <!-- <PostList></PostList>
    <PostWrite></PostWrite> -->

    <PostList :posts="posts" @view-post="viewPostDetail"></PostList>
    <AppFooter></AppFooter>
  </div>
</template>

<!-- <script>
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
import PostList from './components/post/PostList.vue';
import PostWrite from './components/post/PostWrite.vue';


export default {
  components: {
    AppHeader,
    AppFooter,
    PostList,
    PostWrite,
  },
  data(){
    return{
      currentView: 'PostList',
    };
  },
};
</script> -->

<script>
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
import PostList from './components/post/PostList.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    PostList,
  },
  data(){
    return{
      posts:[
        {id:11, title:"첫번째1", content:"1번째 포스트"},
        {id:22, title:"두번째2", content:"2번째 포스트"},
      ],
    };
  },
  methods:{
    viewPostDetail(id){
      alert(`포스트 id : ${id}`);
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;
}
</style>
