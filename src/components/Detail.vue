<template>
  <div class = "detail">
    <ul class = "listbox">
      <li class = "lsit" v-for = "value,index  in onsale" :key = "index" style = "background: rgba(255,105,143,0.48)">
        <span class = "name item">类别：{{value.name}}</span>
        <span class = "type item">型号：{{value.type}}</span>
        <p class = "price item">价格：<span style = "color: #0eb67b;font-weight: bold">{{value.price/0.8}}*0.8={{value.price}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Detail',
    data(){
      return {
        // products: this.$store.state.products, //获取store中state的数据
        onsale: this.$store.getters.onsale //获取store中state的数据
      }
    }
  }
</script>
<style scoped>
  .list {
    background: rgba(255, 105, 143, 0.48);
  }
</style>
