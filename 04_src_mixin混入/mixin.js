//混合：当一些vue配置项在多个组件当中一摸一样时，可以使用混合，把代码写到一个文件中，再引入该文件，配置mixins配置项就可以使用其中的代码
export const mixin = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted(){
        console.log("你好啊！")
    }

}