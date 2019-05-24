<template>
  <div class="about">
    <list
      v-if="herodata!=''"
      :listHero="herodata"
      @add="addhero"
      @deletelist="deletehero"
      @goDetail="goDetail"
    />
    <msg v-if="msgdata!=''" :msg="msgdata" @clearMsg="clearMsg"/>
  </div>
</template>
<script>
import msg from "@/components/msg.vue";
import list from "@/components/list.vue";
export default {
  data() {
    return {
      msgdata: [], //消息值
      herodata: [] //英雄值
    };
  },
  components: {
    msg,
    list
  },
  methods: {
    //清除数据
    clearMsg() {
      this.$store.dispatch("clearMsgAct");
      this.storeData(); //赋值方法
    },
    //赋值方法
    storeData() {
      this.herodata = this.$store.state.herodata;
      this.msgdata = this.$store.state.heromsg;
    },
    //增加英雄
    addhero(val) {
      let id_ = this.herodata[this.herodata.length - 1].id;
      let obj_ = {};
      obj_.id = id_ + 1;
      obj_.name = val;
      if (val != "") {
        this.$store.dispatch("adduserACT", obj_);
        this.$store.dispatch("addmsgAct", "增加英雄，id=" + id_);
      }
    },
    //删除英雄
    deletehero(e) {
      this.$store.dispatch("deleteuserAct", e);
      this.$store.dispatch("addmsgAct", "删除英雄，id=" + e);
    },
    //进入个人详情
    goDetail(e) {
      this.$router.push({path:"/detail/" + e});
      this.$store.dispatch("addmsgAct", "进入英雄主页，id=" + e);
    }
  },
  created() {
    this.storeData();
  }
};
</script>
<style lang="scss" scoped>
</style>

