<!--  -->
<template>
<div class='' style="width:100%">
    <!--面包屑-->
    <breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></breadcrumb>
	<!-- list header -->
	<listheader :listheaderOptions='listheaderOptions'></listheader>

	<span class="withdraw">
		点击收回
	</span>

	<div class="table_wrap">
		<div class="options">
			<ul>
				<li><i class="iconfont icon-daochu"></i>                                                                            导出</li>
				<li><i class="iconfont icon-dayin"></i>                                                                            打印</li>
				<li><i class="iconfont icon-shuaxin"></i>                                                                            刷新</li>
			</ul>

		</div>	
		<div class="list_context">
			<p>山西省太原市数据抽取系统接警处理统计</p>
			<div class="list_time">
				<div class="times">统计时段：2019.06.2 00:00:00—2019.06.26 13:24:14</div>

				<div class="printTime">打印时间：2019.06.26  13:24:18</div>
			</div>

			<List :data9='data9' :data10 ='data10' :options='listOptions' style="margin-top : .25rem"></List>


		</div>

	</div>


</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import List from '@/components/common/action/list.vue'
import Breadcrumb from '@/components/common/action/Breadcrumb.vue';
import listheader from '@/components/common/action/listheader.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
	Breadcrumb,
	List,
	listheader
},
data() {
//这里存放数据
return {
    breadcrumb:{
        search:false,   
        searching:'',
	},
	pickerOptions: {
		
	},
	value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
	value2: '',
	input: '',

	options: [
		{
          value: '选项1',
          label: '黄金糕'
		}, 
		{
          value: '选项2',
          label: '双皮奶'
		}, 
		{
          value: '选项3',
          label: '蚵仔煎'
		}, 
		{
          value: '选项4',
          label: '龙须面'
		}, 
		{
          value: '选项5',
          label: '北京烤鸭'
	}],
	value: '',
	data9 :[
        {city : "行政区划代码", value :"xzqh"},
        {city : "报警量", value :"bjl"},
        {city : "报警求助、举报投诉", value :"bjqz"},
        {city : "处警反馈", value :"cjfk"},
        {city : "信息咨询", value :"xxzx"},
        {city : "重复报警", value :"zfbj"},
        {city : "骚扰电话", value :"srdh"},
        {city : "系统测试", value :"xtcs"},
        {city : "其他来话类型", value :"qita"},
    ],
    data10: [
        { classify: '太原市', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
        { classify: '小店区', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
        { classify: '迎泽区', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
		{ classify: '杏花岭区', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
        { classify: '尖草坪区', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
        { classify: '万柏林区', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
        { classify: '晋源区', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
        { classify: '清徐县', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
        { classify: '阳曲县', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
        { classify: '娄烦县', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 
        { classify: '古交市', xzqh: 6666,  bjl: 8888,  bjqz:22222,  cjfk:23145,    xxzx:23145, zfbj:23145, srdh:23145,xtcs:23145,qita:23145 }, 

	],
	// listheader Options
	listheaderOptions :{
		timeExact : true ,    //时分秒
		timeExacts : false ,   //日期
		administrate : true,  //行政区划代码
		searchInput : false   //接警单编号 
	},

	// list options
    listOptions : {
		fistline : false

    }


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
	.options{
		height: .75rem;
		overflow: hidden;
		border-bottom:1px solid #dddddd; 
		line-height: .75rem;
		ul{
			margin-top:.225rem; 
			height: .3rem;
			margin-left:.23rem; 
			li{
				cursor: pointer;
				float: left;
				width: .85rem;
				height: .3rem;
				line-height: .3rem;
				background: linear-gradient(to right, rgba(34,63,153,1), rgba(36,41,111,1)); /* 标准的语法 */
				border-radius: 4px;
				margin-right:.2rem; 
				text-align: center;
				color: #ffffff;
			}
		}
	}
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