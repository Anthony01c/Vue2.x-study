(function (window){
    //定义插件对象
    const MyPlugin = {}

    //所有的插件对象都必须有一个install方法
    MyPlugin.install = function (Vue, options) {
        console.log('install')
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
            // 逻辑...

            console.log('myGlobalMethod')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive',(el,binding)=>{
            el.innerHTML = binding.value + '自定义'
        })


        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
            console.log('$myMethod执行')
        }
    }

    //暴露插件对象
    window.MyPlugin = MyPlugin
})(window)