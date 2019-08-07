import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
//定义vue构造函数，
function Vue (options) {//判断不是生产环境且不是vue实例  options是对象，{el:'#my',data:{},methods:{}}
  if (process.env.NODE_ENV !== 'production' &&//process.env.NODE_ENV node对象的写法
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')//警告
  }
  this._init(options)//初始化 this表示当前的vue的实例
}

initMixin(Vue)//mixin是混合 表示扩展和增强 _init方法在这里找
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
//入口文件 src/core/index.js 
//  vue对象 instance/index.js 
//     this._init(options) 构造函数里没有相关的init方法 _init方法是initMixin的方法属性 属于vue初始化扩展增强的
//      initMixin(vue) 对vue每一个特性都要初始化处理
        // initLifecycle(vm) //生命周期
        // initEvents(vm) //event事件
        // initRender(vm) //渲染
        // callHook(vm, 'beforeCreate') //创建前钩子函数 回调
        // initInjections(vm) // resolve injections before data/props 拦截器
        // initState(vm) //状态
        // initProvide(vm) // resolve provide after data/props 提供者
        // callHook(vm, 'created') //创建完成后 回调
        