<template>
    <div class="main-container">
        <h2>项目介绍：</h2>
        <p>nuxt + strapi 开发，简单完成博客整个流程跑通，博客增删改查，页面布局，媒体查询适配移动端。</p>
        <p>博客采用 markdown 存储，由于修改功能的逻辑是直接修改内容，修改时如果是 html 内容去修改，就比较难受了。所以保存 markdown ,展示时再用 marked 插件转换 html 展示。</p>
        <p>上传图片、登录功能、接口权限校验没做，，目前处于完全开放，后面如果有需要继续完善。</p>
        <h2>项目开发收获：</h2>
        <p>初次使用 nuxtjs + strapi，感受：</p>
        <h3>1. 效率</h3>
        <p>首先，使用框架的效率一定是建立在框架熟练程度，语法基础。strapi 尤其明显，strapi 使用的是 koa 框架，初次使用，
            从开始安装到跑通第一个接口，需要花些时间精力。不熟悉的情况下效率要比直接写node Server低很多，毕竟第一次不熟悉。</p>
        <h3>2. strapi优点</h3>
        <p>1. 熟悉以后较方便，不用单独去创建开启数据库服务，可直接建立数据关系，并且数据字段可直接指定类型，是否必传，默认值等。</p>
        <p>2. 建立好数据关系以后，相当于我们直接得到了一个后台管理系统。strapi帮我们完成了一系列数据管理层面的功能，可视化管理数据。</p>
    </div>
</template>

<script>
  export default{
    layout:'blog',
  }
</script>

<style lang="less" scoped>
    .main-container{
        width: 70vw;
        margin: 10px auto;
        padding:10px;
        h2,h3{
            font-weight:bold;
            margin:10px 0;
        }
        p{
            font-size:18px;
            text-indent: 2em;
            line-height:1.5;
        }
        h2{
            font-size:25px;
        }
        h3{
            font-size:20px;
        }
    }
    @media screen and (max-width:768px){
        .main-container{
            width:100vw;
        }
    }
</style>
