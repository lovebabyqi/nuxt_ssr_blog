<template>
    <div class="tool">
        <span title="back" @click="goBack"/>
        <span title="new blog" @click="edit"/>
    </div>
</template>

<script>
  export default {
    methods: {
      goBack() {
        this.$router.back()
      },
      edit() {
        this.$router.replace({name:'write'})
      }
    }
  }
</script>

<style lang="less" scoped>
    .tool {
        position: fixed;
        right: 10vw;
        bottom: 150px;
        width: 40px;
        height: 150px;
        z-index: 150;

        span {
            display: block;
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
            border-radius: 50%;
            box-sizing: border-box;
            background: #333 url('../../assets/icons/back.png') no-repeat center center;
            background-size: 25px 25px;
            cursor: pointer;
        }

        span:first-child {
            background-image: url('../../assets/icons/back.png');
        }

        span:nth-child(2) {
            background-image: url('../../assets/icons/edit.png');
        }
    }

    @media screen and (max-width: 768px) {
        .tool {
            bottom: 80px;
            transform: scale(.8);
        }
    }
</style>
