<!--  -->
<template>
<div class='wrap_list_one'>
    <!--面包屑-->
    <breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></breadcrumb>
    
    <listheader :listheaderOptions='listheaderOptions'></listheader>
    <span class="withdraw">
		点击收回
	</span>


    <div class="wrap_list_one">
        <List :data9='data9' :data10 ='data10' :options='listOptions' style="margin-top : .25rem"></List>
    </div>


</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Breadcrumb from '@/components/common/action/Breadcrumb.vue';
import listheader from '@/components/common/action/listheader.vue';
import List from '@/components/common/action/list.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Breadcrumb,
    listheader,
    List
},
data() {
//这里存放数据
return {
    breadcrumb:{
        search:false,   
        searching:'',
    },
    // listheader Options
	listheaderOptions :{
        timeExact : false ,    //时分秒
        timeExacts : true ,   //日期
        administrate : true,  //行政区划代码
        searchInput : false ,  //接警单编号 
        manner : true, // 报警方式 
        type : 1,

    },


	// list options
    listOptions : {
		fistline : false,
        czxs : false , //操作项 
        type : 4,
    },
    data9 :[
        {city : "行政区划代码", value :"xzqh"},
        {city : "接警单编号", value :"bjl"},
        {city : "检查日期", value :"bjqz"},
        {city : "错误描述", value :"cjfk"},
    ],
    data10: [
        {  xzqh: '太原市',  bjl: 8888,  bjqz:22222,  cjfk:23145,    }, 
        {  xzqh: '太原市',  bjl: 8888,  bjqz:22222,  cjfk:23145,    }, 
        {  xzqh: '太原市',  bjl: 8888,  bjqz:22222,  cjfk:23145,    }, 
		{  xzqh: '太原市',  bjl: 8888,  bjqz:22222,  cjfk:23145,   }, 
        {  xzqh: '太原市',  bjl: 8888,  bjqz:22222,  cjfk:23145,   }, 
        {  xzqh: '太原市',  bjl: 8888,  bjqz:22222,  cjfk:23145,  }, 
        {  xzqh: '太原市',  bjl: 8888,  bjqz:22222,  cjfk:23145,    }, 


	],


};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    searchingfor(searching,page){
  		page?page:1;
  		this.searchText=searching;
		console.log(this.searchText);
  		var params = {};
		params.phoneNumberOralarmNumber = this.searchText;
		params.ruKuSampleState = 2
		params.fenxiaoyangSampleState = 3
		params.rank = 'sampleNum'
  	},

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

.withdraw{
	color: #ffffff;
	width: 100%;
	display: block;
	background-color: #c2d8ff;
	height: .3rem;
	line-height: .3rem;
	text-align: center;
	margin: 0 auto;
	cursor: pointer;
}
</style>