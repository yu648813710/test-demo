import {
    mount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
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
        let html_ = `<div class=\"hello\"><p>前列英雄</p> <div class=\"list_hero\"><div class=\"item\">哈哈</div></div></div>`; //待对比组件
        expect(wrapper.html()).toContain(html_); //看是否包含此字符串
    });
    test("测试hello组件的点击事件", () => {
        wrapper.find('div.item').trigger('click'); //寻找节点触发点击事件
        expect(wrapper.emitted().goDetail).toEqual([
            [1]
        ]); //触发事件后看自定义事件是否有正常返回值
    })
});