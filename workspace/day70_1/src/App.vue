<template>
  <div id="app">
    <!-- <AppHeader></AppHeader>
    <button @click="currentView='PostList'">게시물 목록</button>
    <button @click="currentView='PostWrite'">게시물작성</button>

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


export default{
  components : {
    AppHeader,
    AppFooter,
    PostList,
    PostWrite,

  },
  data(){
    return {
      currentView: 'Postlist',
    }
  }
};

</script> -->

<script>
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
import PostList from './components/post/PostList.vue';


export default{
  components : {
    AppHeader,
    AppFooter,
    PostList,
    PostWrite,

  },
  data(){
    return{
      posts:[
        {id:1, title:"첫번째1", content:"첫번째 포스트"},
        {id:2, title:"두번째2", content:"두번째 포스트"},
      ],
    };
  },
  methods:{
    viewPostDetail(id){
      alert(`포스트 id: ${id}`);
    },
  },
}
</script>

<style>
#app{
  text-align: center;
}
</style>