import Vue from "vue";
import Router from "vue-router"
import Index  from "../pages/index"
import Login from "../pages/login"
import Layout from "../components/common/layout/Layout"

Vue.use(Router)



const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


let router = new Router({
    routes : [
        { 
            path : "/",
            redirect: '/index',
            meta : {title :  "首页"}
        },
        {
            path : "/login",
            name : "登录",
            component : Login,
            meta : { title : "登录"}
        },
        {
            path: '/index',
            component: Layout,
            redirect: '/index/home',
            children : [
                {
                    path: "home",
                    name: '首页',
                    component: () => import("../pages/home"),
                },
                // 警情查询
                {
                    path : "AlarmQuery",
                    name : "警情查询",
                    component: () => import("../pages/AlarmQuery/Synthesis"),
                    redirect: 'AlarmQuery/Synthesis',
                },
                {
                    path: "AlarmQuery/Synthesis",
                    name: "警情查询/综合单查询",
                    component: () => import("../pages/AlarmQuery/Synthesis"),
                    meta: { needAuth: '综合单查询' },
                },
                {
                    path: "AlarmQuery/Alarm",
                    name: "警情查询/接警单查询",
                    component: () => import("../pages/AlarmQuery/Alarm"),
                    meta: { needAuth: '接警单查询' },
                },
                {
                    path: "AlarmQuery/Dispose",
                    name: "警情查询/处警单查询",
                    component: () => import("../pages/AlarmQuery/Dispose"),
                    meta: { needAuth: '处警单查询' },
                },
                {
                    path: "AlarmQuery/Feedback",
                    name: "警情查询/反馈单查询",
                    component: () => import("../pages/AlarmQuery/Feedback"),
                    meta: { needAuth: '反馈单查询' },
                },
                {
                    path: "AlarmQuery/ExtractQuery",
                    name: "警情查询/抽取情况查询",
                    component: () => import("../pages/AlarmQuery/ExtractQuery"),
                    meta: { needAuth: '抽取情况查询' },
                },
                {
                    path: "AlarmQuery/NotQualified",
                    name: "警情查询/不合格数据查询",
                    component: () => import("../pages/AlarmQuery/NotQualified"),
                    meta: { needAuth: '不合格数据查询' },
                },
                // 警情统计
                {
                    path : "AlarmStatistics",
                    name : "AlarmStatistics",
                    component: () => import("../pages/AlarmStatistics/AlarmType"),
                    redirect: 'AlarmStatistics/AlarmType',
                },
                {
                    path: "AlarmStatistics/AlarmType",
                    name: "警情统计/接警处理类型统计",
                    component: () => import("../pages/AlarmStatistics/AlarmType"),
                    meta: { needAuth: '接警处理类型统计 ' },
                },
                {
                    path: "AlarmStatistics/AlarmKind",
                    name: "警情统计/警种报警情况统计",
                    component: () => import("../pages/AlarmStatistics/AlarmKind"),
                    meta: { needAuth: '警种报警情况统计 ' },
                },
                {
                    path: "AlarmStatistics/FeedbackForms",
                    name: "警情统计/处警反馈情况统计表",
                    component: () => import("../pages/AlarmStatistics/FeedbackForms"),
                    meta: { needAuth: '处警反馈情况统计表 ' },
                },
                {
                    path: "AlarmStatistics/ExtractForms",
                    name: "警情统计/数据抽取情况统计表",
                    component: () => import("../pages/AlarmStatistics/ExtractForms"),
                    meta: { needAuth: '数据抽取情况统计表 ' },
                },
                {
                    path: "AlarmStatistics/ThreeType",
                    name: "警情统计/警情三级分类统计",
                    component: () => import("../pages/AlarmStatistics/ThreeType"),
                    meta: { needAuth: '警情三级分类统计 ' },
                },
                {
                    path: "AlarmStatistics/Address",
                    name: "警情统计/案发地址类别统计",
                    component: () => import("../pages/AlarmStatistics/Address"),
                    meta: { needAuth: '案发地址类别统计 ' },
                },
                {
                    path: "AlarmStatistics/Distribute",
                    name: "警情统计/警情分布情况统计",
                    component: () => import("../pages/AlarmStatistics/Distribute"),
                    meta: { needAuth: '警情分布情况统计 ' },
                },
                // 抽取监控 

                {
                    path : "ExtractMonitor",
                    name : "ExtractMonitor",
                    component: () => import("../pages/ExtractMonitor/ExtractState"),
                    redirect: 'ExtractMonitor/ExtractState',
                },
                {
                    path: "ExtractMonitor/ExtractState",
                    name: "抽取监控/抽取状态",
                    component: () => import("../pages/ExtractMonitor/ExtractState"),
                    meta: { needAuth: '抽取状态 ' },
                },
                {
                    path: "ExtractMonitor/NowCondition",
                    name: "抽取监控/当前抽取情况",
                    component: () => import("../pages/ExtractMonitor/NowCondition"),
                    meta: { needAuth: '当前抽取情况 ' },
                },
                {
                    path: "ExtractMonitor/SumStatistics",
                    name: "抽取监控/各市数据汇总情况统计",
                    component: () => import("../pages/ExtractMonitor/SumStatistics"),
                    meta: { needAuth: '各市数据汇总情况统计 ' },
                },

                // 统计报表
                {
                    path : "StatisticsForms",
                    name : "StatisticsForms",
                    component: () => import("../pages/StatisticsForms/JQStatistics"),
                    redirect: 'StatisticsForms/JQStatistics',
                },
                {
                    path: "StatisticsForms/JQStatistics",
                    name: "统计报表/警情统计表",
                    component: () => import("../pages/StatisticsForms/JQStatistics"),
                    meta: { needAuth: '警情统计表 ' },
                },
                {
                    path: "StatisticsForms/JQThread",
                    name: "统计报表/数据质量考核",
                    component: () => import("../pages/StatisticsForms/JQThread"),
                    meta: { needAuth: '数据质量考核 ' },
                },
                {
                    path: "StatisticsForms/AlarmStatistics",
                    name: "统计报表/考核情况统计",
                    component: () => import("../pages/StatisticsForms/AlarmStatistics"),
                    meta: { needAuth: '考核情况统计 ' },
                },
                // 规范考核
                {
                    path : "standardAssess",
                    name : "standardAssess",
                    component: () => import("../pages/standardAssess/dataSize"),
                    redirect: 'standardAssess/dataSize',
                },
                {
                    path: "standardAssess/dataSize",
                    name: "规范考核/数据质量考核",
                    component: () => import("../pages/standardAssess/dataSize"),
                    meta: { needAuth: '数据质量考核 ' },
                },
                {
                    path: "standardAssess/assessCase",
                    name: "规范考核/考核情况统计",
                    component: () => import("../pages/standardAssess/assessCase"),
                    meta: { needAuth: '考核情况统计 ' },
                },
                // 系统维护
                {
                    path : "systemMaintain",
                    name : "systemMaintain",
                    component: () => import("../pages/systemMaintain/indexSet"),
                    redirect: 'systemMaintain/indexSet',
                },
                {
                    path: "systemMaintain/indexSet",
                    name: "系统维护/首页重大警情设置",
                    component: () => import("../pages/systemMaintain/indexSet"),
                    meta: { needAuth: '首页重大警情设置 ' },
                },
                {
                    path: "systemMaintain/dataAssess",
                    name: "系统维护/数据考核条件设置",
                    component: () => import("../pages/systemMaintain/dataAssess"),
                    meta: { needAuth: '数据考核条件设置 ' },
                },
                {
                    path: "systemMaintain/userJurisdiction",
                    name: "系统维护/用户权限管理",
                    component: () => import("../pages/systemMaintain/userJurisdiction"),
                    meta: { needAuth: '用户权限管理 ' },
                },
                {
                    path : "systemMaintain/userPreserve",
                    name : "系统维护/用户维护",
                    component: () => import("../pages/systemMaintain/userPreserve"),
                    meta: { needAuth: '用户维护 ' },
                },
                {
                    path : "systemMaintain/unitsPreserve",
                    name : "系统维护/单位维护",
                    component: () => import("../pages/systemMaintain/unitsPreserve"),
                    meta: { needAuth: '单位维护 ' },
                },



            ]
        }
    ]
})


router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        // document.title = to.meta.title;
    }
    next();
});


export default router