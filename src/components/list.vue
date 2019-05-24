<template>
  <div class="hero_list">
    <h1>我的英雄</h1>
    <div class="add">
      <span>英雄名称</span>
      <input type="text" v-model="inputval">
      <span class="button" @click="add()">添加</span>
    </div>
    <div class="list">
      <div class="item" v-for="(item,index) in listHero" :key="'list'+index" @click="goDetail(item.id)">
        <span class="id">{{item.id}}</span>
        <span class="name">{{item.name}}</span>
        <span class="button" @click.stop="deletelist(item.id)">x</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        inputval:'',
    };
  },
  props: {
    listHero: Array
  },
  methods:{
      add(){
          this.$emit("add",this.inputval);
          this.clearVal();
      },
      deletelist(e){
          this.$emit("deletelist",e);
      },
      clearVal(){
          this.inputval=''
      },
      goDetail(e){
          this.$emit("goDetail",e);
      }
  }
};
</script>
<style lang="scss" scoped>
.add {
  padding: 10px 0;
  span {
    margin: 0 10px;
  }
  .button {
    padding: 5px;
    color: #000;
    background: #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
}
.list {
  div {
    line-height: 40px;
    font-size: 15px;
    cursor: pointer;
    .id,
    .button {
      padding: 5px;
      background: #000;
      color: #fff;
    }
    .name {
      padding: 5px;
      background: #ccc;
    }
  }
}
</style>
