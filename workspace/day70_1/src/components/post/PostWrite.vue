<template>
  <div class="post-write">
    <h2>새 포스트 작성</h2>
    <form @submit.prevent = "submitPost">
      <div>
        <label for="title">Title</label>
        <input type="text" v-model="title" id="title" required />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea v-model="content" id="content" required></textarea>
      </div>
      <button type="submit">작성완료</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title : '',
      content: '',
    };
  },
  methods:{
    submitPost(){
      alert(`포스트 타이틀 : ${this.title}`);
    },
  },
};
</script>

<style scoped>
.post-write{
  padding: 20px;
}
.post-write form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post-write form input,
.post-write form textarea{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.post-write form button{
  padding: 10px;
  background-color: #333;
  color:white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.post-write form button{
  background-color: lightcoral;
}

</style>
