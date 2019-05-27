import {
    mount
} from '@vue/test-utils'
import msg from '@/components/msg.vue'

//测试 msg 组件
describe("测试 msg 组件", () => {
    let msgWrapper = mount(msg, {
        propsData: {
            msg: ["获取到英雄们"]
        }
    });
    test("测试 msg 组件dom", () => {
        let html_ = `<div class=\"msg_box\"><p>消息板</p> <button>清除</button> <div class=\"msg_item\"><p>
            英雄服务:获取到英雄们
        </p></div></div>`;
        expect(msgWrapper.html()).toContain(html_);
    });
    test("测试 clearMsg 事件是否触发", () => {
        msgWrapper.find("div.msg_box button").trigger("click"); //触发按钮事件
        expect(msgWrapper.emitted('clearMsg')).toBeTruthy(); //因为没有传值，所以直接断定他是否触发就行
    });
});