<template>
  <div class = "detail">
    <ul class = "listbox">
      <li class = "lsit" v-for = "value,index  in products" :key = "index">
        <span class = "name item">类别：{{value.name}}</span>
        <span class = "type item">型号：{{value.type}}</span>
        <p class = "price item">价格：<span style = "color: #0eb67b;font-weight: bold">{{value.price }} </span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'OriginList',
    data(){
      return {
        products: this.$store.state.products, //获取store中state的数据
        // onsale: this.$store.getters.onsale //获取store中state的数据
      }
    }
  }
</script>
<style scoped>
</style>
