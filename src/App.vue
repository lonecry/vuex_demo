<template>
  <div id = "app">
    <!--<img src = "./assets/logo.png">-->
    <!--<router-view/>-->
    <OriginList></OriginList>
    <Detail></Detail>
  </div>
</template>
<script>
  import OriginList from '@/components/OriginList'
  import Detail from '@/components/Detail'

  export default {
    name: 'App',
    components: {OriginList, Detail},
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    padding: 0;
    margin: 0;
  }

  .listbox {
    width: 800px;
    height: 300px;
    /*background: #e6e6e6;*/
    display: block;
    list-style: none;
    padding: 0;
  }

  .lsit {
    width: 100%;
    height: 20%;
    float: left;
    background: #fff8df;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    border: 1px solid #5e888d;
    cursor: pointer;
    text-align: left;
  }

  .item {
    width: 33.33%;
  }
</style>
