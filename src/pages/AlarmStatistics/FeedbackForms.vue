<!--  -->
<template>
<div class=''>
    <!--面包屑-->
    <breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></breadcrumb>

	<listheader :listheaderOptions='listheaderOptions'></listheader>

	<span class="withdraw">
		点击收回
	</span>


	<div class="table_wrap">
		<listoptions></listoptions>
		<div class="list_context">
			<p>山西省太原市数据抽取系统接警处理统计</p>
			<div class="list_time">
				<div class="times">统计时段：2019.06.2 00:00:00—2019.06.26 13:24:14</div>

				<div class="printTime">打印时间：2019.06.26  13:24:18</div>
			</div>
			<div class="wrap_list_one">
				<List :data9='data9' :data10 ='data10' :options='listOptions' style="margin-top : .25rem"></List>
			</div>
		</div>
	</div>



</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import List from '@/components/common/action/list.vue'
import Breadcrumb from '@/components/common/action/Breadcrumb.vue';
import listheader from '@/components/common/action/listheader.vue';
import listoptions from '@/components/common/action/listoptions.vue';
export default {
//import引入的组件需要注入到对象中才能使用
components: {
	Breadcrumb,
	listheader,
	List,
	listoptions,
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
		timeExact : true ,    //时分秒
		timeExacts : false ,   //日期
		administrate : true,  //行政区划代码
		searchInput : false,   //接警单编号 
		manner : false, // 报警方式 
		type : 1,
	},
	// list options
    listOptions : {
		fistline : false,
		type : 2,

    },
	data9 :[
        {city : "行政区划代码", value :"xzqh"},
        {city : "报警总数", value :"bjzs"},
        {city : "有效警情", value :[{city:'数量',value : 'yxnum' },{city:'比例',value : 'yxbili' } ]},
        {city : "处警情况", value :[{city:'数量',value : 'cjnum' },{city:'比例',value : 'cjbili' } ]},
        {city : "反馈情况", value :[{city:'数量',value : 'fknum' },{city:'比例',value : 'fkbili' } ]},
    ],
    data10: [
        { xzqh: '太原市', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145}, 
        { xzqh: '小店区', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145 }, 
        { xzqh: '迎泽区', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145 }, 
		{ xzqh: '杏花岭区', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145}, 
        { xzqh: '尖草坪区', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145}, 
        { xzqh: '万柏林区', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145}, 
        { xzqh: '晋源区', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145,}, 
        { xzqh: '清徐县', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145 }, 
        { xzqh: '阳曲县', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145 }, 
        { xzqh: '娄烦县', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145}, 
        { xzqh: '古交市', bjzs: 6666,  yxnum: 8888,  yxbili:22222,  cjnum:23145,    cjbili:23145, fknum:23145, fkbili:23145, }, 

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

.table_wrap{
	width: 100%;
	border: 1px solid #dddddd;
	margin-top:.24rem; 
	margin-bottom:.28rem; 
	min-height: 7.41rem;

	.list_context{
		
		p{
			font-size: .24rem;
			line-height: .72rem;
			text-align: center;
		}
	}
	.list_time{
		height: 0.2rem;
		padding: 0 .24rem;
		.times{
			float: left;

		}
		.printTime{
			float:right;
		}
	}


}
</style>