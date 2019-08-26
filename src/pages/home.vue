<!--  -->
<template>
<div class='wrap_home'>
    <!--  省  游客 -->
    <div class="qsjq">
        <div class="qsjq_title"> <i class="iconfont icon-anjian"></i><p>今日全省警情</p> </div>
        <div class="qsjq_content">
            <div class="qsjq_item" v-for="(item,index) in qsjq" :key="index"  >
                <!-- {{item['src']}} -->
                <div class="qsjq_item_num" :style="{backgroundImage: 'url(' + qsjqBg[index] + ')' }">
                    <p>{{item['value']}}</p>
                </div>
                <p class="qsjq_name"> {{item['name']}}</p>
                <p class="qsjq_name_zd"    v-if="item['name']==='应急联动事件'">(非警情事件)</p>        
            </div>
        </div>
    </div>

   
    <!--省级、游客  今日警情地域分布  合   近七日两抢一盗分布-->



   
    <!-- 市级 -->
    <!-- 今日警情地域分布   分    近七日两抢一盗分布 -->
    <div class="box">
        <div class="dyfb box_common" >
            <div class="dyfb_title">今日警情地域分布</div>
            <div class="data_context" >
                <div id="area" ref="area" style="width: 100%;height: 90%"></div>
            </div>
            <!-- <button @click="save($event)">保存</button> -->
        </div>

        <div class="dyfb box_common" >
            <div class="dyfb_title">近七日两抢一盗分布</div>
            <div class="data_context">
                <div id="qiangdao" style="width: 100%;height: 90%"></div>
                <!-- <button @click="save($event)">保存</button> -->
            </div>
            <!-- <button @click="save($event)">保存</button> -->
        </div>
    </div>

        


    <!--省、市、游客   今日警情类别分布 --><!-- 近期警情同比走势图 -->
    <div class="box">
        <div class="dyfb box_common" >

            <div class="dyfb_title">今日警情类别分布</div>
            <div class="data_context">
                <div id="type" style="width: 100%;height: 90%"></div>
                <!-- <button @click="save($event)">保存</button> -->
            </div>
            <!-- <button @click="save($event)">保存</button> -->
        </div>

        <div class="dyfb box_common" >
            <div class="dyfb_title">近期警情同比走势图</div>
            <div class="data_context">
                <div id="jingqingtongbi" style="width: 100%;height: 90%"></div>
                <!-- <button @click="save($event)">保存</button> -->
            </div>
            <!-- <button @click="save($event)">保存</button> -->
        </div>
    </div>
    









   
    <!--省   游客    链路实时监控 -->
    <div class="connect_wrap">
        <div class="connect_title">链路实时监控</div>
        <div class="connect_listwrap">
            <div class="explain"></div>

        </div>
    </div>





    <!-- 省、市     警情三级分类统计 -->   <!-- 抽取接警处理统计 -->
    <div class="box">
        <div class="dyfb box_common" style="width:6.5rem">
        <div class="dyfb_title">警情三级分类统计</div>
        <div class="data_context"   style="width:6.5rem">
           <div id="liquidFill" style="width: 100%;height: 90%"></div>
            <!-- <button @click="save($event)">保存</button> -->
            </div>
        </div>

        <div class="dyfb box_common" style="width:8.5rem">
            <div class="dyfb_title">今日警情类别分布</div>
            <div class="data_context">
            <div id="jiejingchuli" style="width: 100%;height: 90%"></div>
                <!-- <button @click="save($event)">保存</button> -->
            </div>
        </div>
    </div>
    




   <!--省、市  高发刑事警情 -->
    <div class="box">
        <div class="dyfb box_common" style="width:8.5rem">
                <div class="dyfb_title">今日警情类别分布</div>
                <div class="data_context">
                    <div id="gaofajingqing" style="width: 100%;height: 90%"></div>
                    <!-- <button @click="save($event)">保存</button> -->
                </div>
        </div>
    </div>



   <!--省、游客 处警反馈情况 -->
   <div class="box2">
        <div class="box2_title">处警反馈情况</div>
        <div class="box2_wraplist">


        </div>   

   </div>

   <!--省、市    重大警情 -->
    <div class="box3">
        <div class="box3_title">重大警情</div>
        <ul>
            <li class="jq_list">
                <div class="jq_area">  <i>1.</i>   太原市</div>
                <div class="jq_information">"王**接警:（1362365****）在2019-06-26 09:21:28报警称，在新民北街路段，反映交通违法行为 违停。"</div>
                <div class="jq_time">2019-06-26  09:21</div>
            </li>
            <li class="jq_list">
                <div class="jq_area">  <i>1.</i>   太原市</div>
                <div class="jq_information">"王**接警:（1362365****）在2019-06-26 09:21:28报警称，在新民北街路段，反映交通违法行为 违停。"</div>
                <div class="jq_time">2019-06-26  09:21</div>
            </li>
            <li class="jq_list">
                <div class="jq_area">  <i>1.</i>   太原市</div>
                <div class="jq_information">"王**接警:（1362365****）在2019-06-26 09:21:28报警称，在新民北街路段，反映交通违法行为 违停。"</div>
                <div class="jq_time">2019-06-26  09:21</div>
            </li>
        </ul>
    </div>  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "@/assets/style/index/Home.scss";
