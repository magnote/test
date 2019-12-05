import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./home"
import listinfo from "./listinfo"
import testbutton from "./testbutton"


Vue.use(VueRouter)

const routes = [
  
]

const router = new VueRouter({
  routes :[
    Home,listinfo,testbutton,
    {path:"/list",component:()=>import("@/views/List")},
    {path:"/test",component:()=>import("@/views/test")},
    {path:"/write",component:()=>import("@/views/write")}
  ]
})

export default router
