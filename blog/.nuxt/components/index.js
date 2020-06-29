export { default as Footer } from '../..\\components\\footer\\Footer.vue'
export { default as Header } from '../..\\components\\header\\Header.vue'
export { default as HomeItem } from '../..\\components\\homeItem\\HomeItem.vue'
export { default as Tool } from '../..\\components\\tool\\Tool.vue'

export const LazyFooter = import('../..\\components\\footer\\Footer.vue' /* webpackChunkName: "components_footer/Footer'}" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\header\\Header.vue' /* webpackChunkName: "components_header/Header'}" */).then(c => c.default || c)
export const LazyHomeItem = import('../..\\components\\homeItem\\HomeItem.vue' /* webpackChunkName: "components_homeItem/HomeItem'}" */).then(c => c.default || c)
export const LazyTool = import('../..\\components\\tool\\Tool.vue' /* webpackChunkName: "components_tool/Tool'}" */).then(c => c.default || c)
