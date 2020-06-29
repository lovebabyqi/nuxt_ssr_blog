<template>
    <div class="main-container">
        <h2 class="title">{{blog.title}}</h2>
        <div v-html="mdHtml" class="detail-content"></div>
        <button type="button" class="btn" @click="update">修改博文</button>
        <button type="button" class="btn" @click="delBlog">删除博文</button>
    </div>
</template>

<script>
  import marked from 'marked'//因为文章有修改逻辑, 所以仅在展示时转换markdown为高亮html,服务端任然保存markdown
  import {reqDeleteOne} from '../../api'
  export default {
    layout: 'blog',
    created() {
      this.init()
    },
    data() {
      return {
        blog: {},
        mdHtml: ''
      }
    },
    methods: {
      init() {
        const { blog } = this.$route.params
        if (blog !== undefined) {
          this.blog = blog
          marked.setOptions({
            highlight: function(code) {
              return require('highlight.js').highlightAuto(code).value
            }
          })
          this.mdHtml = marked(blog.content)
        }else{
          this.mdHtml = '未找到文章内容,返回首页'
        }

      },
      update(){
        this.$router.push({name:'write',params:{blog:this.blog}});
      },
      async delBlog(){
        const result = await reqDeleteOne(this.blog.title);
      }
    }
  }
</script>

<style lang="less">
    /*v-html 不能使用scoped样式*/
    .main-container {
        width: 750px;
        margin: 10px auto;
        overflow-y: auto;
        .title{
            font-size:28px;
            text-align: center;
            line-height:35px;
            font-weight:bold;
        }
        .btn{
            padding: 8px 20px;
            background-color: #409eff;
            border-radius: 5px;
            color: #fff;
            font-size: 14px;
            outline: none;
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            border: 1px solid #dcdfe6;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            margin:0 20px 20px;
            transition: 0.1s;
            font-weight: 500;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
        /*这个样式覆盖编辑器样式干扰*/
        .hljs{
            color:#fff!important;
            background-color: rgb(40, 44, 52) !important;
        }
        /deep/.detail-content{
            width:95%;
            margin:0 auto;
            padding:20px;
            box-sizing: border-box;
            font-size:17px;
            img{
                width:100%;
                padding:20px;
            }
            p{
                line-height: 1.5;
            }
            h1{
                font-size: 22px;
            }
            h2{
                font-size: 20px;
            }
            h3{
                font-size: 18px;
            }
            h4{
                font-size: 17px;
            }
            h5,h6{
                font-size: 16px;
            }
            h1,h2,h3,h4,h5,h6{
                margin-top: 24px;
                margin-bottom: 15px;
                padding-bottom: 10px;
                font-weight: 600;
                line-height: 1.25;
                /*color:#409EFF;*/
                border-bottom: 1px solid #eaecef;
            }
            dl,ol,ul,p,pre,table{
                margin-top: 0;
                margin-bottom: 13px;
            }
            dl,ol,ul li{
                line-height: 16px;
            }
            strong{
                font-weight: 600;
                /*color:#67C23A;*/
            }
            em{
                font-style: italic;
            }
            ins {
                text-decoration: underline;
            }
            s {
                text-decoration: line-through;
            }
            mark {
                background-color: yellow;
                color: black;
            }
            blockquote {
                padding: 0 1rem;
                color: #6a737d;
                border-left: 25px solid #dfe2e5;
            }
            blockquote>:last-child {
                margin-bottom: 0;
            }
            blockquote>:first-child {
                margin-top: 0;
            }
            pre{
                padding: 5px 20px;
                overflow: auto;
                /*background-color: #f5f5f5;*/
                color:#fff;
                background: rgb(40, 44, 52);
                border: 1px solid #ccc;
                border-radius: 10px;
            }
            pre pre{
                border:0;
            }
            pre code{
                display: inline;
                padding: 0;
                margin: 0;
                overflow: visible;
                line-height: 1.6;
                border: 0;
                font-size: 15px;
                /*font-family: 微软雅黑 New !important;*/
                font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;
                word-wrap: break-word;
                white-space: pre-wrap;
            }
            pre code pre code{
                line-height: 3em;
            }
            table{
                display: block;
                width: 100%;
                overflow: auto;
                thead {
                    display: table-header-group;
                    vertical-align: middle;
                    border-color: inherit;
                    tr {
                        display: table-row;
                        vertical-align: inherit;
                        border-color: inherit;
                    }
                }
                td,th {
                    padding: 6px 13px;
                    border: 1px solid #dfe2e5;
                }
                th{
                    font-weight: 600;
                }
                td{
                    padding: 6px 13px;
                    border: 1px solid #dfe2e5;
                }
            }
            .hljs-title, .hljs-section, .hljs-selector-id {
                color: lightgreen;
                font-weight: unset!important;
            }
            .hljs-comment, .hljs-quote {
                color: #998;
                font-style: italic;
            }
            .hljs-keyword, .hljs-selector-tag, .hljs-subst ,.hljs-attribute{
                /*color: #333;*/
                color: rgb(197, 165, 197);
                /*font-weight: bold;*/
            }
            .hljs-built_in, .hljs-builtin-name {
                /*color: #0086b3;*/
                color:rgb(121, 182, 242);
            }
            .hljs-string, .hljs-doctag {
                /*color: #d14;*/
                color: rgb(252, 146, 158);
            }
            .hljs-number, .hljs-literal, .hljs-variable, .hljs-template-variable, .hljs-tag, .hljs-attr {
                color: lightblue;

            }
            .hljs-params{
                color: rgb(250, 200, 99);
            }
            .hljs-name{
                color:#FDD692;
            }
            .hljs-symbol,.hljs-bullet{
                color:#67D5B5;
            }
        }

    }
    @media screen and (max-width: 768px) {
        .main-container {
            width: 100vw;
            margin: 0;
            /deep/.detail-content{
                width: 95vw;
                padding:0;
                pre{
                    padding:5px;
                }
            }
        }
    }
</style>
