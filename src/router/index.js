import Vue from 'vue'
import Router from 'vue-router'
// import join from 'path'
import project from '../../project.json'
import mainRoutes from './mainRoutes'

Vue.use(Router)
// debugger
const router = new Router({
  base: `/${project.context}/`,
  routes: format([...mainRoutes])
})

function format(routes) {
  return routes.map(item => { // map方法返回一个新数组，数组中的元素为原始数组元素处理后的值
    const result = { ...item }
    const { children, redirect, path } = result
    console.log('children after 解构: ', children)
    console.log('redirect after 解构: ', redirect)
    console.log('path after 解构: ', path)
    if (children) {
      if (!redirect) {
        console.log('path here: ', path)
        console.log('children[0].path here: ', children[0].path)
        result.redirect =
          // join(path, children[0].path)
          `${path}/${children[0].path}`
        console.log('redirect: ', redirect)
      }
      result.children = format(children)
    }
    console.log('result: ', result)
    return result
  })
}
export default router
