<template>
  <div class="msg_box">
      <p>消息板</p>
      <button @click="clearMsg()">清除</button>
      <div class="msg_item">
          <p v-for="(item,index) in msg" :key="'msg'+index">
              英雄服务:{{item}}
          </p>
      </div>
  </div> 
</template>
<script>
export default {
    props:{
        msg:Array
    },
    methods:{
        //自定义事件
        clearMsg(){
            this.$emit('clearMsg')
        }
    }
};
</script>
<style lang="scss" scoped>
p{
    color:brown;
    font-size: 28px;
}
button{
    background: #eaeaea;
    border:none;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    width: 100px;
    border-radius: 4px;
}
.msg_item p{
    color:cadetblue;
    font-size: 24px;
    line-height: 38px;
}
</style>
