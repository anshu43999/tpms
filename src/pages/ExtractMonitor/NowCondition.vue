<!--  -->
<template>
<div class=''>
    <!--面包屑-->
    <breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></breadcrumb>

	<div class="condition">
		<div class="condition_title">
			<span>
				<i class="iconfont icon-lianjiezhengchang normal"></i>正常
			</span>
			<span>
				<i class="iconfont icon-lianjiezhengchang3 break"></i>链路断开
			</span>
			<span>
				<i class="iconfont icon-lianjiezhengchang2 delayed"></i>超过8小时无新警情
			</span>

		</div>

		<div class="condition_context">
			<div v-for="(item,index) in JQstate" :key="index" style="width : 12.5%; float:left;height : .57rem;text-align: center; line-height : .57rem" >  
				{{item['city']}} <i :class="[item['value'] ===1 ? 'normal icon-lianjiezhengchang':item['value'] ===2 ? 'icon-lianjiezhengchang3 break': 'icon-lianjiezhengchang2 delayed','iconfont']"></i>
			</div>
		</div>

	</div>
	<div class="wrap_list_one">
		<List :data9='data9' :data10 ='data10' :options='listOptions' style="margin-top : .25rem"></List>

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
	List,
	listheader,
	listoptions,
},
data() {
//这里存放数据
return {
    breadcrumb:{
        search:false,   
        searching:'',
	},
	listheaderOptions :{
		timeExact : false ,    //时分秒
		timeExacts : true ,   //日期
		administrate : true,  //行政区划代码
		searchInput : false ,  //接警单编号 
		manner : false, // 报警方式 
		type : 1,
	},
	// list options
    listOptions : {
		fistline : false,
		type : 4,
		czxs : false , //操作项 

	},

	data9 :[
        {city : "行政区划代码", value :"xzqh"},
        {city : "抽取总数", value :"bjl"},
        {city : "接警单数", value :"bjsj"},
		{city : "处警单数", value :"jjyxm"},
        {city : "反馈单数", value :"jjybh"},
		{city : "有效警情", value :"yxjq"},
		{city : "抽取状态", value :"telphone"},
		{city : "最后抽取时间", value :"dwdm"},
		{city : "下次抽取时间", value :"telphone"},
		
		

    ],
    data10: [
        {  xzqh: '太原市',  bjl: '太原市',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980    }, 
        {  xzqh: '太原市',  bjl: '小店区',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980    }, 
        {  xzqh: '太原市',  bjl: '迎泽区',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980    }, 
		{  xzqh: '太原市',  bjl: '杏花岭区',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980   }, 
        {  xzqh: '太原市',  bjl: '尖草坪区',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980   }, 
        {  xzqh: '太原市',  bjl: '万柏林区',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980  }, 
        {  xzqh: '太原市',  bjl: '晋源区',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980    }, 
		{  xzqh: '太原市',  bjl: '尖草坪区',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980   }, 
        {  xzqh: '太原市',  bjl: '万柏林区',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980  }, 
		{  xzqh: '太原市',  bjl: '晋源区',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980    }, 
        {  xzqh: '太原市',  bjl: '清徐县',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980    }, 
        {  xzqh: '太原市',  bjl: '阳曲县',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980    }, 
        {  xzqh: '太原市',  bjl: '娄烦县',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980    }, 
        {  xzqh: '太原市',  bjl: '古交市',  bjsj:22222,  jjyxm:23145, jjybh:2412,telphone:31231,dwdm:980    }, 

	],
	JQstate : [{city:'太原市',value : 1},{city:'大同市',value : 1},{city:'阳泉市',value : 2},{city:'长治市',value : 3},{city:'晋城市',value : 1},{city:'太原市',value : 1},{city:'太原市',value : 1},{city:'太原市',value : 1},{city:'太原市',value : 1},{city:'太原市',value : 1},{city:'太原市',value : 1},]





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

.condition{
	min-height : 1.64rem;
	.condition_title{
		height: .44rem;
		text-align: right;
		span{
			margin-left: .7rem;
			font-size: .16rem;
			
			
		}
	}
	.condition_context{
		height: 1.15rem;
		border:1px solid #dddddd;
		background-color: #fff;
	}

	.normal{
		color: #2ec536;
		margin-right: .1rem;
	}
	.break{
		color : #be1919;
		margin-right: .1rem;
	}
	.delayed{
		color :#ffc600;
		margin-right: .1rem;
	}
}
</style>