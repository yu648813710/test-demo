<template>
  <div class="details">
    <h1>{{user.name}}的主页</h1>
    <p>id：{{user.id}}</p>
    <div class="name">
      <p>姓名</p>
      <div>
        <input type="text" v-model="name">
      </div>
      <div class="button">
        <span @click="goBack()">返回</span>
        <span @click="saveUser()">保存</span>
      </div>
    </div>
    <msg v-if="msgdata!=''" :msg="msgdata" @clearMsg="clearMsg"/>
  </div>
</template>
<script>
import msg from "@/components/msg.vue";
export default {
  name: "datail",
  data() {
    return {
      herodata: [], //数据赋值
      msgdata: [], //消息值
      user: {},
      name: ""
    };
  },
  methods: {
    //清除数据
    clearMsg() {
      console.log(this.$store);
      this.$store.dispatch("clearMsgAct");
      this.storeData(); //赋值方法
    },

    //赋值方法
    storeData() {
      this.herodata = this.$store.state.herodata;
      this.msgdata = this.$store.state.heromsg;
    },
    //查询方法
    userDetail() {
      let id_ = this.$route.params.id;
      for (let i in this.herodata) {
        if (this.herodata[i].id == id_) {
          this.user = this.herodata[i];
          this.name = this.user.name;
        }
      }
    },
    //返回
    goBack() {
      this.$router.go(-1);
    },
    //保存修改用户
    saveUser() {
      if (this.name != "") {
        this.$store.dispatch("saveUserAct", [this.user.id, this.name]);
        this.storeData();
        this.userDetail();
        this.$store.dispatch("addmsgAct", "修改英雄名，id=" + this.user.id);
        this.goBack();
      }
    }
  },
  components: {
    msg
  },
  created() {
    this.storeData();
    this.userDetail();
  }
};
</script>
<style lang="scss" scoped>
.button {
  padding: 10px;
  span {
    padding: 5px;
    margin-right: 10px;
    background: #ccc;
    cursor: pointer;
  }
}
</style>
