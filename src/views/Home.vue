<template>
  <div class="home">
    <HelloWorld :hero="herodata" @goDetail="goDetail"/>
    <search :searchdata="searchdata" @searchInput="searchinput" @goDetail="goDetail"/>
    <msg v-if="msgdata!=''" :msg="msgdata" @clearMsg="clearMsg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import msg from "@/components/msg.vue";
import search from "@/components/search.vue";
import herodata from "@/data"; //引入数据
import store from "@/store";
export default {
  name: "home",
  data() {
    return {
      herodata: [], //数据赋值
      msgdata: [], //消息值
      searchdata: [] //搜索值
    };
  },
  methods: {
    //清除数据
    clearMsg() {
      this.$store.dispatch("clearMsgAct");
      this.storeData(); //赋值方法
    },
    //搜索方法
    searchinput(val) {
      let time_;
      clearTimeout(time_);
      let that = this;
      function search() {
        if (val != "") {
          for (let i in that.herodata) {
            if (that.herodata[i].name.indexOf(val) != "-1") {
              that.searchdata.push(that.herodata[i]);
            }
          }
        }else{
          that.searchdata=[];
        }
      }
      time_ = setTimeout(search, 600);
    },
    //赋值方法
    storeData() {
      this.herodata = this.$store.state.herodata;
      this.msgdata = this.$store.state.heromsg;
    },
    //进入个人详情
    goDetail(e) {
      this.$router.push("/detail/" + e);
      this.$store.dispatch("addmsgAct", "进入英雄主页，id=" + e);
    }
  },
  components: {
    HelloWorld,
    msg,
    search
  },
  created() {
    this.storeData();
  }
};
</script>
