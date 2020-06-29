<template>
    <div>
        <Header/>
        <nuxt/>
        <Tool/>
        <Footer/>
    </div>
</template>
<script>
    import Footer from '../components/footer/Footer';
    import Header from '../components/header/Header';
    import Tool from '../components/tool/Tool'
    export default {
      component:{
        Header,
        Footer,
        Tool
      }
    }
</script>

<style>

</style>