// 引入基本模板

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


import echartsLiquidfill from 'echarts/dist/echarts-liquidfill'


export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    qsjq : [
        {name : "接警总数",value : 9061},
        {name : "有效警情",value : 9061},
        {name : "形事",value : 9061},
        {name : "行政(治安)",value : 9061},
        {name : "交通类",value : 9061},
        {name : "消防救援",value : 9061},
        {name : "群众求助",value : 9061},
        {name : "应急联动事件",value : 9061},
        {name : "群体事件",value : 9061},
        {name : "纠纷",value : 9061},
        {name : "灾害事故",value : 9061},
        {name : "举报",value : 9061},
        {name : "投诉监督",value : 9061},
        {name : "其他",value : 9061},

    ],
    qsjqBg : [ 
        "static/images/index/a1.gif", 
        "static/images/index/a2.gif", 
        "static/images/index/a3.gif",
        "static/images/index/a4.gif",
        "static/images/index/a5.gif",
        "static/images/index/a6.gif",
        "static/images/index/a7.gif",
        "static/images/index/a8.gif",
        "static/images/index/a9.gif",
        "static/images/index/a10.gif",
        "static/images/index/a11.gif",
        "static/images/index/a12.gif",
        "static/images/index/a13.gif",
        "static/images/index/a14.png",
    ],
    // 今日警情地域分布
    data1: [
        {city: '太原市',value: 2244},
        {city: '清徐县', value: 544 },
        {city: '阳曲县',value: 506},
        {city: '娄烦县',value: 293},
        {city: '古交市', value: 301}
    ],

    // 近七日两抢一盗分布
    data3: [
        {
            city: '太原',
            value: [
                { type: '抢夺',
                    value: 2400
                },
                {
                    type: '抢劫',
                    value: 1300,
                },
                {
                    type: '盗窃',
                    value: 1500
                }
            ]
        },
        {
            city: '清徐县',
            value: [
                {
                    type: '抢夺',
                    value: 1100
                },
                {
                    type: '抢劫',
                    value: 300,
                },
                {
                    type: '盗窃',
                    value: 100
                }
            ]
        },
        {
            city: '阳曲县',
            value: [
                {
                    type: '抢夺',
                    value: 300
                },
                {
                    type: '抢劫',
                    value: 500,
                },
                {
                    type: '盗窃',
                    value: 260
                }
            ]
        },
        {
            city: '娄烦县',
            value: [
                {
                    type: '抢夺',
                    value: 180
                },
                {
                    type: '抢劫',
                    value: 300,
                },
                {
                    type: '盗窃',
                    value: 600
                }
            ]
        },
        {
            city: '古交市',
            value: [
                {
                    type: '抢夺',
                    value: 1000
                },
                {
                    type: '抢劫',
                    value: 1200,
                },
                {
                    type: '盗窃',
                    value: 300
                }
            ]
        },
    ],
    // 今日警情类别分布
    data2: [
        {
            type: '刑事',
            value: 96
        }, {
            type: '治安',
            value: 422
        }, {
            type: '交通',
            value: 432
        }, {
            type: '群众',
            value: 410
        }, {
            type: '社会',
            value: 92
        }, {
            type: '群体',
            value: 66
        }, {
            type: '举报',
            value: 56,
        }, {
            type: '投诉',
            value: 410
        }, {
            type: '其他',
            value: 1800
        }
    ],
    // 近期警情同比走势图
    data4_1: [
        {
            week: 22,
            value: 17000
        },
        {
            week: 23,
            value: 16000
        },
        {
            week: 24,
            value: 18500
        },
        {
            week: 25,
            value: 16000
        },
        {
            week: 26,
            value: 17000
        },
        {
            week: 27,
            value: 20000
        },
        {
            week: 28,
            value: 19000
        }
    ],
    data4_2: [
        {
            week: 22,
            value: 15000
        },
        {
            week: 23,
            value: 18400
        },
        {
            week: 24,
            value: 20000
        },
        {
            week: 25,
            value: 14900
        },
        {
            week: 26,
            value: 15400
        },
        {
            week: 27,
            value: 14000
        },
        {
            week: 28,
            value: 16000
        }
    ],
    // 警情三级分类统计
    data5: [0.121, 0.283, 0.596],

    // 抽取接警处理统计
    data6: [
        {
            type: '其他处理类型',
            value: 546
        },
        {
            type: '系统测试',
            value: 12
        },
        {
            type: '骚扰',
            value: 15
        },
        {
            type: '工作咨询',
            value: 572
        },
        {
            type: '重复报警',
            value: 189
        },
        {
            type: '处警反馈',
            value: 40
        },
        {
            type: '报警或求助',
            value: 927
        },
    ],
    data6_1: {
        '其他处理类型': 456,
        '系统测试': 12,
        '骚扰': 15,
        '工作咨询': 572,
        '重复报警': 189,
        '处警反馈': 40,
        '处警反馈': 927
    },
    // 高发刑事警情
    data7: [
        {
            type: '盗窃',
            value: [
                {
                    type: '当前',
                    value: 1602
                },
                {
                    type: '环比',
                    value: 1500,
                },
                {
                    type: '同比',
                    value: 1600
                }
            ]
        },
        {
            type: '诈骗',
            value: [
                {
                    type: '当前',
                    value: 996
                },
                {
                    type: '环比',
                    value: 990,
                },
                {
                    type: '同比',
                    value: 600
                }
            ]
        },
        {
            type: '强奸',
            value: [
                {
                    type: '当前',
                    value: 12
                },
                {
                    type: '环比',
                    value: 10,
                },
                {
                    type: '同比',
                    value: 16
                }
            ]
        },
        {
            type: '绑架',
            value: [
                {
                    type: '当前',
                    value: 34
                },
                {
                    type: '环比',
                    value: 12,
                },
                {
                    type: '同比',
                    value: 15
                }
            ]
        },
        {
            type: '抢劫',
            value: [
                {
                    type: '当前',
                    value: 14
                },
                {
                    type: '环比',
                    value: 13,
                },
                {
                    type: '同比',
                    value: 12
                }
            ]
        }
    ]



};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    // 今日警情地域分布
    echarts1() {
        
        let cityArr = [];//声明存放城市的数组
        let valueArr = []; //声明存放数据的数组
        let mycharts = echarts.init(document.getElementById('area')); //echarts初始化
        // let mycharts = echarts.init(this.$refs.area); //echarts初始化
        //把data1的数据分开放在城市和数据的数组里
        this.data1.forEach(function (value) {
            cityArr.push(value.city);
            valueArr.push(value.value);
        });
        //配置项
        let option = {
            //标题
            // title: {
            //     text: '今日警情地域分布'
            // },
            //背景色
            background: '#fff',
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
                        fontSize: 16,
                        //字体颜色
                        color: '#333'
                    },
                    //x轴轴线设置
                    axisLine: {
                        //样式设置
                        lineStyle: {
                            //颜色
                            color: '#dddddd'
                        }
                    },
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
                    //数值间隔
                    interval: 600,
                    //最大值
                    max:3000,
                    //y轴字体设置
                    axisLabel: {
                        show: true,
                        fontSize: 16,
                        color: '#333',
                    },
                    //y轴轴线设置
                    axisLine: {
                        lineStyle: {
                            color: '#dddddd'
                        }
                    },
                    //y轴分隔线设置
                    splitLine: {
                        //不显示
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
                {
                    name: '背景',
                    type: 'bar',
                    barWidth: '50%',
                    //设置柱子以哪个y轴位准，1表示第二个y轴，即y轴设置中的第二个对象
                    yAxisIndex: 0,
                    //两个柱子间的距离
                    barGap: '-220%',
                    data: [3000, 3000, 3000, 3000, 3000],
                    itemStyle: {
                        normal: {
                            color: '#e7f7ff'
                        },
                        emphasis: {
                            color: '#e7f7ff'
                        }
                    },
                    zlevel: 0
                },
            ],
            //图表外边框
            grid: {
                show: true,
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
                formatter: function (prams) {
                    //prams[0].name横坐标
                    // prams[0].data数据
                    // prams[0].seriesName    series里name配置项名
                    return prams[0].name + ':' + prams[0].data;
                }
            },
            //工具盒
            toolbox: {
                //显示
                show: true,
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
                right:0,
                top:50,
                orient:'vertical'
            },
        };
        mycharts.setOption(option);
    },
    // 近七日两抢一盗分布
    echarts3() {
        let mycharts = echarts.init(document.getElementById('qiangdao'));
        let xData = [];
        let yDataQiangduo = [];
        let yDataQiangjie = [];
        let yDataDaoqie = [];
        this.data3.forEach(function (value) {
            xData.push(value.city);
            yDataQiangduo.push(value.value[0].value);
            yDataQiangjie.push(value.value[1].value);
            yDataDaoqie.push(value.value[2].value);
        });
        let option = {
            // title: {
            //     text: '近7日两抢一盗分布',
            // },
            //土里设置
            legend: {
                // 字段控制形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
                icon: "rect",
                // 设置宽度
                itemWidth: 15,
                // 设置高度
                itemHeight: 15,
                //图例数据，和series中的name一致
                data: ['抢夺', '抢劫', '盗窃'],
                //位置
                right: 40,
                top: 80,
                //纵向排列
                orient: 'vertical',
                height: 100
            },
            xAxis: [
                {
                    type: 'category',
                    data: xData,
                    axisLabel: {
                        //x坐标轴字体设置
                        show: true,
                        fontSize: 16,
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#dddddd'
                        }
                    },
                }
            ],
            yAxis: [
                // 三个柱子，三个对象
                {
                    type: 'value',
                    min: 0,
                    max: 3000,
                    interval: 600,
                    axisLabel: {
                        show: true,
                        fontSize: 16,
                        color: '#333',
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#dddddd'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                {
                    type: 'value',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#dddddd'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '抢夺',
                    type: 'bar',
                    barWidth: '25%',
                    barGap: 0,
                    data: yDataQiangduo,
                    zlevel: 999,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                //右，下，左，上
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#3a89d8'
                                },
                                    {
                                        offset: 1,
                                        color: '#082d52'
                                    }
                                ]
                            )
                        }
                    },
                },
                {
                    name: '抢劫',
                    type: 'bar',
                    barWidth: '25%',
                    data: yDataQiangjie,
                    zlevel: 999,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                //右，下，左，上
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#21c5e8'
                                },
                                    {
                                        offset: 1,
                                        color: '#006799'
                                    }
                                ]
                            )
                        }
                    }
                },
                {
                    name: '盗窃',
                    type: 'bar',
                    barWidth: '25%',
                    data: yDataDaoqie,
                    zlevel: 999,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                //右，下，左，上
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#ff9198'
                                },
                                    {
                                        offset: 1,
                                        color: '#e5333f'
                                    }
                                ]
                            )
                        }
                    }
                },
            ],
            //图表位置，和边框
            grid: {
                // 图表位置
                right:120,
                //边框线宽
                borderWidth: 1,
                //显示
                show: true
            },
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
                formatter: function (prams) {
                    return prams[0].name+'<br>'+prams[0].seriesName + ':' + prams[0].data;
                },
            },
            toolbox: {
                //显示
                show: true,
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
                right:0,
                top:50,
                orient:'vertical'
            },
        };
        mycharts.setOption(option);
    },
    // 今日警情类别分布
     echarts2() {
        let mycharts = echarts.init(document.getElementById('type'));
        let xData = [];
        let yData = [];
        //颜色数组
        let myColor = ['#ff5f66', '#ff9969', '#ffb25c', '#fffa68', '#9ee772', '#7cdbdb', '#007aa2', '#5715a1', '#364a85']
        this.data2.forEach(function (value) {
            xData.push(value.type);
            yData.push(value.value);
        });
        let option = {
            // title: {
            //     text: '今日警情类别分布'
            // },
            background: '#fff',
            xAxis: [
                {
                    type: 'category',
                    data: xData,
                    axisLabel: {
                        show: true,
                        fontSize: 16,
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#dddddd'
                        }
                    },
                }
            ],
            yAxis: [{
                type: 'value',
                max: 2000,
                interval: 400,
                axisLabel: {
                    show: true,
                    fontSize: 16,
                    color: '#333',
                },
                axisLine: {
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
                splitLine: {
                    show: true
                }
            }],
            series: [{
                name: '今日警情地域分布',
                type: 'bar',
                barWidth: '30%',
                data: yData,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: ['#00a0a3', '#0054a2'],
                                fontSize: 12
                            },
                        },
                        //按数组顺序设置颜色
                        color: function (params) {
                            let num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: [5, 5, 0, 0],
                    }
                },
                zlevel: 1,
            }],
            grid: {
                show: true
            },
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
                formatter: function (prams) {
                    return prams[0].name + ':' + prams[0].data;
                }
            },
            toolbox: {
                //显示
                show: true,
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
                right:0,
                top:50,
                orient:'vertical'
            },
        };
        mycharts.setOption(option);
    },
    // 近期警情同比走势图
    echarts4() {
        let mycharts = echarts.init(document.getElementById('jingqingtongbi'));
        let xData = [];
        let yDataNow = [];
        let yDataQvnian = [];
        this.data4_1.forEach(function (value) {
            xData.push(value.week);
            yDataNow.push(value.value);
        });
        this.data4_2.forEach(function (value) {
            yDataQvnian.push(value.value);
        });
        let option = {
            color: [new echarts.graphic.LinearGradient(
                //右，下，左，上
                0, 0, 1, 0, [{
                    offset: 0,
                    color: '#4d47a8'
                },
                    {
                        offset: 1,
                        color: '#6fb2ac'
                    }
                ]
            ), new echarts.graphic.LinearGradient(
                //右，下，左，上
                0, 0, 1, 0, [{
                    offset: 0,
                    color: '#bc3726'
                },
                    {
                        offset: 1,
                        color: '#ebe315'
                    }
                ]
            )],
            xAxis: {
                type: 'category',
                data: xData,
                min: 0,
                //图表留白，图表和横坐标轴之间的距离
                boundaryGap: false,
                axisLabel: {
                    //x坐标轴字体设置
                    show: true,
                    fontSize: 16,
                    color: '#333'
                },
                axisLine: {
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
            },
            yAxis: [{
                type: 'value',
                min: 0,
                max: 30000,
                interval: 5000,
                axisLabel: {
                    show: true,
                    fontSize: 16,
                    color: '#333',
                },
                axisLine: {
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
                splitLine: {
                    show: false
                }
            },
                {
                    type: 'value',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#dddddd'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            legend: {
                icon: "rect",   //  字段控制形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
                itemWidth: 30,  // 设置宽度
                itemHeight: 12, // 设置高度
                data: ['当前', '同比'],
                right: 40,
                top: 80,
                orient: 'vertical',
                height: 100,
            },
            series: [{
                name: '当前',
                type: 'line',
                data: yDataNow,
                smooth: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        //右，下，左，上
                        0, 0, 1, 0, [{
                            offset: 0,
                            color: '#4d47a8'
                        },
                            {
                                offset: 1,
                                color: '#6fb2ac'
                            }
                        ]
                    )
                },
                itemStyle: {
                    opacity: 0
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#c1d6ea'
                        },
                            {
                                offset: 1,
                                color: '#fff'
                            }
                        ], false),
                    }
                }
            },
                {
                    name: '同比',
                    type: 'line',
                    data: yDataQvnian,
                    smooth: true,
                    lineStyle: {
                        color: new echarts.graphic.LinearGradient(
                            //右，下，左，上
                            0, 0, 1, 0, [{
                                offset: 0,
                                color: '#bc3726'
                            },
                                {
                                    offset: 1,
                                    color: '#ebe315'
                                }
                            ]
                        )
                    },
                    itemStyle: {
                        opacity: 0
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fff98c'
                            },
                                {
                                    offset: 1,
                                    color: '#fff'
                                }
                            ], false),
                        }
                    },
                }],
            grid: {
                // 图表位置
                right:120,
                //边框线宽
                borderWidth: 1,
                //显示
                show: true
            },
            tooltip: {
                //触发类型：轴线，折线和柱状图一般使用axis
                trigger: 'axis',
                //坐标轴指示器
                axisPointer: {
                    //指示类型：标线
                    type: 'cross',
                    //不显示
                    lineStyle: {
                        opacity: 1
                    }
                },
                //提示框文字格式
                formatter: function (prams) {
                    return '第'+prams[0].name+'周<br>'+prams[0].seriesName + ':' + prams[0].data+'<br>'+prams[1].seriesName + ':' + prams[1].data;
                }
            },
            toolbox: {
                //显示
                show: true,
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
                right:0,
                top:50,
                orient:'vertical'
            },
        };
        mycharts.setOption(option);
    },
    // 警情三级分类统计
    liquidFill() {//方法
        let that = this;
        let liquid = echarts.init(document.getElementById('liquidFill'));
        // console.log(this.data5);
        let value = that.data5[0];
        let value1 = that.data5[1];
        let value2 = that.data5[2];
        let option = {
            title: [
                {
                    text: '警情一级分类统计',
                    left: '4%',
                    bottom: '10%'
                },
                {
                    text: '警情二级分类统计',
                    left: '35%',
                    bottom: '10%'
                },
                {
                    text: '警情三级分类统计',
                    left: '65%',
                    bottom: '10%'
                }
            ],
            series: [
                {
                    name: '警情一级分类统计',
                    type: 'liquidFill',
                    data: [value, value, value],
                    backgroundStyle: {
                        borderWidth: 3,
                        borderColor: '#fb5864',
                        color: '#fff'
                    },
                    outline: {
                        borderDistance: 3, //外部轮廓与图表的距离 数字
                        itemStyle: {
                            borderColor: '#b3000e', //边框的颜色
                            borderWidth: 3,  //边框的宽度
                            shadowBlur: 0
                        }
                    },
                    color: ['rgba(255,0,0,0.5)', 'rgba(255,0,0,0.4)', 'rgba(255,0,0,0.3)', 'rgba(255,0,0,0.2)'],//水波的颜色 对应的是data里面值
                    center: ['14%', '50%'],
                    itemStyle: {
                        opacity: 0.5,//波浪的透明度
                        shadowBlur: 10,//波浪的阴影范围
                        shadowColor: 'rgb(255,0,0)'//阴影颜色
                    },
                    label: {
                        normal: {
                            position: ['50%', '30%'],
                            formatter: (value * 100).toFixed(1) + '%',
                            textStyle: {
                                fontSize: 30,
                            },
                        }
                    }
                },
                {
                    name: '警情二级分类统计',
                    type: 'liquidFill',
                    data: [value1, value1, value1],
                    backgroundStyle: {
                        borderWidth: 3,
                        borderColor: '#daec63',
                        color: '#fff'
                    },
                    outline: {
                        borderDistance: 3, //外部轮廓与图表的距离 数字
                        itemStyle: {
                            borderColor: '#eed651', //边框的颜色
                            borderWidth: 3,  //边框的宽度
                            shadowBlur: 0
                        }
                    },
                    color: ['rgb(230,226,100,0.5)', 'rgba(230,226,100,0.4)', 'rgba(230,226,100,0.3)', 'rgba(230,226,100,0.2)'],//水波的颜色 对应的是data里面值
                    center: ['45%', '50%'],
                    itemStyle: {
                        opacity: 0.5,//波浪的透明度
                        shadowBlur: 10,//波浪的阴影范围
                        shadowColor: 'rgb(255,255,0)'//阴影颜色
                    },
                    label: {
                        normal: {
                            position: ['50%', '30%'],
                            formatter: (value1 * 100).toFixed(1) + '%',
                            textStyle: {
                                fontSize: 30,
                            },
                        }
                    }
                },
                {
                    name: '警情三级分类统计',
                    type: 'liquidFill',
                    data: [value2, value2, value2],
                    backgroundStyle: {
                        borderWidth: 3,
                        borderColor: '#89aae4',
                        color: '#fff'
                    },
                    outline: {
                        borderDistance: 3, //外部轮廓与图表的距离 数字
                        itemStyle: {
                            borderColor: '#25286e', //边框的颜色
                            borderWidth: 3,  //边框的宽度
                            shadowBlur: 0
                        }
                    },
                    color: ['rgb(37,40,110,0.5)', 'rgba(37,40,110,0.4)', 'rgba(37,40,110,0.3)', 'rgba(37,40,110,0.2)'],//水波的颜色 对应的是data里面值
                    center: ['75%', '50%'],
                    itemStyle: {
                        opacity: 0.5,//波浪的透明度
                        shadowBlur: 10,//波浪的阴影范围
                        shadowColor: 'rgb(86,90,255)'//阴影颜色
                    },
                    label: {
                        normal: {
                            position: ['50%', '30%'],
                            formatter: (value2 * 100).toFixed(1) + '%',
                            textStyle: {
                                fontSize: 30,
                            },
                        }
                    }
                },
            ],
            toolbox: {
                //显示
                show: true,
                // 工具盒里的工具
                feature: {
                    //刷新
                    restore: {},
                    //保存
                    saveAsImage: {}
                },
                right: 0,
                top: 50,
                orient: 'vertical'
            },
        };
        liquid.setOption(option)
    },

    // 抽取接警处理统计
    echarts6() {
        let myCharts = echarts.init(document.getElementById("jiejingchuli"));
        let that = this;
        let xData = [];
        let yData = [];
        let myColor = ['#dee2ff', '#ced5ff', '#b1bbff', '#94a2ff', '#7d7eff', '#7a68ff', '#5b3cfe',]
        this.data6.forEach(function (value) {
            yData.push(value.type);
            xData.push(value.value)
        });
        let option = {
            // title: [ {
            //     text: '报警量',
            //     left: 300,
            //     top: 40
            // }, {
            //     text: '抽取接警处理统计占比',
            //     left: 720,
            //     bottom: 40
            // }],
            yAxis: {
                type: 'category',
                data: yData,
                axisLabel: {
                    //x坐标轴字体设置
                    show: true,
                    fontSize: 16,
                    color: '#333'
                },
                axisLine: {
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
            },
            xAxis: {
                type: 'value',
                data: xData,
                interval: 100,
                axisLabel: {
                    //x坐标轴字体设置
                    show: true,
                    fontSize: 16,
                    color: '#333'
                },
                axisLine: {
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
            },
            series: [{
                name: '报警量',
                type: 'bar',
                barWidth: '50%',
                data: xData,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#333',
                                fontSize: 12
                            }
                        },
                        color: function (params) {
                            let num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                zlevel: 1,
            }, {
                name: '报警量',
                type: 'pie',
                radius: [0, '40%'],
                center: ["75%", '45%'],
                data: Object.keys(that.data6_1).map(function (key) {
                    return {
                        name: key,
                        value: that.data6_1[key]
                    }
                }),
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#333',
                                fontSize: 12
                            },
                        },
                        color: function (params) {
                            let num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    },
                    emphasis: {
                        label: {
                            textStyle: { //数值样式
                                color: 'blue',
                                fontSize: 18
                            }
                        },
                    }
                },
                labelLine: {
                    length: 2
                }
            }],
            grid: [{
                left: 100,
                show: true,
                width: "50%",
                top: 80
            }],
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
                formatter: function (prams) {
                    return prams[0].name + ':' + prams[0].data;
                }
            },
            toolbox: {
                //显示
                show: true,
                // 工具盒里的工具
                feature: {
                    //转表格
                    dataView: {readOnly: false},
                    //图表转换
                    magicType: {type: ['line', 'bar']},
                    //刷新
                    restore: {},
                    //保存
                    saveAsImage: {},
                },
                right: 0,
                top: 50,
                orient: 'vertical'
            },
        };
        myCharts.setOption(option);
    },
    // 高发刑事警情
    echarts7() {
        let that = this;
        let mycharts = echarts.init(document.getElementById('gaofajingqing'));
        let type = [];
        let now = [];
        let huanbi = [];
        let tongbi = [];
        let daoqie = [];
        let zhapian = [];
        let qiangjian = [];
        let bangjia = [];
        let qiangjie = [];
        that.data7.forEach(function (value, index) {
            type.push(value.type);
            now.push(value.value[0].value);
            huanbi.push(value.value[1].value);
            tongbi.push(value.value[2].value);
            switch (value.type) {
                case '盗窃': {
                    that.data7[index].value.forEach(function (value) {
                        daoqie.push(value.value);
                    })
                }
                    break;
                case '诈骗': {
                    that.data7[index].value.forEach(function (value) {
                        zhapian.push(value.value);
                    })
                }
                    break;
                case '强奸': {
                    that.data7[index].value.forEach(function (value) {
                        qiangjian.push(value.value);
                    })
                }
                    break;
                case '绑架': {
                    that.data7[index].value.forEach(function (value) {
                        bangjia.push(value.value);
                    })
                }
                    break;
                case '抢劫': {
                    that.data7[index].value.forEach(function (value) {
                        qiangjie.push(value.value);
                    })
                }
                    break;
            }
        });
        let daoqieMax=Math.max(...daoqie);
        let zhapianMax=Math.max(...zhapian);
        let qiangjianMax=Math.max(...qiangjian);
        let bangjiaMax=Math.max(...bangjia);
        let qiangjieMax=Math.max(...qiangjie);
        let option = {
            // title: {
            //     text: '近7日两抢一盗分布',
            // },
            //图例设置
            legend: {
                // 字段控制形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
                icon: "rect",
                // 设置宽度
                itemWidth: 15,
                // 设置高度
                itemHeight: 15,
                //图例数据，和series中的name一致
                data: ['当前', '同比', '环比'],
                //位置
                right: 40,
                top: 80,
                //纵向排列
                orient: 'vertical',
                height: 100
            },
            xAxis: [
                {
                    type: 'category',
                    data: type,
                    axisLabel: {
                        //x坐标轴字体设置
                        show: true,
                        fontSize: 16,
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#dddddd'
                        }
                    },
                }
            ],
            yAxis: [
                // 三个柱子，三个对象
                {
                    type: 'value',
                    min: 0,
                    max: 2000,
                    interval: 400,
                    axisLabel: {
                        show: true,
                        fontSize: 16,
                        color: '#333',
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#dddddd'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                {
                    type: 'value',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#dddddd'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '当前',
                    type: 'bar',
                    barWidth: 17,
                    barGap: 0.1,
                    data: now,
                    zlevel: 999,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                //右，下，左，上
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#00d7e1'
                                },
                                    {
                                        offset: 1,
                                        color: '#01949b'
                                    }
                                ]
                            )
                        }
                    },
                    markPoint: {
                        symbol: 'pin',
                        symbolSize: 40,
                        data: [{
                            name: '盗窃',
                            value: daoqieMax,
                            xAxis: 0,
                            yAxis: daoqieMax
                        },{
                            name: '诈骗',
                            value: zhapianMax,
                            xAxis: 1,
                            yAxis: zhapianMax
                        },{
                            name: '强奸',
                            value: qiangjianMax,
                            xAxis: 2,
                            yAxis: qiangjianMax
                        },{
                            name: '绑架',
                            value: bangjiaMax,
                            xAxis: 3,
                            yAxis: bangjiaMax
                        },{
                            name: '抢劫',
                            value: qiangjieMax,
                            xAxis: 4,
                            yAxis: qiangjieMax
                        }
                        ],
                        label: {
                            fontSize: 8
                        }
                    },
                },
                {
                    name: '环比',
                    type: 'bar',
                    barWidth: 17,
                    data: huanbi,
                    zlevel: 999,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                //右，下，左，上
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#ffd094'
                                },
                                    {
                                        offset: 1,
                                        color: '#ffb555'
                                    }
                                ]
                            )
                        }
                    }
                },
                {
                    name: '同比',
                    type: 'bar',
                    barWidth: 17,
                    data: tongbi,
                    zlevel: 999,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                //右，下，左，上
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#f57665'
                                },
                                    {
                                        offset: 1,
                                        color: '#b42925'
                                    }
                                ]
                            )
                        }
                    }
                },
            ],
            //图表位置，和边框
            grid: {
                // 图表位置
                right: 120,
                //边框线宽
                borderWidth: 1,
                //显示
                show: true
            },
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
                formatter: function (prams) {
                    return prams[0].name + '<br>' + prams[0].seriesName + ':' + prams[0].data;
                },
            },
            toolbox: {
                //显示
                show: true,
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
                right: 0,
                top: 50,
                orient: 'vertical'
            },
        };
        mycharts.setOption(option);
    },
    


















},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.echarts1();
    this.echarts3();
    this.echarts2();
    this.echarts4();
    this.liquidFill();
    this.echarts6();
    this.echarts7();

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



</style>