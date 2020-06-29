import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3bebd793 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _151ef77c = () => interopDefault(import('..\\pages\\readBlog\\index.vue' /* webpackChunkName: "pages/readBlog/index" */))
const _e1e5c7fe = () => interopDefault(import('..\\pages\\write\\index.vue' /* webpackChunkName: "pages/write/index" */))
const _3a8a38d4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3bebd793,
    name: "about"
  }, {
    path: "/readBlog",
    component: _151ef77c,
    name: "readBlog"
  }, {
    path: "/write",
    component: _e1e5c7fe,
    name: "write"
  }, {
    path: "/",
    component: _3a8a38d4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
