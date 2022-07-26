import { shallowMount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'

describe('Foo', () => {
    it('renders Foo', () => {
        const Wrapper = shallowMount(Foo)
        console.log(Wrapper.classes()) //['jest']
        console.log(Wrapper.classes('jest')) //true
        console.log(Wrapper.find('.name').text()) // 切记如果是类的话，要加点  ： 啦啦
        console.log(Wrapper.findAll('.name')) //返回dom数组  WrapperArray { selector: '.name' }
        console.log(Wrapper.findAll('.name').at(0)) //取dom数组中的第一个
        Wrapper.setData({ text: 3 }) //  设置一个值 
        console.log(Wrapper.vm.text) // 3
        Wrapper.setProps({ name: "拉拉" })
        console.log(Wrapper.vm.name) //这个结果仍 为 啦啦啦
        Wrapper.find('.text').trigger("click")
        console.log(Wrapper.vm.text) // 4
        expect(Wrapper.vm.text).toBe(4)
    })
})