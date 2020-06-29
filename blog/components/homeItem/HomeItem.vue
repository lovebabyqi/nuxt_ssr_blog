<template>
    <div class="blog-item">
        <a href="javascript:;" @click="readContext" class="title">{{blog.title}}</a>
        <p class="Abstract">{{blog.desc}}

        </p>
        <p class="desc"><span>created_by{{blog.created_at|formaterTime}}</span><span>last_by{{blog.updated_at|formaterTime}}</span></p>
    </div>
</template>

<script>
    export default {
      props:['blog'],
      filters:{
        formaterTime(time){
          let date = new Date(time);
          return date.toLocaleString('chinese',{hour12:false})
        }
      },
      methods:{
        async readContext() {
          this.$router.push({
            name:'readBlog',
            params:{blog:this.blog}
          })
        }
      }
    }
</script>

<style lang="less" scoped>
    .blog-item{
        width:100%;
        padding:10px;
        .title{
            margin: 6px 0;
            color: #6a6352;
            font-size: 18px;
        }
        .Abstract{
            padding-top: 9px;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
            font-size:14px;
            line-height: 1.5;
        }
        .desc{
            padding-bottom: 10px;
            margin: 0;
            border-bottom: #ccc 1px dashed;
            overflow: hidden;
            color: #666;
            font-family: Arial,Helvetica,sans-serif;
            font-size: 12px;
            font-weight: normal;
            text-decoration: none;
            line-height: 1.4!important;
        }
    }
    @media screen and (max-width:768px){
        .blog-item{
            width:100vw;
        }
    }
</style>
