<template>
  <div class="search_box">
      <p>英雄搜索</p>
      <input type="text" v-model="inputval" @input="searchInput()">
      <div class="search_item" v-for="(item,index) in searchdata" :key="'search'+index" @click="goDetail(item.id)">
          {{item.name}}
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            inputval:''
        }
    },
    props:{
        searchdata:Array
    },
    methods:{
        searchInput(){
            this.$emit('searchInput',this.inputval);
        },
        goDetail(e){
          this.$emit("goDetail",e);
      }
    }
};
</script>
<style lang="scss" scoped>
p{
    color:brown;
    font-size: 28px;
}
.search_item{
    background: #ccc;
    color:#fff;
    line-height: 30px;
    width: 173px;
    margin:0 auto;
    cursor: pointer;
    &:hover{
        background: #000;
    }
}
</style>
