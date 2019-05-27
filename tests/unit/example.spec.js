import {
  shallowMount,
  mount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import list from '@/components/list.vue'
import msg from '@/components/msg.vue'
import search from '@/components/search.vue'
//测试第一个hello组件
describe("测试hello组件", () => {
  //在组件挂载前模拟数据放入props
  const wrapper = mount(HelloWorld, {
    propsData: {
      hero: [{
        id: 1,
        name: "哈哈"
      }]
    }
  });
  test('测试hello组件的dome节点渲染', () => {
    let html_ = "<div class=\"hello\"><p>前列英雄</p> <div class=\"list_hero\"><div class=\"item\">哈哈</div></div></div>"; //待对比组件
    expect(wrapper.html()).toContain(html_); //看是否包含此字符串
  });
  test("测试hello组件的点击事件", () => {
    wrapper.find('div.item').trigger('click'); //寻找节点触发点击事件
    expect(wrapper.emitted().goDetail).toEqual([
      [1]
    ]); //触发事件后看自定义事件是否有正常返回值
  })
});

//测试list组件
describe("测试list组件", () => {
  const listWrapper = mount(list, {
    propsData: {
      listHero: [{
        id: 1,
        name: "哈哈"
      }]
    }
  });
  test("测试list的dom节点", () => {
    let html_ = "<div class=\"hero_list\"><h1>我的英雄</h1> <div class=\"add\"><span>英雄名称</span> <input type=\"text\"> <span class=\"button\">添加</span></div> <div class=\"list\"><div class=\"item\"><span class=\"id\">1</span> <span class=\"name\">哈哈</span> <span class=\"button\">x</span></div></div></div>"; //待对比组件
    expect(listWrapper.html()).toContain(html_); //看是否包含此字符串
  });
  test("测试 add 事件是否正常", () => {
    listWrapper.setData({
      inputval: '123'
    }); //先设置data，满足input是有值的
    expect(listWrapper.vm.inputval).toBe('123'); //input 赋值成功
    listWrapper.find("div.add span.button").trigger('click'); //触发事件，顺便会清空input的值
    expect(listWrapper.vm.inputval).toBe(''); //input 清空
    expect(listWrapper.emitted("add")[0]).toEqual(['123']);//看自定义事件是否传值为正确值
  });
  test("测试 goDetail 事件是否正常", () => {
    listWrapper.find("div.list div.item").trigger('click'); //触发事件
    expect(listWrapper.emitted("goDetail")[0]).toEqual([1]); //看自定义事件是否传值为正确值
  });
  test("测试 deletelist 事件是否正常", () => {
    listWrapper.find("div.list div.item span.button").trigger('click'); //触发事件
    expect(listWrapper.emitted("deletelist")[0]).toEqual([1]); //看自定义事件是否传值为正确值
  });
})


//测试 msg 组件
describe("测试 msg 组件",()=>{
 let msgWrapper=mount(msg,{
    propsData:{
      msg:["获取到英雄们"]
    }
  });
  test("测试 msg 组件dom",()=>{
    let html_=`<div class=\"msg_box\"><p>消息板</p> <button>清除</button> <div class=\"msg_item\"><p>
            英雄服务:获取到英雄们
        </p></div></div>`;
    expect(msgWrapper.html()).toContain(html_);
  });
  test("测试 clearMsg 事件是否触发",()=>{
    msgWrapper.find("div.msg_box button").trigger("click");//触发按钮事件
    expect(msgWrapper.emitted('clearMsg')).toBeTruthy();//因为没有传值，所以直接断定他是否触发就行
  });
});

//测试 search 组件
describe("测试 search 组件",()=>{
  let searchWrapper=mount(search,{
    propsData:{
      searchdata:[{
        id: 1,
        name: "哈哈"
      }]
    }
  });
  test("测试 search dom 节点",()=>{
    let html_=`<div class=\"search_box\"><p>英雄搜索</p> <input type=\"text\"> <div class=\"search_item\">
        哈哈
    </div></div>`;
    expect(searchWrapper.html()).toContain(html_);//断言是否符合预期结构
  });
  test("测试 searchInput 事件",()=>{
    searchWrapper.setData({inputval:"123"});//为data赋值
    expect(searchWrapper.vm.inputval).toBe("123");//判断是否为赋值的值
    searchWrapper.find("div.search_box input").trigger("input");//触发input事件
    expect(searchWrapper.emitted("searchInput")[0]).toEqual(['123']);
  });
  test("测试 goDetail 事件",()=>{
    searchWrapper.find("div.search_box div.search_item").trigger("click");//触发click事件
    expect(searchWrapper.emitted("goDetail")[0]).toEqual([1]);
  });
});


