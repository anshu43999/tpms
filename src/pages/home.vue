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
    <div class="box5">
        <div class="box2_title">
            <ul class="box2_title_list">
                <li :class="[ variate_one===1 ?'btn_active': 'btn_list1' ]" @click="cut([1,1])"  ><i class="iconfont icon-fankui"></i>今日警情地域分布</li>
                <li :class="[ variate_one===2 ?'btn_active': 'btn_list2' ]" @click="cut([2,1])"><i class="iconfont icon-chouqu"></i>近七日两抢一盗分布</li>
            </ul> 
        </div>
        <div class="data_context" style="height:2.87rem;position: relative; margin-right:1rem" >
            <div  :class="variate_one===1 ? 'startShow':'startHide' "   id="area2" ref="area2" style="width: 100%;height: 100%; position: absolute "></div>
            <div  :class="variate_one===2 ? 'startShow':'startHide' "  id="qiangdao2" ref="qiangdao2" style="width: 100%;height: 100% ; position: absolute ;left:0;top:0 "></div>
        </div>
    </div>




   
    <!-- 市级 -->
    <!-- 今日警情地域分布   分    近七日两抢一盗分布 -->
    <div class="box">
        <div class="dyfb box_common" >
            <div class="dyfb_title common_title"><i class="iconfont icon-anjian"></i>今日警情地域分布</div>
            <div class="data_context" >
                <div id="area" ref="area" style="width: 100%;height: 100%"></div>
            </div>
            <!-- <button @click="save($event)">保存</button> -->
        </div>

        <div class="dyfb box_common" >
            <div class="common_title">   <i class="iconfont icon-qiangjie"></i>  近七日两抢一盗分布</div>
            <div class="data_context">
                <div id="qiangdao" ref='qiangdao' style="width: 100%;height: 100%"></div>
                <!-- <button @click="save($event)">保存</button> -->
            </div>
            <!-- <button @click="save($event)">保存</button> -->
        </div>
    </div>
 


    <!--省、市、游客   今日警情类别分布 --><!-- 近期警情同比走势图 -->
    <div class="box">
        <div class="dyfb box_common" >

            <div class="common_title"><i class="iconfont icon-leibie"></i>今日警情类别分布</div>
            <div class="data_context">
                <div id="type" style="width: 100%;height: 100%"></div>
                <!-- <button @click="save($event)">保存</button> -->
            </div>
            <!-- <button @click="save($event)">保存</button> -->
        </div>

        <div class="dyfb box_common" >
            <div class="common_title">  <i class="iconfont icon-tongbi"></i>  近期警情同比走势图</div>
            <div class="data_context">
                <div id="jingqingtongbi" style="width: 100%;height: 100%"></div>
                <!-- <button @click="save($event)">保存</button> -->
            </div>
            <!-- <button @click="save($event)">保存</button> -->
        </div>
    </div>
    

   
    <!--省   游客    链路实时监控 -->
    <div class="connect_wrap">
        <div class="common_title"><i class="iconfont icon-shishijiankong"></i>链路实时监控</div>
        <div class="connect_listwrap">
            <div class="explain">
                <div>
                    <i class="iconfont icon-shishijiankong c_normal" ></i><span>正常</span>
                </div>
                <div>
                    <i class="iconfont icon-shishijiankong c_overtime" ></i><span>超8小时无新警情</span>                    
                </div>
                <div>
                    <i class="iconfont icon-shishijiankong c_break" ></i><span>链路断开</span>
                </div>
            </div>

            <ul class="connect_info">
                <li   v-for="(item,index) in data8"  :key="index">
                    <i :class="[ item['value'] === 1? 'c_normal' :item['value']===2? 'c_overtime':  'c_break'    ,'Img',  'iconfont' ,'icon-ball-camera-d'   ]"></i>
                    <p>{{item['city']}}</p>
                </li> 
            </ul>

        </div>
    </div>


    <!-- 省、市     警情三级分类统计 -->   <!-- 抽取接警处理统计 -->
    <div class="box">
        <div class="dyfb box_common" style="width:6.5rem">
        <div class="common_title"> <i class="iconfont icon-dengji"></i>  警情三级分类统计</div>
        <div class="data_context"   style="width:6.4rem">
           <div id="liquidFill" style="width: 100%;height: 100%"></div>
            <!-- <button @click="save($event)">保存</button> -->
            </div>
        </div>

        <div class="dyfb box_common" style="width:8.5rem">
            <div class="common_title">   <i class="iconfont icon-baojingchuli"></i>  抽取接警处理统计</div>
            <div class="data_context" style="width :100%">
            <div id="jiejingchuli" style="width: 100%;height: 100%"></div>
                <!-- <button @click="save($event)">保存</button> -->
            </div>
        </div>
    </div>
    


   <!--省、市  高发刑事警情 -->
    <div class="box">
        <div class="dyfb box_common" style="width:100%">
            <div class="common_title">  <i class="iconfont icon-jingqing"></i>高发刑事警情</div>

            <div class="gfjq_list" style="width:100%">
                <div class="data_context" style="width:7rem; margin-bottom : .24rem">
                    <div id="gaofajingqing" style="width: 100%;height: 100%"></div>
                    <!-- <button @click="save($event)">保存</button> -->
                </div>
                <div class="gfjq_table" style="width : 7.2rem">
                     <exclusivelist :data12='data12'></exclusivelist>
                </div>

            </div>
            
        </div>
        
    </div>


   <!--省、游客 处警反馈情况 -->
   <div class="box2">
        <div class="box2_title">
            <ul class="box2_title_list">
                <li :class="[ variate_two===1 ?'btn_active': 'btn_list1' ]" @click="cut([1,2])"><i class="iconfont icon-fankui"></i>处警反馈情况</li>
                <li :class="[ variate_two===2 ?'btn_active': 'btn_list2' ]" @click="cut([2,2])"><i class="iconfont icon-chouqu"></i>数据抽取情况</li>
                <li :class="[ variate_two===3 ?'btn_active': 'btn_list3' ]" @click="cut([3,2])"><i class="iconfont icon-shujuzhiliang"></i>数据质量情况</li>
            </ul>
        </div>
        <div class="box2_wraplist">
                <ul v-if="variate_two ===1" class="box2_title_list">
                    <li :class="[ variate_three===1 ?'btn_active': 'btn_list1' ]"  @click="cut([1,3])">本周</li>
                    <li :class="[ variate_three===2 ?'btn_active': 'btn_list2' ]"  @click="cut([2,3])">当月</li>
                    <li :class="[ variate_three===3 ?'btn_active': 'btn_list3' ]"  @click="cut([3,3])">今年</li>
                </ul>
                <ul v-if="variate_two ===3" class="box2_title_list">
                    <li :class="[ variate_three===1 ?'btn_active': 'btn_list1' ]"  @click="cut([1,3])">今日</li>
                    <li :class="[ variate_three===2 ?'btn_active': 'btn_list2' ]"  @click="cut([2,3])">当月</li>
                    <li :class="[ variate_three===3 ?'btn_active': 'btn_list3' ]"  @click="cut([3,3])">今年</li>
                </ul>
            <List :data9='data9' :data10 ='data10'  :options='options'></List>
        </div>   
   </div>

   <!--省、市    重大警情 -->
    <div class="box3">
        <div class="common_title"> <i class="iconfont icon-jingqingxinxi"></i>重大警情</div>
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
import exclusivelist from '@/components/common/action/exclusivelist.vue'
import List from '@/components/common/action/list.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    List,
    exclusivelist
},
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
        "static/images/index/a1.png", 
        "static/images/index/a2.png", 
        "static/images/index/a3.png",
        "static/images/index/a4.png",
        "static/images/index/a5.png",
        "static/images/index/a6.png",
        "static/images/index/a7.png",
        "static/images/index/a8.png",
        "static/images/index/a9.png",
        "static/images/index/a10.png",
        "static/images/index/a11.png",
        "static/images/index/a12.png",
        "static/images/index/a13.png",
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
    data111:[
        {city : "太原", value :156},
        {city : "长治", value :424},
        {city : "朔州", value :4},
        {city : "运城", value :312},
        {city : "大同", value :852},
        {city : "晋城", value :52},
        {city : "晋中", value :567},
        {city : "临汾", value :876},
        {city : "忻州", value :5},
        {city : "阳泉", value :269},
    ],
    // 近七日两抢一盗分布
    data3: [
        {
            city: '太原',
            value: [  
                { type: '抢夺', value: 2400 },
                {type: '抢劫', value: 1300, },
                { type: '盗窃',value: 1500 }
            ]
        },
        {
            city: '清徐县',
            value: [
                { type: '抢夺',value: 1100 },
                { type: '抢劫', value: 300, },
                {type: '盗窃',value: 100}
            ]
        },
        {
            city: '阳曲县',
            value: [
                { type: '抢夺',value: 300 },
                {type: '抢劫',value: 500, },
                { type: '盗窃', value: 260 }
            ]
        },
        {
            city: '娄烦县',
            value: [
                {type: '抢夺', value: 180},
                { type: '抢劫', value: 300,},
                { type: '盗窃', value: 600 }
            ]
        },
        {
            city: '古交市',
            value: [
                {type: '抢夺', value: 1000},
                { type: '抢劫', value: 1200,},
                {type: '盗窃', value: 300 }
            ]
        },
    ],
    data333:[
        {
            city: '太原',
            value: [  
                { type: '抢夺', value: 2400 },
                {type: '抢劫', value: 1300, },
                { type: '盗窃',value: 1500 }
            ]
        },
        {
            city: '长治',
            value: [
                { type: '抢夺',value: 1100 },
                { type: '抢劫', value: 300, },
                {type: '盗窃',value: 100}
            ]
        },
        {
            city: '朔州',
            value: [
                { type: '抢夺',value: 300 },
                {type: '抢劫',value: 500, },
                { type: '盗窃', value: 260 }
            ]
        },
        {
            city: '运城',
            value: [
                {type: '抢夺', value: 180},
                { type: '抢劫', value: 300,},
                { type: '盗窃', value: 600 }
            ]
        },
        {
            city: '大同',
            value: [
                {type: '抢夺', value: 1000},
                { type: '抢劫', value: 1200,},
                {type: '盗窃', value: 300 }
            ]
        },
        {
            city: '晋城',
            value: [
                {type: '抢夺', value: 1000},
                { type: '抢劫', value: 1200,},
                {type: '盗窃', value: 300 }
            ]
        },
        {
            city: '晋中',
            value: [
                {type: '抢夺', value: 1000},
                { type: '抢劫', value: 1200,},
                {type: '盗窃', value: 300 }
            ]
        },
        {
            city: '临汾',
            value: [
                {type: '抢夺', value: 1000},
                { type: '抢劫', value: 1200,},
                {type: '盗窃', value: 300 }
            ]
        },
        {
            city: '忻州',
            value: [
                {type: '抢夺', value: 1000},
                { type: '抢劫', value: 1200,},
                {type: '盗窃', value: 300 }
            ]
        },
        {
            city: '阳泉',
            value: [
                {type: '抢夺', value: 1000},
                { type: '抢劫', value: 1200,},
                {type: '盗窃', value: 300 }
            ]
        }

        

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
    data5: [0.121, 0.283, 0.596,0],

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
    ],
    // 链路情况
    data8: [
        {city : "太原", value : 1},
        {city : "长治", value : 1},
        {city : "朔州", value : 1},
        {city : "运城", value : 1},
        {city : "吕梁", value : 1},
        {city : "大同", value : 1},
        {city : "晋城", value : 1},
        {city : "晋中", value : 1},
        {city : "临汾", value : 1},
        {city : "忻州", value : 1},
        {city : "阳泉", value : 1},
    ],
    // 处警反馈情况
    data9 :[
        {city : "太原", value :"ty"},
        {city : "长治", value :"cz"},
        {city : "朔州", value :"sz"},
        {city : "运城", value :"yc"},
        {city : "吕梁", value :"ll"},
        {city : "大同", value :"dt"},
        {city : "晋城", value :"jc"},
        {city : "晋中", value :"jz"},
        {city : "临汾", value :"lf"},
        {city : "忻州", value :"xz"},
        {city : "阳泉", value :"yq"},
    ],
    data10: [
        { classify: '接警量', ty: 6666,  cz: 8888,  sz:22222,  yc:23145,    ll:23145, dt:23145, jc:23145,jz:23145,lf:23145, xz:23145, yq:23145 }, 
        { classify: '处警量', ty: 6666,  cz: 8888,  sz:22222,  yc:23145,    ll:23145, dt:23145, jc:23145,jz:23145,lf:23145, xz:23145, yq:23145 }, 
        { classify: '反馈量', ty: 6666,  cz: 8888,  sz:22222,  yc:23145,    ll:23145, dt:23145, jc:23145,jz:23145,lf:23145, xz:23145, yq:23145 }, 
        { classify: '反馈率', ty: 6666,  cz: 8888,  sz:22222,  yc:23145,    ll:23145, dt:23145, jc:23145,jz:23145,lf:23145, xz:23145, yq:23145 }, 
    ],
    // 重大警情表
    data11 :[
        {types : "盗窃",value : "steal"},
        {types : "诈骗",value : "swindle"},
        {types : "强奸",value : "rape"},
        {types : "绑架",value : "kidnap"},
        {types : "抢劫",value : "rob"}
    ],
    data12 : [
        {classify:"同比",value : [+10,+85.2,+85.2,-37.1,-10.1] },
        {classify:"环比",value : [-6.4,-7.1,+85.2,-37.1,-10.1] }
    ],
    // 今日警情地域分布 
    variate_one : 1,
    variate_two : 1,
    variate_three : 1,

    // list options
    options : {
        fistline : true,
        type : 1,
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    // 今日警情地域分布
    echarts1(value) {
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
            //标题
            // title: {
            //     text: '今日警情地域分布'
            // },
            //背景色
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
                    //数值间隔
                    interval: 600,
                    //y轴字体设置
                    axisLabel: {
                        show: true,
                        fontSize: 14,
                        color: '#333'
                    },
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
                {
                    name: '背景',
                    type: 'bar',
                    barWidth: '50%',
                    //设置柱子以哪个y轴位准，1表示第二个y轴，即y轴设置中的第二个对象
                    yAxisIndex: 1,
                    //两个柱子间的距离
                    barGap: '-220%',
                    data: array_one,
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
                top: 42,
                bottom: 26,
                right: 20
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
                right: 20,
                top: 0,
                //层级
                zlevel:999
            },
        };
        mycharts.setOption(option);
    },
    // 近七日两抢一盗分布
    echarts3(value) {
        
        console.log(value);
        let mycharts = echarts.init(document.getElementById(value));
        mycharts.resize();
        // let mycharts =echarts.init(this.$refs.value);
        // console.log(this.$refs.qiangdao2);
        let xData = [];
        let yDataQiangduo = [];
        let yDataQiangjie = [];
        let yDataDaoqie = [];
        if(value == 'qiangdao'){
            this.data3.forEach(function (value) {
                xData.push(value.city);
                yDataQiangduo.push(value.value[0].value);
                yDataQiangjie.push(value.value[1].value);
                yDataDaoqie.push(value.value[2].value);
            });
        }else if(value =='qiangdao2'){
            this.data333.forEach(function (value) {
                xData.push(value.city);
                yDataQiangduo.push(value.value[0].value);
                yDataQiangjie.push(value.value[1].value);
                yDataDaoqie.push(value.value[2].value);
            });

        }
        
        let option = {
            backgroundColor: '#fff',
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
                right: 0,
                top: 40,
                //纵向排列
                orient: 'vertical',
                height: 100,
                textStyle: {
                    fontSize: 12
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: xData,
                    axisLabel: {
                        //x坐标轴字体设置
                        show: true,
                        fontSize: 14,
                        color: '#333'
                    },
                    axisLine: {
                        show:false
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            yAxis: [
                // 三个柱子，三个对象
                {
                    type: 'value',
                    interval: 600,
                    axisLabel: {
                        show: true,
                        fontSize: 14,
                        color: '#333',
                    },
                    axisLine: {
                        show:false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '抢夺',
                    type: 'bar',
                    barWidth: '20%',
                    barGap: 0,
                    data: yDataQiangduo,
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
                    barWidth: '20%',
                    data: yDataQiangjie,
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
                    barWidth: '20%',
                    data: yDataDaoqie,
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
                right: 60,
                top: 42,
                bottom: 26,
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
                formatter: '{b0}:<br />{a0}:{c0}<br>{a1}:{c1}<br>{a2}:{c2}'
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
                right: 20,
                top: 0,
                zlevel:999
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
            backgroundColor: '#fff',
            xAxis: [
                {
                    type: 'category',
                    data: xData,
                    axisLabel: {
                        show: true,
                        fontSize: 14,
                        color: '#333'
                    },
                    axisLine: {
                        show:false
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            yAxis: [{
                type: 'value',
                max: 2000,
                interval: 400,
                axisLabel: {
                    show: true,
                    fontSize: 14,
                    color: '#333'
                },
                axisLine: {
                    show:false
                },
                splitLine: {
                    show: true
                },
                axisTick: {
                    show: false
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
                show: true,
                top: 42,
                bottom: 26,
                right: 20
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
                formatter: function (params) {
                    return params[0].name + ':' + params[0].data;
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
                right: 20,
                top: 0,
                zlevel:999
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
            backgroundColor: '#fff',
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
                name: '（周）',
                nameTextStyle: {
                    color: "#333"
                },
                min: 0,
                //图表留白，图表和横坐标轴之间的距离
                boundaryGap: false,
                axisLabel: {
                    //x坐标轴字体设置
                    show: true,
                    fontSize: 14,
                    color: '#333'
                },
                axisLine: {
                    show:false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: [{
                type: 'value',
                min: 0,
                max: 30000,
                interval: 5000,
                axisLabel: {
                    show: true,
                    fontSize: 14,
                    color: '#333',
                },
                axisLine: {
                    show:false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }],
            legend: {
                icon: "rect",   //  字段控制形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
                itemWidth: 23,  // 设置宽度
                itemHeight: 8, // 设置高度
                data: ['当前', '同比'],
                right: 0,
                top: 42,
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
                top: 42,
                left: 65,
                bottom: 26,
                right: 70,
                //边框线宽
                borderWidth: 1,
                //显示
                show: true,
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
                formatter: function (params) {
                    return '第' + params[0].name + '周<br>' + params[0].seriesName + ':' + params[0].data + '<br>' + params[1].seriesName + ':' + params[1].data;
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
                right: 20,
                top: 0
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
        let value3 = that.data5[3];
        let color = ['#b70e1b', '#e6c300', '#25286e','#286823'];
        let option = {
            backgroundColor: '#fff',
            title: [
                {
                    text: '一级',
                    left: '10%',
                    bottom: '10%',
                    textStyle: {
                        color: color[0],
                        fontSize: 14
                    }
                },
                {
                    text: '二级',
                    left: '34%',
                    bottom: '10%',
                    textStyle: {
                        color: color[1],
                        fontSize: 14
                    }
                },
                {
                    text: '三级',
                    left: '58%',
                    bottom: '10%',
                    textStyle: {
                        color: color[2],
                        fontSize: 14
                    }
                },
                {
                    text: '四级',
                    left: '82%',
                    bottom: '10%',
                    textStyle: {
                        color: color[3],
                        fontSize: 14
                    }
                },
            ],
            series: [
                {
                    name: '警情一级分类统计',
                    type: 'liquidFill',
                    data: [value, value, value],
                    //水球大小
                    radius: 80,
                    backgroundStyle: {
                        borderWidth: 2,
                        borderColor: '#fb5e69',
                        color: '#fff'
                    },
                    outline: {
                        borderDistance: 2, //外部轮廓与图表的距离 数字
                        itemStyle: {
                            borderColor: color[0], //边框的颜色
                            borderWidth: 2,  //边框的宽度
                            shadowBlur: 0
                        }
                    },
                    color: [color[0], 'rgba(179,0,14,0.7)', 'rgba(179,0,14,0.4)', 'rgba(179,0,14,0.2)'],//水波的颜色 对应的是data里面值
                    center: ['15%', '50%'],
                    itemStyle: {
                        opacity: 0.5,//波浪的透明度
                        shadowBlur: 0,//波浪的阴影范围
                    },
                    label: {
                        normal: {
                            position: ['50%', '30%'],
                            formatter: (value * 100).toFixed(1) + '%',
                            textStyle: {
                                fontSize: 16,
                            },
                        }
                    }
                },
                {
                    name: '警情二级分类统计',
                    type: 'liquidFill',
                    data: [value1, value1, value1],
                    radius: 80,
                    backgroundStyle: {
                        borderWidth: 2,
                        borderColor: '#daec62',
                        color: '#fff'
                    },
                    outline: {
                        borderDistance: 2, //外部轮廓与图表的距离 数字
                        itemStyle: {
                            borderColor: color[1], //边框的颜色
                            borderWidth: 2,  //边框的宽度
                            shadowBlur: 0
                        }
                    },
                    color: [color[1], 'rgba(230,226,100,0.7)', 'rgba(230,226,100,0.4)', 'rgba(230,226,100,0.2)'],//水波的颜色 对应的是data里面值
                    center: ['38%', '50%'],
                    itemStyle: {
                        opacity: 0.5,//波浪的透明度
                        shadowBlur: 0,//波浪的阴影范围
                    },
                    label: {
                        normal: {
                            position: ['50%', '30%'],
                            formatter: (value1 * 100).toFixed(1) + '%',
                            textStyle: {
                                fontSize: 16,
                            },
                        }
                    }
                },
                {
                    name: '警情三级分类统计',
                    type: 'liquidFill',
                    data: [value2, value2, value2],
                    radius: 80,
                    backgroundStyle: {
                        borderWidth: 2,
                        borderColor: '#89aae4',
                        color: '#fff'
                    },
                    outline: {
                        borderDistance: 2, //外部轮廓与图表的距离 数字
                        itemStyle: {
                            borderColor: color[2], //边框的颜色
                            borderWidth: 2,  //边框的宽度
                            shadowBlur: 0
                        }
                    },
                    color: [color[2], 'rgba(37,40,110,0.4)', 'rgba(37,40,110,0.3)', 'rgba(37,40,110,0.2)'],//水波的颜色 对应的是data里面值
                    center: ['62%', '50%'],
                    itemStyle: {
                        opacity: 0.5,//波浪的透明度
                        shadowBlur: 0,//波浪的阴影范围
                    },
                    label: {
                        normal: {
                            position: ['50%', '30%'],
                            formatter: (value2 * 100).toFixed(1) + '%',
                            textStyle: {
                                fontSize: 16,
                            },
                        }
                    }
                },
                {
                    name: '警情四级分类统计',
                    type: 'liquidFill',
                    data: [value3, value3, value3],
                    radius: 80,
                    backgroundStyle: {
                        borderWidth: 2,
                        borderColor: '#55ad4f',
                        color: '#fff'
                    },
                    outline: {
                        borderDistance: 2, //外部轮廓与图表的距离 数字
                        itemStyle: {
                            borderColor: color[3], //边框的颜色
                            borderWidth: 2,  //边框的宽度
                            shadowBlur: 0
                        }
                    },
                    color: [color[2], 'rgba(40,104,35,0.4)', 'rgba(40,104,35,0.3)', 'rgba(40,104,35,0.2)'],//水波的颜色 对应的是data里面值
                    center: ['85%', '50%'],
                    itemStyle: {
                        opacity: 0.5,//波浪的透明度
                        shadowBlur: 0,//波浪的阴影范围
                    },
                    label: {
                        normal: {
                            position: ['50%', '30%'],
                            formatter: (value3 * 100).toFixed(1) + '%',
                            textStyle: {
                                fontSize: 16,
                            },
                        }
                    }
                }
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
                top: 0,
                right:20
            },
        };
        liquid.setOption(option)
    },

    // 抽取接警处理统计
    echarts6() {
        let myCharts = echarts.init(document.getElementById("jiejingchuli"));
        let xData = [];
        let yData = [];
        let myColor = ['#dee2ff', '#ced5ff', '#b1bbff', '#94a2ff', '#7d7eff', '#7a68ff', '#5b3cfe',]
        this.data6.forEach(function (value) {
            yData.push(value.type);
            xData.push(value.value);
        });
        let option = {
            backgroundColor: '#fff',
            // title: [{
            //     text: '报警量' + sum,
            //     left: 150,
            //     top: 6,
            //     textStyle: {
            //         fontSize: 14,
            //         fontWeight: 'normal',
            //         color: '#25286e'
            //     }
            // }],
            yAxis: {
                type: 'category',
                data: yData,
                axisLabel: {
                    //x坐标轴字体设置
                    show: true,
                    fontSize: 12,
                    color: '#333',
                    formatter: function (val) {
                        if (val.length > 4) {
                            val = val.slice(0, 4);
                            return val + '...';
                        } else {
                            return val
                        }
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#dddddd'
                    }
                }
            },
            xAxis: [{
                type: 'value',
                data: xData,
                interval: 100,
                min: 0,
                max: 1000,
                axisLabel: {
                    //x坐标轴字体设置
                    show: true,
                    fontSize: 12,
                    color: '#333'
                },
                axisLine: {
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
                splitLine: {
                    show: false
                },
            }, {
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }],
            series: [{
                name: '报警量',
                type: 'bar',
                barWidth: '70%',
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
                    },
                    emphasis: {
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
                name: '背景',
                type: 'bar',
                barWidth: '70%',
                //设置柱子以哪个y轴位准，1表示第二个y轴，即y轴设置中的第二个对象
                xAxisIndex: 1,
                //两个柱子间的距离
                barGap: '-100%',
                data: [100, 100, 100, 100, 100,100,100],
                itemStyle: {
                    normal: {
                        color: '#f2f2f2'
                    },
                    emphasis: {
                        color: '#f2f2f2'
                    }
                },
                zlevel: 0
            }],
            grid: [{
                top: 42,
                bottom: 26,
                right:20,
                left:80
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
                formatter: function (params) {
                    return params[0].name + ':' + params[0].data;
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
                top: 0,
                right:20
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
        let daoqieMax = Math.max(...daoqie);
        let zhapianMax = Math.max(...zhapian);
        let qiangjianMax = Math.max(...qiangjian);
        let bangjiaMax = Math.max(...bangjia);
        let qiangjieMax = Math.max(...qiangjie);
        let option = {
            // title: {
            //     text: '近7日两抢一盗分布',
            // },
            //图例设置
            backgroundColor: '#fff',
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
                right: 0,
                top: 42,
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
                        fontSize: 14,
                        color: '#333'
                    },
                    axisLine: {
                        show:false
                    },
                    axisTick:{
                        show:false
                    }
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
                        fontSize: 14,
                        color: '#333',
                    },
                    axisLine: {
                        show:false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick:{
                        show:false
                    }
                },
                {
                    type: 'value',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show:false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick:{
                        show:false
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
                        }, {
                            name: '诈骗',
                            value: zhapianMax,
                            xAxis: 1,
                            yAxis: zhapianMax
                        }, {
                            name: '强奸',
                            value: qiangjianMax,
                            xAxis: 2,
                            yAxis: qiangjianMax
                        }, {
                            name: '绑架',
                            value: bangjiaMax,
                            xAxis: 3,
                            yAxis: bangjiaMax
                        }, {
                            name: '抢劫',
                            value: qiangjieMax,
                            xAxis: 4,
                            yAxis: qiangjieMax
                        }
                        ],
                        label: {
                            fontSize: 8,
                            borderWidth:0
                        },
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
                right: 60,
                top: 42,
                bottom: 26,
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
                formatter: '{b0}:<br />{a0}:{c0}<br>{a1}:{c1}<br>{a2}:{c2}',
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
                right: 20,
                top: 0
            },
        };
        mycharts.setOption(option);
    },
    // 切换 tag
    cut(v){
        if(v[1] === 1){
            this.variate_one = v[0];
            if(v[0]===1){

                // this.echarts1('area2');
            }else if(v[0]===2){
                console.log(this.variate_one)
                // this.echarts3('qiangdao2');
            }

        }else if(v[1]===2){
            this.variate_two = v[0]
        }else if(v[1]===3){
            this.variate_three = v[0]
        }

    }


},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.echarts1('area');
    this.echarts1('area2');
    this.echarts3('qiangdao');
    this.echarts3('qiangdao2');
    this.echarts2();
    this.echarts4();
    this.liquidFill();
    this.echarts6();
    this.echarts7();
    // window.addEventListener('resize', () => {
    //     // console.log('rezise')
    // })

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