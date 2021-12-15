//定义插件，插件方法必须install，启动程序自动调用install
export default {
    install(Vue){
        console.log("插件调用")
        console.log(Vue)

        //全局过滤器
        Vue.filter("slice",function(value){
            return value.slice(0,4)
        })

        //全局自定义指令
        Vue.directive("fbind",{
            bind(element,binding){
                element.value = binding.value
            },
           
            inserted(element,binding){
                element.focus()
            },
            
            update(element,binding){
                element.value = binding.value
            }
        })
        //全局混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:100
                }
            }
        })
        //全局定义一个方法
        Vue.prototype.hello = () => {alert("你好啊")}

        //凡是可以使用Vue的都可以使用插件
    }
}