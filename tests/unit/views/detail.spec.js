import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import vuex from 'vuex' //引入 vuex 
import detail from '@/views/detail.vue' // 引入页面 detail

//模拟 vuex
const localVue = createLocalVue() //模拟一个 vue 实例
localVue.use(vuex) //使用vuex
let mockFn=jest.fn(e);
const store = new vuex.Store({
    state: {
        herodata: [{
            'id': 1,
            "name": "王哈哈"
        }],
        heromsg: ["获取到英雄们"]
    },
    actions:{
        saveUserAct:mockFn,
        addmsgAct:mockFn,
    }
}); //模拟store数据

//给页面注入数据
let data = {
    herodata: [], //数据赋值
    msgdata: [], //消息值
    user: {},
    name: ""
}; //设置data
let wrapper = shallowMount(detail, {
    store,
    localVue,
    mocks: {
        data: data,
        $route: {
            params: {
                id: 1
            }
        },
        $router: {
            go: mockFn
        }
    }
}); //挂载节点前 放入实例和 vuex 以及data,使用 shallowMount 浅渲染，不渲染子组件


//测试 details 页面
describe("测试 details 页面", () => {

    //测试 dom 节点
    test("测试 dom 节点", () => {
        let html_ = `<div class=\"details\"><h1>王哈哈的主页</h1> <p>id：1</p> <div class=\"name\"><p>姓名</p> <div><input type=\"text\"></div> <div class=\"button\"><span>返回</span> <span>保存</span></div></div> <msg-stub msg=\"获取到英雄们\"></msg-stub></div>`;
        expect(wrapper.html()).toContain(html_); //返回预定值 说明模拟的数据正常 且created里的方法运行正常
    });
    //测试 saveUser 函数
    test("测试 saveUser 方法", () => {
        wrapper.find("div.name input").setValue("123"); //设置input 值为模拟值
        expect(wrapper.vm.name).toBe('123'); //查看属性是否跟着变化
        wrapper.findAll('div.button span').at(1).trigger("click"); //变化后点击保存
    });

    //测试 goBack 函数
    test("测试 goBack 方法", () => {
        wrapper.find('div.button span').trigger("click"); //变化后点击保存
        expect(wrapper.vm.goBack).toBeTruthy();//确保方法执行
    });
});