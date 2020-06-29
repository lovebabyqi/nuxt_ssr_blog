<template>
    <div class="main-container" ref="containerRef">
        <mavon-editor
                ref="md"
                style="z-index:10"
                :ishljs="true"
                :subfield="isShowDobble"
                :navigation='true'
                :tabSize="4"
                v-model="blog.content"
                :codeStyle="'monokai'"
                @change="chang"
                @imgAdd="imgAdd"
                @imgDel="imgDel"
        />
        <div class="form">
            <span>标题：</span><input type="text" placeholder="title" v-model="blog.title">
            <span>标签：</span><input type="text" placeholder="tags html,css,js,node,http,vue,react" v-model="blog.tags">
            <span>描述：</span><input type="text" placeholder="description" v-model="blog.desc">
            <button type="button" @click="submit">提交</button>
        </div>
    </div>
</template>

<script>
  import 'mavon-editor/dist/css/index.css'

  import marked from 'marked'
  import { reqCreateBlog ,reqUpdateBlog} from '../../api'

  export default {
    layout: 'blog',
    data() {
      return {
        imgList: [],
        isShowDobble: true,//控制编辑器单双栏，视口宽度变窄，变为单栏
        blog: {
          title: '',
          desc: '',
          tags: '',
          content: ''
        },
        submitType:0,//0为创建,1为更新
      }
    },
    created() {
      const { blog , submitType} = this.$route.params
      if (blog && Object.keys(blog).length !== 0) {
        this.blog = { title: blog.title, desc: blog.desc, tags: blog.tags, content: blog.content };
        this.submitType = submitType
      }
    },
    methods: {
      submit() {
        if(this.submitType===0){
          this.create()
        }else{
          this.update()
        }

      },
      async create(){
        const result = await reqCreateBlog(this.blog);
        const { status, msg, blog } = result;
        if(status === 1){
          this.$router.replace({name:'readBlog',params:{blog}})
        }
      },
      async update(){
        const result = await reqUpdateBlog(this.blog);
        const { status, msg, blog } = result;
        if(status === 1){
          this.$router.replace({name:'readBlog',params:{blog}})
        }
      },
      chang: function() {//这里只是保留了功能,实际保存时是存储markdown,要展示时再转换
        //解析成html
        marked.setOptions({
          highlight: function(code) {
            return require('highlight.js').highlightAuto(code).value
          }
        })
        console.log(marked(this.blog.content))
      },
      // 绑定@imgAdd event
      imgAdd(pos, file) {
        // 缓存图片信息（当前还是本地图片状态）
        this.imgList[pos] = file
        // console.log(pos)
        console.log('添加图片：' + this.imgList[pos])
      },
      imgDel(pos) {
        delete this.imgList[pos]
        console.log('删除图片：' + this.imgList[pos])
      },
      uploadImg() {
        // 第一步.将图片上传到服务器（一次性上传）.
        for (var i in this.imgList) {
          console.log('上传图片' + this.imgList[i])
          //接口提供了一种表示表单数据的键值对的构造方式，经过它的数据可以使用
          //multipart/form-data
          var formdata = new FormData()
          formdata.append('file', this.imgList[i])
          this.$axios({
            url: '上传图片的后台地址',
            method: 'post',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' }
          }).then(res => {
            // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
            /**
             * $vm 指为mavonEditor实例，可以通过如下两种方式获取
             * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
             * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
             */
            console.log(res)
            //pos为在编辑框中对应的位置0。。。，第二个为上传后的url
            this.$refs.md.$img2Url(pos, url)
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    .main-container {
        width: 100vw;

        /deep/ .markdown-body {
            min-height: calc(100vh - 100px);
            overflow: auto;

            .hljs-title, .hljs-section, .hljs-selector-id {
                color: lightgreen;
                font-weight: unset !important;
            }

            .hljs-comment, .hljs-quote {
                color: #998;
                font-style: italic;
            }

            .hljs-keyword, .hljs-selector-tag, .hljs-subst, .hljs-attribute {
                /*color: #333;*/
                color: rgb(197, 165, 197);
                /*font-weight: bold;*/
            }

            .hljs-built_in, .hljs-builtin-name {
                /*color: #0086b3;*/
                color: rgb(121, 182, 242);
            }

            .hljs-string, .hljs-doctag {
                /*color: #d14;*/
                color: rgb(252, 146, 158);
            }

            .hljs-number, .hljs-literal, .hljs-variable, .hljs-template-variable, .hljs-tag, .hljs-attr {
                color: lightblue;

            }

            .hljs-params {
                color: rgb(250, 200, 99);
            }

            .hljs-name {
                color: #FDD692;
            }

            .hljs-symbol, .hljs-bullet {
                color: #67D5B5;
            }
        }

        .form {
            margin: 50px 0 50px 100px;

            span {
                float: left;
                line-height: 45px;
            }

            input {
                box-sizing: border-box;
                width: 550px;
                height: 45px;
                display: block;
                padding: 5px 10px;
                outline: none;
                border: 1px solid #eee;
                background-color: #fff;

                &:focus {
                    border: 1px solid #30A9DE;
                }
            }

            button {
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
                margin: 0;
                transition: .1s;
                font-weight: 500;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .main-container {
            .markdown-body {

            }

            .form {
                margin: 0;
                width: 100vw;
                overflow: hidden;

                span {
                    display: inline-block;
                    width: 50px;
                    float: left;
                    line-height: 45px;
                }

                input {
                    width: 100vw;
                }

                button {
                    margin-top: 5px;
                }
            }
        }
    }
</style>
