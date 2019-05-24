<template>
  <div class="hello">
    <p>前列英雄</p>
    <div class="list_hero" >
      <div class="item" v-for="(item,index) in hero" v-show="index<4" :key="'hero'+index" @click="goDetail(item.id)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    hero: Array
  },
  methods:{
     goDetail(e){
          this.$emit("goDetail",e);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  font-size:28px; 
}
.list_hero{
  overflow: hidden;
  height: auto;
  display: flex;
  justify-content: space-around;
  .item{
    width: 150px;
    height: 100px;
    background: #eaeaea;
    line-height: 100px;
    cursor: pointer;
    &:hover{
      background: #42b983;
      color:#fff;
    }
  }
}
</style>
