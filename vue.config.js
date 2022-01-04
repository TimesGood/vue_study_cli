// 该文件要么不创建，要么就基本配置都加
// 该配置项可在Vue官网查阅
module.exports = {
    pages: {
        index: {
            // 程序入口
            entry: 'src/main.js'
        },
    },
    lintOnSave:false,// 关闭语法检查
    //开启代理服务器（方式一），这种方式优先匹配前端资源，当前端有需要的资源时，就不会请求后端
    // devServer: {
    //     proxy: "http://localhost:8080"
    // },
    //开启代理服务器（方式二），这种方式优先匹配后端资源
    devServer: {
        //当请求前缀满足自己配置的前缀时，走代理，在端口号之后加上自己配置的前缀即可
        proxy: {
            "/proxyPrefix": {
                target: "http://localhost:8080",
                pathRewrite: {"^/proxyPrefix":""},//匹配请求过来的路径字符把该字符替换
                // ws: true,//用于支持websocket
                changeOrigin: true//是否伪装，默认false例：自己http://localhost:8081，后端http://localhost:8080，开启伪装时，会把后端地址给服务器，不开启时，给自己真实的地址
            },
            //可配置多个
            // "foo": {
            //     target: "http://localhost:8080",
            // }
        }
    }
}