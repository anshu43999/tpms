<!--  -->
<template>
<div class=''>
    <!--面包屑-->
    <breadcrumb :breadcrumb="breadcrumb" v-on:searchingfor="searchingfor"></breadcrumb>
    

    <listheader :listheaderOptions='listheaderOptions'></listheader>
    <span class="withdraw">
		点击收回
	</span>

    <div class="echarts_wrap">
		<div class="echarts_title" style="text-aglin : center">总合格率</div>
		<div id="area" style="width: 100%;height: 3.12rem">

		</div>

	</div>

    <div class="table_wrap">
		<div class="list_context wrap_list_one">
			<List :data9='data9' :data10 ='data10' :options='listOptions' ></List>
		</div>
	</div>





</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let echarts = require('echarts/lib/echarts')
// 引入折线图图组件
require('echarts/lib/chart/line')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入柱饼图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require("echarts/lib/component/legend")
require("echarts/lib/component/title");
require("echarts/lib/component/dataZoom");
require("echarts/lib/component/toolbox");


import List from '@/components/common/action/list.vue'
import Breadcrumb from '@/components/common/action/Breadcrumb.vue';
import listheader from '@/components/common/action/listheader.vue';
import listoptions from '@/components/common/action/listoptions.vue';
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    List,
    Breadcrumb,
    listheader,
    listoptions

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
		type : 1,
		czxs : false , //操作项 

	},

	data9 :[
        {city : "行政区划代码", value :"xzqh"},
        {city : "接警单数", value :"jqds"},
        {city : "不合接警数", value :"bhgjj"},
		{city : "处警单总数", value :"cjdzs"},
        {city : "不合格处警数", value :"bhgcjs"},
		{city : "反馈单数", value :"fkds"},
		{city : "抽取总数", value :"cqzs"},
		{city : "不合格反馈数", value :"bhgfks"},
		{city : "总合格率", value :"zhgl"},
		
		

    ],
    data10: [
        {  xzqh: '太原市',  jqds: '太原市',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,  fkds:1111,cqzs:241,bhgfks:211,zhgl:123}, 
        {  xzqh: '太原市',  jqds: '小店区',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,  fkds:1111,cqzs:241,bhgfks:211,zhgl:123  }, 
        {  xzqh: '太原市',  jqds: '迎泽区',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,  fkds:1111,cqzs:241,bhgfks:211,zhgl:123  }, 
		{  xzqh: '太原市',  jqds: '杏花岭区',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,fkds:1111,cqzs:241,bhgfks:211,zhgl:123   }, 
        {  xzqh: '太原市',  jqds: '尖草坪区',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,fkds:1111,cqzs:241,bhgfks:211,zhgl:123  }, 
        {  xzqh: '太原市',  jqds: '万柏林区',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,fkds:1111,cqzs:241,bhgfks:211,zhgl:123 }, 
        {  xzqh: '太原市',  jqds: '晋源区',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,  fkds:1111,cqzs:241,bhgfks:211,zhgl:123 }, 
		{  xzqh: '太原市',  jqds: '尖草坪区',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,  fkds:1111,cqzs:241,bhgfks:211,zhgl:123}, 
        {  xzqh: '太原市',  jqds: '万柏林区',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412, fkds:1111,cqzs:241,bhgfks:211,zhgl:123 }, 
		{  xzqh: '太原市',  jqds: '晋源区',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,  fkds:1111,cqzs:241,bhgfks:211,zhgl:123 }, 
        {  xzqh: '太原市',  jqds: '清徐县',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,  fkds:1111,cqzs:241,bhgfks:211,zhgl:123 }, 
        {  xzqh: '太原市',  jqds: '阳曲县',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,  fkds:1111,cqzs:241,bhgfks:211,zhgl:123}, 
        {  xzqh: '太原市',  jqds: '娄烦县',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,  fkds:1111,cqzs:241,bhgfks:211,zhgl:123 }, 
        {  xzqh: '太原市',  jqds: '古交市',  bhgjj:22222,  cjdzs:23145, bhgcjs:2412,   fkds:1111,cqzs:241,bhgfks:211,zhgl:123 }, 

    ],
    data1: [
        {city: '太原市',value: 22},
        {city: '清徐县', value: 54 },
        {city: '阳曲县',value: 50},
        {city: '娄烦县',value: 29},
        {city: '古交市', value: 30}
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
    echarts1(value) {
        console.log(this.data1)
        let cityArr = [];//声明存放城市的数组
        let valueArr = []; //声明存放数据的数组area
        let mycharts = echarts.init(document.getElementById(value)); //echarts初始化
        // mycharts.resize();
        // let mycharts = echarts.init(this.$refs.area); //echarts初始化
        //把data1的数据分开放在城市和数据的数组里
        let array_one = [];
        if(value == 'area'){
            this.data1.forEach(function (value) {
                cityArr.push(value.city);
                valueArr.push(value.value);
                array_one.push(100)
            });
        }else if(value == 'area2'){
            this.data111.forEach(function (value) {
                cityArr.push(value.city);
                valueArr.push(value.value);
                array_one.push(100)
            });
        };   


        //配置项
        let option = {
            backgroundColor: '#fff',
            //x轴
            xAxis: [
                {
                    //类目轴
                    type: 'category',
                    //x轴数据来源
                    data: cityArr,
                    //x坐标轴字体设置
                    axisLabel: {
                        //显示
                        show: true,
                        //字体大小
                        fontSize: 14,
                        //字体颜色
                        color: '#333',
                    },
                    //x轴轴线设置
                    axisLine: {
                        //不显示
                        show:false
                    },
                    axisTick: {
                        show: false
                    }
                }],
            //y轴
            yAxis: [
                //两个y轴，一个正常的，一个背景的
                //如果用一个y轴并且不设置y轴最大值的话需要知道y轴的最大值，但是y轴会随着数据变化，所以设置两个y轴
                //负责背景的就是固定的100
                //或者设置y轴最大值，把最大值放在背景的数据数组里
                {
                    //展示数值的轴
                    type: 'value',
                    name:'',
                    nameTextStyle:{
                        color : '#333333',
                    },
                    nameGap:10,
                    //数值间隔
                    interval: 20,
                    max:100,
                    //y轴字体设置
                    axisLabel: {
                        show: true,
                        fontSize: 14,
                        color: '#333',
                        formatter: '{value} %'  
                    },
                    show: true,
                    //y轴轴线设置
                    axisLine: {
                        //不现实
                        show:false
                    },
                    //y轴分隔线设置
                    splitLine: {
                        //不显示
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }, {
                    axisLabel: {
                        show: false
                    },
                    //y轴轴线设置
                    axisLine: {
                        show: false
                    },
                    //y轴分隔线设置
                    splitLine: {
                        //不显示
                        show: false
                    },
                    //y轴刻度设置
                    axisTick: {
                        show: false
                    }
                }
            ],
            //图表的设置
            series: [
                {
                    //表名
                    name: '今日警情地域分布',
                    //图表类型：柱状图
                    type: 'bar',
                    //柱子宽度
                    barWidth: '15%',
                    //数据来源，一般是数值的数组
                    data: valueArr,
                    //柱子样式
                    itemStyle: {
                        //正常显示的样式
                        normal: {
                            //柱子上面数值的设置
                            label: {
                                //开启显示
                                show: true,
                                //在上方显示
                                position: 'top',
                                //数值样式
                                textStyle: {
                                    //数值渐变使用数组
                                    color: ['#00a0a3', '#0054a2'],
                                    fontSize: 12
                                }
                            },
                            //柱子渐变
                            color: new echarts.graphic.LinearGradient(
                                //右，下，左，上
                                0, 0, 0, 1, [{
                                    //0%位置的颜色
                                    offset: 0,
                                    color: '#00a0a3'
                                },
                                    {
                                        //100%位置的颜色
                                        offset: 1,
                                        color: '#0054a2'
                                    }
                                ]
                            )
                        }
                    },
                    //层级设置
                    zlevel: 1,
                },
                //背景柱子的设置
                // {
                //     name: '背景',
                //     type: 'bar',
                //     barWidth: '50%',
                //     //设置柱子以哪个y轴位准，1表示第二个y轴，即y轴设置中的第二个对象
                //     yAxisIndex: 1,
                //     //两个柱子间的距离
                //     barGap: '-220%',
                //     data: array_one,
                //     itemStyle: {
                //         normal: {
                //             color: '#e7f7ff'
                //         },
                //         emphasis: {
                //             color: '#e7f7ff'
                //         }
                //     },
                //     zlevel: 0
                // },
            ],
            //图表外边框
            grid: {
                show: true,
                top: 20,
                bottom: 26,
                right: 20,
                left : 80
            },
            //鼠标移入时的提示
            tooltip: {
                //触发类型：轴线，折线和柱状图一般使用axis
                trigger: 'axis',
                //坐标轴指示器
                axisPointer: {
                    //指示类型：标线
                    type: 'line',
                    //不显示
                    lineStyle: {
                        opacity: 0
                    }
                },
                //提示框文字格式
                formatter: function (params) {
                    //params[0].name横坐标
                    // params[0].data数据
                    // params[0].seriesName    series里name配置项名
                    return params[0].name + ':' + params[0].data;
                }
            },
            //工具盒
            toolbox: {
                //显示
                show: false,
                // 工具盒里的工具
                feature: {
                    //转表格
                    dataView: {readOnly: false},
                    //图表转换
                    magicType: {type: ['line', 'bar']},
                    //刷新
                    restore: {},
                    //保存
                    saveAsImage: {}
                },
                //位置
                right: 20,
                top: 0,
                //层级
                zlevel:999
            },
        };
        mycharts.setOption(option);
        console.log('构建完成')
    },  

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.echarts1('area');
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


.echarts_wrap{
    height: 3.9rem;
    text-align: center;
    border : 1px solid #dddddd;
    margin-top:.24rem; 
    
    .echarts_title{
        height: .55rem;
        line-height: .55rem;
        font-size: .18rem;
    }
}
</style>