<template>
    <div class = "detail">
        <ul class = "listbox">
            <li class = "lsit" v-for = "value,index  in onsale" :key = "index" style = "background: rgba(214,92,116,0.48)">
                <span class = "name item">类别：{{value.name}}</span>
                <span class = "type item">型号：{{value.type}}</span>
                <p class = "price item">价格：<span style = "color: #0eb67b;font-weight: bold">{{value.price/0.8}}*0.8={{value.price}}</span>
                </p>
            </li>
        </ul>
        <div class = "btnbox">
            <button class = "btn" @click = "minusPrice">减少价格</button>
            <button class = "btn" @click = "addPrice">增加价格</button>
        </div>
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
        },
        methods: {
            minusPrice(){
                console.log('MinusPrice')
                this.$store.commit('minusPrice', 5)
            },
            addPrice(){
                console.log('Add Price')
                this.$store.dispatch("addPriceAsync", 3)
            }
        }
    }
</script>
<style scoped>
    .list {
        background: rgba(255, 105, 143, 0.48);
    }

    .btnbox {
        width: 800px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        margin-top: 50px;
    }

    .btn {
        width: 100px;
        height: 50px;
        line-height: 50px;
        display: block;

    }
</style>
