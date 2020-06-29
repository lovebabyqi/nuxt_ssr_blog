<template>
    <div class="main-container">
        <div class="blog-list" v-if="Object.keys(blogList).length!==0">
            <home-item v-for="(blog,index) in blogList" :key="index" :blog="blog"/>
        </div>
    </div>
</template>

<script>
  import Header from '../components/header/Header';
  import HomeItem from '../components/homeItem/HomeItem'
  import { reqFindAll } from '../api';

  export default {
    layout:'blog',
    data() {
      return {
        blogList:[]
      }
    },
    components: { Header , HomeItem},
    methods:{
      async getAllBlog(){
        const result = Object.freeze(await reqFindAll());//只需要渲染展示,数据不会动态变化,不需要数据响应
        this.blogList = result.blogList
      }
    },
    created(){
      this.getAllBlog();
    }
  }
</script>

<style lang="less" scoped>
    .blog-list{
        width:100%;
        margin:0 auto;
    }
    @media screen and (max-width:768px){
        .blog-list{
            width:100vw;
            margin:0;
        }
    }
</style>
