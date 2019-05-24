import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    herodata: [{
        'id': 1,
        "name": "王哈哈"
      },

      {
        'id': 2,
        "name": "李四"
      },

      {
        'id': 3,
        "name": "张三"
      },

      {
        'id': 4,
        "name": "周树人"
      },
      {
        'id': 5,
        "name": "拉拉"
      }
    ],
    heromsg: ["获取到英雄们"]
  },
  mutations: {
    //清空消息数据
    clearMsg(data) {
      data.heromsg = [];
    },
    //增加用户
    adduser(data, userData) {
      data.herodata.push(userData);
    },
    //增加列表信息
    addmsg(data, msg){
      data.heromsg.push(msg);
    },
    //删除用户
    deleteuser(data, userid) {
      for (let i in data.herodata) {
        if (data.herodata[i].id == userid) {
          data.herodata.splice(i, 1);
        }
      }
    },
    //保存修改用户
    saveUser(data,[id,name]){
      for (let i in data.herodata) {
        if (data.herodata[i].id == id) {
          data.herodata[i].name=name;
        }
      }
    }
  },
  actions: {
    //清空消息数据
    clearMsgAct({
      commit
    }) {
      commit('clearMsg');
    },
    //增加用户
    adduserACT({
      commit
    }, userData) {
      commit('adduser', userData);
    },
    //删除用户
    deleteuserAct({
      commit
    }, userid) {
      commit('deleteuser', userid);
    },
    //增加消息
    addmsgAct({
      commit
    }, val){
      commit('addmsg',val)
    },
    //保存修改用户
    saveUserAct({
      commit
    },[id,name]){
          commit('saveUser',[id,name])
    }
  }
})