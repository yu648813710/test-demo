import {
  shallowMount,
  mount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe("测试hello组件", () => {
  const wrapper = mount(HelloWorld, {
    propsData: {
      hero: [{
        id: 1,
        name: "哈哈"
      }]
    }
  });
  test('测试hello组件的dome节点渲染', () => {
    
    expect(wrapper.html()).toContain("<div class=\"hello\"><p>前列英雄</p> <div class=\"list_hero\"><div class=\"item\">哈哈</div></div></div>");
  });
  test("测试hello组件的点击事件", () => {
      wrapper.find('div.item').trigger('click');
      expect(wrapper.emitted().goDetail).toEqual([[1]]);
  })
});