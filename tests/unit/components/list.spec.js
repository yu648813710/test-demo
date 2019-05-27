import {
    mount
} from '@vue/test-utils'
import list from '@/components/list.vue'

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
        let html_ = `<div class=\"hero_list\"><h1>我的英雄</h1> <div class=\"add\"><span>英雄名称</span> <input type=\"text\"> <span class=\"button\">添加</span></div> <div class=\"list\"><div class=\"item\"><span class=\"id\">1</span> <span class=\"name\">哈哈</span> <span class=\"button\">x</span></div></div></div>`; //待对比组件
        expect(listWrapper.html()).toContain(html_); //看是否包含此字符串
    });
    test("测试 add 事件是否正常", () => {
        listWrapper.setData({
            inputval: '123'
        }); //先设置data，满足input是有值的
        expect(listWrapper.vm.inputval).toBe('123'); //input 赋值成功
        listWrapper.find("div.add span.button").trigger('click'); //触发事件，顺便会清空input的值
        expect(listWrapper.vm.inputval).toBe(''); //input 清空
        expect(listWrapper.emitted("add")[0]).toEqual(['123']); //看自定义事件是否传值为正确值
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