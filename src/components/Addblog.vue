<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories">
        <label>node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories">
        <label>react.js</label>
        <input type="checkbox" value="react.js" v-model="blog.categories">
        <label>angular4.js</label>
        <input type="checkbox" value="angular4.js" v-model="blog.categories">
      </div>
      <label>作者：</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
      <h3>谢谢您，您的博客已经发布！</h3><a href="/">返回</a>
    </div>
    
    <div  v-if="submmited" id="preview">
      <hr />
      <h3>博客预览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  /*http://jsonplaceholder.typicode.com*/
  name: 'add-blog',
  data () {
    return {
      blog:{
        title:"",
        content:"",
        categories:[],
        author:""
      },
      authors:["小帅哥","小酷哥","小呆哥"],
      submmited:false
    }
  },
  methods:{
    post:function(){
      axios.post("/posts.json",this.blog)
          .then((data)=>{
            this.submmited = true;
          })
    }
  }
}
</script>
<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin:20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin:20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding:8px;
}
textarea{
  height: 200px;
}
#checkboxes label{
  display: inline;
  margin-top: 0;
}
#checkboxes input{
  display: inline-block;
  margin-right:10px;
}
button{
  display: block;
  margin:20px 0;
  background: crimson;
  color:white;
  border:0;
  padding: 14px;
  border-radius: 4px;
  font-size:18px;
  cursor: pointer;
}
#preview{
  padding: 10px 20px;
  border:1px dotted #ccc;
  margin:30px 0;
}
h3{
  margin-top: 10px;

}
</style>
