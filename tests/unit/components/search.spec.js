import {
    mount
} from '@vue/test-utils'
import search from '@/components/search.vue'

//测试 search 组件
describe("测试 search 组件", () => {
    let searchWrapper = mount(search, {
        propsData: {
            searchdata: [{
                id: 1,
                name: "哈哈"
            }]
        }
    });
    test("测试 search dom 节点", () => {
        let html_ = `<div class=\"search_box\"><p>英雄搜索</p> <input type=\"text\"> <div class=\"search_item\">
        哈哈
    </div></div>`;
        expect(searchWrapper.html()).toContain(html_); //断言是否符合预期结构
    });
    test("测试 searchInput 事件", () => {
        searchWrapper.setData({
            inputval: "123"
        }); //为data赋值
        expect(searchWrapper.vm.inputval).toBe("123"); //判断是否为赋值的值
        searchWrapper.find("div.search_box input").trigger("input"); //触发input事件
        expect(searchWrapper.emitted("searchInput")[0]).toEqual(['123']);
    });
    test("测试 goDetail 事件", () => {
        searchWrapper.find("div.search_box div.search_item").trigger("click"); //触发click事件
        expect(searchWrapper.emitted("goDetail")[0]).toEqual([1]);
    });
});