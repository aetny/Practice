import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
//全局引入vue  给vue全局定义，全局添加属性，导出vue
initGlobalAPI(Vue)
//了解vue实例化做了什么？入口文件 src/core/index.js
//为vue.prototype定义动态的属性
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {//获取到相关的值
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
//为vue添加属性，其值是多少 创建对象，添加属性
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})
//版本
Vue.version = '__VERSION__'
//给vue导出
export default Vue
